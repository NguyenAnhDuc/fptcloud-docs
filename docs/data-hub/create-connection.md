---
sidebar_label: "Name : Enter connection name"
title: "Create Connection"
source: "https://fptcloud.com/en/documents/data-hub/?doc=create-connection"
parent: "https://fptcloud.com/en/documents/data-hub"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Create Connection


* * *

  * **Step 1** : Access Object Storage Management at <https://console.fptcloud.com> and select the Buckets tab, choose Create Bucket. More details about S3 bucket, visit here: <https://fptcloud.com/en/documents/fpt-object-storage/?doc=tutorials-bucket>
  * **Step 2** : Upload a New Object to the Bucket. More details about Object, visit here: <https://fptcloud.com/en/documents/fpt-object-storage/?doc=tutorials-object>


**_Note_** : Ensure that you have successfully created a bucket to store objects in FPT Object Storage. You can also refer to the bucket creation guide here: <https://fptcloud.com/en/documents/fpt-object-storage/>

  * **Step 3** : Access the Data Hub service, navigate to the Connection list, and click the "Create Connection" button ![file](https://fptcloud.com/wp-content/uploads/2025/03/image-1742974995525.33.34.png)
  * You will need to enter the required information to create a connection. ![file](https://fptcloud.com/wp-content/uploads/2025/03/image-1742975565417.51.05.png)
    * **Name** : Enter connection name 
      * Valid characters: Only letters (a-z, case-insensitive), numbers (0-9), and hyphens (-).
      * Length: Between 3 and 64 characters
    * **Data source** : Select a datasource to enable connection to the data
    * **Endpoint URL** : The endpoint address of the bucket you want to connect to, example: <https://test-bucket-name.s3-han02.fptcloud.com>
    * **Access key** & **Secret key** : Authentication information for access permissions. More details about Access Key Management, visit here: <https://fptcloud.com/en/documents/fpt-object-storage/?doc=tutorials-access-key-management>
  * Click **Save** to create a connection
  * After successfully creating a connection, you can select one for training, evaluation, or testing data to build a pipeline. You can also refer to the pipeline creation guide here <https://fptcloud.com/en/documents/model-fine-tuning/?doc=create-pipeline>


[ Previous Initial Setup ](./initial-setup)
