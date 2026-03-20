---
sidebar_label: "Atlassian Jira"
title: "Atlassian Jira"
source: "https://fptcloud.com/en/documents/incident-management-2/?doc=atlassian-jira"
parent: "https://fptcloud.com/en/documents/incident-management-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Atlassian Jira


* * *

Integration with **Atlassian Jira** helps maintain accurate and reliable project status when dealing with system’s incident response. A bug issue will automatically be created in the Jira story if you have a declared incident.

### Integration

**Step 1** : After clicking **Integration** , the information form pops up.

![](https://fptcloud.com/wp-content/uploads/2023/11/Picture12.png)

**Step 2** : Enter the necessary information:

  * **Atlassian Server URL** : URL to access the Atlassian Jira system.

  * **User email** : Email of the account registered with Atlassian Jira

  * **Access Token** : Access Token of the specified account


_**Note** : See instructions for creating or obtaining an Access Token [here](<https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/>)_

**Step 3** : After filling in the information, click **Integrate** to integrate Jira into the incident system.

### Create a Trigger

**Step 1** : First, click **Show details** to view details information of the Jira integration.

**Step 2** : Click **\+ Run when an event fires** to create a trigger. The information form will shows up:

![](https://fptcloud.com/wp-content/uploads/2023/11/Picture15.png)

**Step 3** : Enter the necessary information:

  * **Jira Project** : Choose a desired Jira project to initiate a trigger

  * **Issue Type** : Type of issue

  * **Incident active status** : The initial status of the issue when the incident is active.

  * **Incident resolved status** : The initial status of the issue when the incident is resolved

  * **Run this action when** : _Incident is declared_


**Step 4** : After filling all the information, click **Add event action** to create a trigger

_**Note** : You can create multiple triggers._

### Delete a trigger

To delete a trigger, Click the **Trash** icon.

![](https://fptcloud.com/wp-content/uploads/2023/11/Picture17.png)

[ Previous Outgoing Webhook ](./outgoing-webhook) [ Next Configure Incident Settings ](./configure-incident-settings)
