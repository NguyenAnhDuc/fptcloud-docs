---
sidebar_label: "カーネルのシャットダウン方法"
title: "カーネルのシャットダウン方法"
source: "https://fptcloud.com/ja/documents/ai-notebook-jp/?doc=shut-down-jp"
parent: "https://fptcloud.com/ja/documents/ai-notebook-jp"
lang: ja
converted: "2026-03-19"
sidebar_class_name: hidden
---

# カーネルのシャットダウン方法


* * *

**ステップ1** : **実行中のカーネル/ノートブック** に移動します（ナビゲーションバー上から2番目のアイコン）。 ![Alt text](https://fptcloud.com/wp-content/uploads/2025/11/Screenshot-2025-11-04-at-13.33.53.png)

## (1) 実行中のGPUカーネル一覧表：

カーネル履歴テーブルには、実行中のすべてのGPUカーネルの詳細が記録されます。

**フィールド** | **説明**  
---|---  
**名前** | GPUカーネルの一意の識別子  
**作成時刻** | GPUカーネルが開始された日時  
**アクション** | 利用可能なアクション:  
  
• **すべてをシャットダウン** — ラボ内のすべての実行中のカーネルを終了します。終了後、カーネルは **カーネル履歴** セクションに表示されます。  
  
• **シャットダウン** — 選択したカーネルのみを終了します。終了したカーネルは **カーネル履歴** セクションに表示されます。  
  
## (2) カーネル履歴テーブル：

**カーネル履歴** テーブルは、終了したすべてのGPUカーネルの詳細を記録します。 この情報は、使用時間の確認**やAI Factory Portalの** 課金データとの照合に役立ちます。

**フィールド** | **説明**  
---|---  
名前 | GPUカーネルの一意の識別子  
作成日時 | GPUカーネルが開始された日時  
実行時間 | GPUカーネルの総実行時間  
  
## 請求照合:

![Info Icon](https://fptcloud.com/wp-content/uploads/2025/05/information-fill-1.png)

**Notice:** AI Factoryの請求情報に表示されるGPU実行時間と、AIノートブックのカーネル履歴テーブルの「実行時間」列との間に、わずかな差異（1～10秒）が生じる場合があります。この小さな差異は、内部サービス間の通常の同期遅延によるものであり、想定内のものです。

![Alt text](https://fptcloud.com/wp-content/uploads/2025/11/Screenshot-2025-11-04-at-14.12.39.png)

[ Previous ノートブックを新規/既存カーネルに接続する方法 ](./switch)
