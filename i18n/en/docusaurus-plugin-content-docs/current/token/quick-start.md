---
sidebar_label: "Quick Start"
title: "Quick Start"
source: "https://fptcloud.com/en/documents/user-token/?doc=quick-start"
parent: "https://fptcloud.com/en/documents/user-token"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Quick Start


* * *

### **How It Works (Typical Flow)**


→ The user create a token in User Token Service.


→ If valid, the service issues an **access token** (and optionally a **refresh token**).


→ The client calls the target API, including the access token in the header.


→ The API verifies the token (via signature or introspection endpoint).


→ If the token is valid and authorized for that resource, access is granted.


[ Previous Overview ](./overview)
