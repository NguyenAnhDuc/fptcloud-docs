---
sidebar_label: "Managing REST APIs"
title: "Managing REST APIs"
source: "https://fptcloud.com/en/documents/fpt-api-management-2/?doc=manage-rest-apis"
parent: "https://fptcloud.com/en/documents/fpt-api-management-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Managing REST APIs


* * *

### 1\. Creating REST APIs

**Step 1** : In the **Application** menu, navigate to **API Manager** > **Rest APIs** > click **Create**.

![](https://fptcloud.com/wp-content/uploads/2023/01/Userguide-FPT-API-Management-6-1024x538.png)

**Step 2** : Enter the required information:

  * **Name** : API Name.

  * **Title** : Title for the API.

  * **Base Path** : The path that clients will send requests to after the API is published.

  * **Target Endpoint** : Endpoint of the currently available API provided to customers.

  * **Target Security** : Authentication information for the API.

  * **Security Method** : Authentication method when clients use this API. Currently, there are three methods available: Basic Authentication, OAuth, and API Key.


_**Note** : The security method cannot be changed after creation, so please be cautious when declaring this information._

![](https://fptcloud.com/wp-content/uploads/2023/01/Userguide-FPT-API-Management-7-1024x538.png)

**Step 3** : Click **OK** to initialize the REST API.

![](https://fptcloud.com/wp-content/uploads/2023/01/Userguide-FPT-API-Management-8-1024x538.png)

If the **Create** button is disabled, check your API Management service package. For the **Pilot** package, only a maximum of 2 APIs can be declared in the system.

Additionally, if you have a list of APIs to declare, you can navigate to the **Utility** section to declare multiple APIs simultaneously.

Proceed as follows:

**Step 1** : In the **Application** menu, select **Utility** > **Import API**.

![](https://fptcloud.com/wp-content/uploads/2023/01/api1.png)

**Step 2** : Enter the API data in the **JSON** text field, which must be in **JSON** format.

The required format for the input are:
    
    
    [
        {
            “name“: “”,
            “title“: “”,
            “base_path“: “”,
            “target_endpoint“: ““,
            “security_method“: “”
        }
    ]

**Step 3** : Click **Parse** > then click **Import**.

The successfully declared APIs will be displayed in the **Import APIs** table.

If any errors occur, error messages will be shown in the **Import Error** section.

### 2\. Edit REST APIs

To modify the information of a REST API, follow these steps:

**Step 1** : In **Rest APIs** , choose the REST API to modify > **Edit**.

![](https://fptcloud.com/wp-content/uploads/2023/11/api2.png)

**Step 2** : Enter new information and click **OK**.

![](https://fptcloud.com/wp-content/uploads/2023/11/api3.png)

### 3\. Delete REST APIs

If you want to remove a previously declared REST API from the system, ensure that the REST API is not associated with any Products. To detach REST APIs from Products, follow the instructions in the [Product Management](</en/documents/fpt-api-management-2/?doc=product-management>) section.

To delete Rest APIs, follow these steps:

**Step 1** : In **Rest APIs** , choose the REST API to delete > **Remove API**.

![](https://fptcloud.com/wp-content/uploads/2023/11/api4.png)

**Step 2** : In the confirmation popup, click **Yes** to proceed.

![](https://fptcloud.com/wp-content/uploads/2023/11/api5.png)

### 4\. Transformer

If you want to add/edit fields with a specified value in a request or response, you can use the API Management's **Transformer** feature.

To begin, follow these steps:

**Step 1** : In **Rest APIs** , choose the REST APIs to modify > click **Edit** > Select the **Advanced** tab > Click **Transformations**.

**Step 2** : Tick **Request Transformer / Response Transformer** , click **Raw View** , and input the information you want to modify in each request/response.

_For example_ : Removing certain fields in the request transformer: In case you want to remove one or more fields in the body / headers / query string of a request, input the data you want to change in the respective section.

![](https://fptcloud.com/wp-content/uploads/2023/11/api6.png)

### 5\. Security (Cross-Origin Resource Sharing)

To use this feature, follow these steps:

**Step 1** : In the **Application** menu, go to **API Manager** > **Rest APIs** > select an API > **Edit**.

![](https://fptcloud.com/wp-content/uploads/2023/11/api7.png)

**Step 2** : Select the **Advanced** tab > Select the **Security** tab > tick the **Use CORS** checkbox.

![](https://fptcloud.com/wp-content/uploads/2023/11/api8.png)

**Step 3** : Input information:

  * **Access-Control-Allow-Origin** : Enter IP, domain, etc., allowing access to the API. Only listed browsers will have access to the API. If left blank, it means allowing access to the API for all other domains.


[ Previous Declaring information in ApiManager Application ](./declaring-information) [ Next Managing Products ](./managing-products)
