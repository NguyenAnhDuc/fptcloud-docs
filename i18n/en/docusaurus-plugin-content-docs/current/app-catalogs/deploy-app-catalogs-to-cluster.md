---
sidebar_label: "Deploy App Catalogs to Cluster"
title: "Deploy App Catalogs to Cluster"
source: "https://fptcloud.com/en/documents/fpt-app-catalogs/?doc=deploy-app-catalogs-to-cluster"
parent: "https://fptcloud.com/en/documents/fpt-app-catalogs"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Deploy App Catalogs to Cluster


* * *

After searching for the desired chart, to deploy the app to the K8s cluster, follow these steps:

**Step 1** : Click **Deploy** to start deploying the app catalog

![](https://fptcloud.com/wp-content/uploads/2023/12/Picture13-1.png)

**Step 2** : Enter the required information to deploy the app:

  * **Release name** : The name used to deploy the chart

_**Note** : The release name must be unique for each chart in each namespace._

  * **Versions** : The version of the chart used to deploy

_**Note** : You need to check the compatibility of the app version and the Kubernetes version_

  * **Clusters** : Select the cluster from the Management Clusters list

  * **Namespace** : Enter the K8s namespace to deploy the app. If the namespace does not exist on the Kubernetes cluster, the namespace will be created automatically during the chart installation process.

  * **User Defined Values** : Enter the values you need to change during the deployment process. If this value is blank, the app will be installed with the default values


![](https://fptcloud.com/wp-content/uploads/2023/12/Picture14-1.png)

**Step 3** : Click **Install App** to proceed deploying the chart.

After the chart is deployed, it can be managed in the **Deployed Apps** section.

![](https://fptcloud.com/wp-content/uploads/2023/12/Picture19-1.png)

![](https://fptcloud.com/wp-content/uploads/2023/12/Picture15-1.png)

**Step 4** : View the deployed app in the cluster

  * To view the deployed chart in the namespace, run this command:


![](https://fptcloud.com/wp-content/uploads/2023/12/Picture16-1.png)
    
    
    helm -n ||NAMESPACE|| list

  * To view the user values that was used to deploy, run this command:


    
    
    helm -n ||NAMESPACE|| get values cert-manager

![](https://fptcloud.com/wp-content/uploads/2023/12/Picture17-1.png)

  * To view the status of the pods and services that have been deployed, run this command:


    
    
    helm -n ||NAMESPACE|| get all

![](https://fptcloud.com/wp-content/uploads/2023/12/Picture18-1.png)

[ Previous Search App Catalogs from a repository ](./search-app-catalogs-from-a-repository) [ Next Manage Deployed Applications ](./manage-deployed-applications)
