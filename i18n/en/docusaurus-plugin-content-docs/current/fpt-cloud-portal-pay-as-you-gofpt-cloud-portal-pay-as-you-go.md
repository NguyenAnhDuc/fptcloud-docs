---
sidebar_label: "FPT Cloud Portal"
title: "FPT Cloud Portal"
source: "https://fptcloud.com/en/documents/fpt-cloud-portal-2/"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# FPT Cloud Portal


FPT Cloud Portal

##  Outstanding advantages of FPT Cloud Portal? 

  * **Automating processes:** With the advantage of being fast and convenient, customers only need to perform a few simple steps to initiate and use the service.
  * **24/7 support:** Experienced and highly specialized customer care team is always ready to support.
  * **Strong and stable infrastructure:** As one of the largest partners of VMWare - the largest virtualization infrastructure provider in the world today, FPT Smart Cloud ensures that servers and hardware meet international standards. economic.
  * **Reasonable price:** FPT Smart Cloud always strives to design suitable and cost-optimized solutions for customers.


##  Main components of FPT Cloud Portal 

Cloud computing platform FPT Cloud Portal includes:

## Elastic Compute 

  * Overview 
  * Virtual Instance 
  * High Capacity Storage 
  * Virtual Private Cloud 
  * Custom Image 


## Networking Service 


## Activity Log 


## Database Service 


## Kubenetes Engine 


## Glossary 


## Release note

### July 26, 2021: Introduced subnet and instance monitoring features.

#### New features:

  * Instance Monitoring: Helps users monitor the running status of the instance. Tracks CPU usage, RAM, and local disk read/write speeds by the last hour, day, and week.
  * Create and list subnets: Create a new subnet for VPC. View all current CIDR subnets and ranges in the VPC.
  * List of storage types of the instance: In the Instance details page, the Storage section will display information about the instance's local storage and external hard drives (if any).


#### Upgrades:

  * Notifications of successful confirmation, instance creation, subnet, SSH have been changed to green for easier visibility.
  * Display real-time instance creation status: when creating instance, the system will auto-sync to display instance creation status, no need to refresh manually.
  * SSH Key: Users can use their own Public Key each time they create a new SSH Key profile.


### July 19, 2021: Revamped Floating IP. Introduced snapshot feature

#### New features:

  * Rebuild outgoing IP Address: Support to overcome redundant SNAT rule under vCloud Director, and unstable outbound IP address status. Now, after rebuilding the list, the virtual machine with the inbound IP Address will go out with the correct address of the inbound address; if the virtual machine does not have an inbound IP address, it will exit with the default IP address of the VPC. Excess, duplicate SNAT cases will be cleanedup automatically.
  * Snapshot: create, restore and delete Snapshot for the instance.
  * Display Outgoing IP Address rules to help users check NAT configuration.


#### Upgrades:

  * Revamp's Floating IP display makes it easier for users to see the Public IP addresses being used.
  * Displays a list of hard drives in the instance details page.


### June 6, 2021: Introduced Storage Disk.

  * Fixed Floating IP display issue.
  * Add features to manage, attach, detach Storage Disk
  * Fix messages showing instance initialization status.
  * Rearrange the menu bar.
  * Fix copy terms errors.
  * Fixed display of SSH keys.
  * Fix Logout error.
  * The system will ask the user to change the password when logging in for the first time.
  * Fixed Terminate instances not showing warnings.
  * Users can open custom ports in addition to the list of available ports in the Security Group.


### May 05, 2021: Initial release.

  * The first beta version of FPT Elastic Compute.
  * Add PoC feature.
  * Autofill default options when instantiating Instance.
  * Automatically select SSH Key when initializing Instance.
  * Supports firewall rule management.
  * Supports RDP into Windows virtual machines.
  * Supports SSH into Linux virtual machines.


