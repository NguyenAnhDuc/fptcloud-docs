---
sidebar_label: "Upload Files"
title: "Upload Files"
source: "https://fptcloud.com/en/documents/model-hub-2/?doc=upload-files"
parent: "https://fptcloud.com/en/documents/model-hub-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Upload Files


* * *

Choose your model version

**Step 1: Install the SDK CLI**
    
    
    pip install https://s3-han02.fptcloud.com/aifactory-public/SDK/model_space-0.3.3-py3-none-any.whl

**Step 2: Set up environment variables**
    
    
    export FPT_SPACE_URL=https://ai-api.fptcloud.com/
    export FPT_TENANT_ID=
    export FPT_SPACE_TOKEN=

**_Note_ :**

_Please visit<https://ai.fptcloud.com/{{tenant_name}}/user-token> to generate your access token and paste it after FPT_SPACE_TOKEN= above_

_To use the SDK through a proxy (e.g., internal environments), make sure to configure**one of** the proxy environment variables (HTTP_PROXY or HTTPS_PROXY) in addition to the variables above._
    
    
    export HTTP_PROXY=
    export HTTPS_PROXY=

**Step 3: Upload model version**
    
    
    model_space model upload --model-id {{model_id}} --version-id {{version_id}}  --path 

**Optional parameters**

  * -include:


Include only files that match the given regex patterns. Commas should separate multiple patterns ,.

  * -exclude:


Exclude files that match the given regex patterns. You can also use commas , to separate multiple patterns.

[ Previous How to Upload/Download Files by SDK? ](./how-to-upload-download-files-by-sdk) [ Next Download Files ](./download-files)
