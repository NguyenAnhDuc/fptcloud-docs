#!/bin/bash
# sync-notion-to-docs.sh - Notion → Docusaurus recursive sync

NOTION_KEY="${NOTION_KEY:-}"
PAGE_ID="${1:-32a5b6d5-4963-813c-9ae4-eb66936019a1}"
SLUG="${2:-cloud-advisor-demo}"
BASE_DOCS_DIR="${3:-/root/fptcloud-docs/docs/demo}"
OUTPUT_DIR="$BASE_DOCS_DIR/$SLUG"

slugify() {
  echo "$1" | tr '[:upper:]' '[:lower:]' | \
    sed 's/[áàảãạăắằẳẵặâấầẩẫậ]/a/g; s/[éèẻẽẹêếềểễệ]/e/g; s/[íìỉĩị]/i/g; s/[óòỏõọôốồổỗộơớờởỡợ]/o/g; s/[úùủũụưứừửữự]/u/g; s/[ýỳỷỹỵ]/y/g; s/đ/d/g' | \
    sed 's/[^a-z0-9 ]/ /g' | tr ' ' '-' | sed 's/--*/-/g;s/^-//;s/-$//'
}

fetch_blocks() {
  curl -s "https://api.notion.com/v1/blocks/$1/children?page_size=100" \
    -H "Authorization: Bearer $NOTION_KEY" \
    -H "Notion-Version: 2022-06-28"
}

blocks_to_md() {
  echo "$1" | python3 -c "
import sys, json
d = json.load(sys.stdin)
lines = []
for b in d.get('results', []):
    t = b.get('type', '')
    if t == 'child_page': continue
    obj = b.get(t, {})
    rich = obj.get('rich_text', [])
    text_parts = []
    for r in rich:
        pt = r.get('plain_text', '')
        ann = r.get('annotations', {})
        if ann.get('bold'): pt = f'**{pt}**'
        if ann.get('italic'): pt = f'*{pt}*'
        if ann.get('code'): pt = f'\`{pt}\`'
        text_parts.append(pt)
    text = ''.join(text_parts)
    if t == 'heading_1': lines.append(f'# {text}')
    elif t == 'heading_2': lines.append(f'## {text}')
    elif t == 'heading_3': lines.append(f'### {text}')
    elif t == 'paragraph': lines.append(text if text else '')
    elif t == 'bulleted_list_item': lines.append(f'- {text}')
    elif t == 'numbered_list_item': lines.append(f'1. {text}')
    elif t == 'callout':
        emoji = b.get(t, {}).get('icon', {}).get('emoji', '💡')
        lines.append(f'> {emoji} {text}')
    elif t == 'code':
        lang = obj.get('language', '')
        lines.append(f'\`\`\`{lang}\n{text}\n\`\`\`')
    elif t == 'divider': lines.append('---')
    elif t == 'quote': lines.append(f'> {text}')
print('\n'.join(lines))
"
}

write_page() {
  local pid="$1" outfile="$2" title="$3"
  local blocks=$(fetch_blocks "$pid")
  local content=$(blocks_to_md "$blocks")
  mkdir -p "$(dirname "$outfile")"
  printf -- "---\ntitle: \"%s\"\nsidebar_label: \"%s\"\nsource: \"notion\"\nlast_synced: \"%s\"\n---\n\n%s\n" \
    "$title" "$title" "$(date -u +%Y-%m-%dT%H:%M:%SZ)" "$content" > "$outfile"
  echo "  📄 $outfile"
}

get_subpages() {
  fetch_blocks "$1" | python3 -c "
import sys,json
d=json.load(sys.stdin)
for b in d.get('results',[]):
    if b.get('type')=='child_page':
        title=b.get('child_page',{}).get('title','')
        print(f\"{b['id']}|{title}\")
"
}

# ── Main ──────────────────────────────────────────────────────────────────────
echo "🔄 Syncing $PAGE_ID → $OUTPUT_DIR/"
mkdir -p "$OUTPUT_DIR"

# Page title
TITLE=$(curl -s "https://api.notion.com/v1/pages/$PAGE_ID" \
  -H "Authorization: Bearer $NOTION_KEY" -H "Notion-Version: 2022-06-28" | \
  python3 -c "import sys,json; d=json.load(sys.stdin); print(''.join([t.get('plain_text','') for t in d.get('properties',{}).get('title',{}).get('title',[])]))")
echo "📄 $TITLE"

# Sync page cha → index.md
write_page "$PAGE_ID" "$OUTPUT_DIR/index.md" "$TITLE"

# Sync sub-pages
SUBS=$(get_subpages "$PAGE_ID")
if [ -n "$SUBS" ]; then
  echo "🔄 Sub-pages:"
  while IFS='|' read -r sid stitle; do
    [ -z "$sid" ] && continue
    sslug=$(slugify "$stitle")
    write_page "$sid" "$OUTPUT_DIR/$sslug.md" "$stitle"
  done <<< "$SUBS"
fi

echo ""
echo "✅ $(find "$OUTPUT_DIR" -name '*.md' | wc -l) files → $OUTPUT_DIR/"
echo ""
echo "🏗️  Building..."
cd /root/fptcloud-docs
NODE_OPTIONS="--max-old-space-size=3072" npx docusaurus build --locale vi 2>&1 | grep -E "SUCCESS|ERROR" | tail -3
echo "🚀 https://fptcloud-docs.ducna.xyz/demo/$SLUG/"
