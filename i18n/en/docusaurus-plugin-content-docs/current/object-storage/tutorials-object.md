---
sidebar_label: "Object"
title: "Object"
source: "https://fptcloud.com/en/documents/fpt-object-storage/?doc=tutorials-object"
parent: "https://fptcloud.com/en/documents/fpt-object-storage"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Object


* * *

# Upload a New Object to the Bucket

FPT Unify Portal supports a maximum upload size of 100GB per upload. If you need to upload a larger file, please use the S3 tool or S3 CLI.

If the file you are about to upload has the same name as an existing file in the folder, you will receive an overwrite warning. If versioning is not enabled, these files will overwrite the existing file in the bucket. If versioning is enabled, the system will create a new version.

**Step 1** : In the **Object Storage Management** dashboard, select the bucket where you want to upload the file.

**Step 2** : Navigate to the location where you want to add the file and select **Upload object.** ![file](https://s3-sgn10.fptcloud.com/image-fptcloud-documention/fpt-object-storage/image-1690857983047.png) **Step 3** : Choose the file from your device to upload and click **Upload**. ![file](https://s3-sgn10.fptcloud.com/image-fptcloud-documention/fpt-object-storage/image-1690857992938.png)

# Download an Object

**Step 1** : In the **Object Storage Management** dashboard, select the bucket that contains the file you want to download.

**Step 2** : Navigate to the location of the file you want to download and click on the file's name. The system will automatically download the selected file to your device through the browser. ![file](https://s3-sgn10.fptcloud.com/image-fptcloud-documention/fpt-object-storage/image-1690858004400.png)

# Copy the URL of an Object

You can obtain the URL of each object in case you need to share the file or link it to another website. However, to successfully GET this object, it must be in Public mode, along with the bucket containing it.

**Step 1** : In the **Object Storage Management** dashboard, select the bucket containing the file you want to copy the URL.

**Step 2** : Navigate to the file location, and in the **Action** section, select **Copy URL.** ![file](https://s3-sgn10.fptcloud.com/image-fptcloud-documention/fpt-object-storage/image-1690858029271.png)

# Delete Object
    
    
    Note: If versioning is not enabled, deleting an object will permanently remove the object and cannot be recovered. Proceed with caution.

**Step 1:** On the **Object Storage Management** dashboard, select the bucket containing the file you want to delete.

**Step 2:** Navigate to the file location, and in the **Action** section, choose **Delete.** ![file](https://s3-sgn10.fptcloud.com/image-fptcloud-documention/fpt-object-storage/image-1690858068872.png)

**Step 3:** A confirmation dialog will appear, displaying the file name and requesting user confirmation. Select **Delete** to proceed with the deletion. ![file](https://s3-sgn10.fptcloud.com/image-fptcloud-documention/fpt-object-storage/image-1690858075037.png)

[ Previous Bucket ](./tutorials-bucket) [ Next Permissions ](./tutorials-permissions)
