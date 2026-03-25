---
sidebar_label: "Change Application's Configuration"
title: "Change Application's Configuration"
source: "https://fptcloud.com/en/documents/fpt-app-catalogs/?doc=change-applications-configuration"
parent: "https://fptcloud.com/en/documents/fpt-app-catalogs"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Change Application's Configuration


* * *

From the application details page, you make changes to the configuration of applications by changing the value of **User Define Values** as follows:

**Step 1** : View the application's detail as per section 5.5.2.

**Step 2** : From the detail screen > click **Reconfig**

![](https://fptcloud.com/wp-content/uploads/2023/12/Picture25-1.png)

**Step 3** : Change the value of **User Define Values** :

![](https://fptcloud.com/wp-content/uploads/2023/12/Picture27-1.png)

**Step 4** : Click **Confirm** to apply the new config and view the deployment results of the config

![](https://fptcloud.com/wp-content/uploads/2023/12/Picture26-1.png)

**Step 5** : View the configuration detail deployed to the cluster by running this command:
    
    
    helm -n ||NAMESPACE|| get values ||CHART-NAME||

![](https://fptcloud.com/wp-content/uploads/2023/12/Picture28-1.png)
    
    
    kubectl -n ||NAMESPACE|| get pods

![](https://fptcloud.com/wp-content/uploads/2023/12/Picture29-1.png)

The number of replicas changes according to the number that has been configured.

[ Previous View a Deployed Application's Details ](./view-deployed-applications-details) [ Next Rollback an Application to the old configuration ](./rollback-an-application-to-the-old-configuration)
