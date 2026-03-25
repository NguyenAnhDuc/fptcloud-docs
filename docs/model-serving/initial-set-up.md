---
sidebar_label: "To begin using FPT Model Serving, you need to log in to FPT Portal."
title: "Initial Setup"
source: "https://fptcloud.com/en/documents/model-serving/?doc=initial-set-up"
parent: "https://fptcloud.com/en/documents/model-serving"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Initial Setup


* * *

**_If this is your first time using FPT Model Serving, first check and complete the following tasks:_**


To begin using FPT Model Serving, you need to log in to FPT Portal. 

Please visit [https://console.fptcloud.com](#) com and log in with the FPT Cloud account and password that have been provided. Make sure to select the correct Tenant, Region, and VPC to use the service. 

If you do not have an FPT Cloud account yet, visit the homepage at [https://fptcloud.com/ ](#) Then select the "Sign Up" function and enter the information as instructed by the system. Our support team will contact you shortly to verify the details and create your account. 

If you encounter any issues during the process, please contact our Support team for assistance.


After successfully logging into console.fptcloud.com, the user goes to the **AI Platform** section, selects **Active Service** , and clicks **Active**.

![Alt text](https://fptcloud.com/wp-content/uploads/2024/12/4.png)


To use Model Serving, a Kubernetes Cluster is required to provide processing power for AI Models.

Users can initialize a Managed FPT Kubernetes Engine Cluster (for CPU-based serving) following the instructions here: [https://fptcloud.com/documents/managed-fpt-kubernetes-engine/ ](#)

Alternatively, users can initialize an FPT Kubernetes Engine Cluster with GPU (for GPU-based serving) following the instructions here: [https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/ ](#)

[ Next Create a New Model Serving Deployment ](./create-a-new-model-serving-deployment)
