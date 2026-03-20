---
sidebar_label: "Webhook configuration"
title: "Webhook configuration"
source: "https://fptcloud.com/en/documents/fpt-argocd-2/?doc=Webhook-configuration"
parent: "https://fptcloud.com/en/documents/fpt-argocd-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Webhook configuration


* * *

ArgoCD will automatically check for manifest changes in the Git Repository every three minutes. ArgoCD supports Git webhook notifications from Github, GitLab, Bitbucket, Bitbucket Server and Gogs so that every time the Git Repository has a change, ArgoCD will automatically detect and synchronize these changes.

**Note: Each type of webhook can only be created once and can be updated for subsequent times. ArgoCD does not support configuring multiple secrets for each webhook type**

[ Previous Connect Kubernetes Cluster to ArgoCD Instance  ](./connect-kubernetes-cluster-to-argocd-instance) [ Next Create a New Webhook Secret ](./create-new-webhook-secret)
