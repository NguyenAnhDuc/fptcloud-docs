---
sidebar_label: "VPN Site-to-Site"
title: "VPN Site-to-Site"
source: "https://fptcloud.com/en/documents/vpn-site-to-site/"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# VPN Site-to-Site


VPN Site-to-Site


:::info
🇻🇳 **Phiên bản tiếng Việt:** [Đọc bằng tiếng Việt](/vpn-site-to-site-0)
:::


**Introduction**

  * With a Site-to-Site VPN, companies can build a complete virtual private network for diverse locations. This service connects various intranets in a continuous and secure manner, allowing employees to conveniently and securely share resources between intranets. 

  * FPT Cloud Site-to-Site VPN is a fully managed VPN service that allows you to create a secure connection between your office network and FPT's cloud resources. Using IPSec tunneling, this service connects enterprise data centers with branch offices, making it possible to access cloud-based applications and services without revealing confidential data. 


**Things to keep in mind before you create a Site-to-Site VPN:**

  * Network Architecture: Ensure your On-Premises network architecture is aligned with your S2S VPN deployment. This includes identifying IP addresses, network partitions, and the right network devices to establish a VPN connection. 

  * Floating IP: FPT Cloud system needs 1 public IP to connect to S2S VPN. The public IP used has not been assigned to any other service 

  * IP addressing: Make sure that the IP addresses used in the S2S VPN do not conflict with other networks in the organization or public networks. Define end-to-end IP addresses for VPN gateways and configure firewalls to allow traffic. 

  * Protocol and encryption: Choose the right protocol and encryption configuration for your S2S VPN. The most common is IPSec with AES or 3DES encryption, along with authentication protocols such as IKEv1 or IKEv2. Ensure the corresponding security configuration to ensure high security.


## Quick Guide 

  * [ Site to Site VPN Initialization ](./create-vpn)
  * [ View VPN Info ](./view-vpn-)


## Detailed Instructions 

  * [ Disable VPN-Site-to-Site ](./disable-vpn-site-to-site)
  * [ Enable VPN-Site-to-Site ](./enable-vpn-s2s)
  * [ Edit VPN Information ](./edit-vpn)
  * [ Edit Security Profile ](./edit-security-profile)
  * [ Download Config VPN Site-to-Site ](./download-config-)
  * [ Delete VPN Site-to-Site ](./delete-vpn)
  * [ VPN-Activity ](./vpn-activity)


## FAQs 

  * [ Authenticate-Certificate mode ](./authenticate-certificate-mode-1)


## VPN Site-to-Site (new version) 

  * [ Common VPN Device Configuration ](./common-vpn-device-configuration)
    * [ VPN Site-to-Site Configuration with Palo Alto ](./vpn-site-to-site-configuration-with-palo-alto-guide)
    * [ VPN Site-to-Site Configuration with Fortigate ](./vpn-site-to-site-configuration-with-fortigate-guide)
    * [ VPN Site-to-Site Configuration between FCI and AWS (Virtual private gateways) ](./vpn-site-to-site-configuration-between-fci-and-aws-\(virtual-private-gateways\)-guide)
    * [ VPN Site-to-Site Configuration between FCI and AWS (Transit-Gateway) ](./vpn-site-to-site-configuration-between-fci-and-aws-\(transit-gateway\)-guide)
    * [ VPN Site-to-Site Configuration between Openstack portal and VMW ](./openstack-portal-to-vmw)
  * [ VPN Connection Management ](./vpn-connection-management)
    * [ Create a VPN Connection ](./create-a-vpn-connection)
    * [ Edit VPN Connection ](./edit-vpn-connection)
    * [ Enable/Disable VPN Connection ](./enable-disable-vpn-connection)
    * [ Delete VPN Connection ](./delete-vpn-connection)
    * [ Create Customer gateway ](./create-customer-gateway)
    * [ Edit Customer gateway ](./edit-customer-gateway)
    * [ Delete Customer gateway ](./delete-customer-gateway)
    * [ Service Authorization Management ](./permission-access-guide)
    * [ Setting up alerts via the Cloud Guard service ](./setting-up-alerts-via-the-cloud-guard-service-guide)
    * [ Service monitoring via the Monitoring feature ](./monitoring-service-through-monitoring-feature-guide)
    * [ Monitoring service through Logging feature ](./monitoring-service-through-logging-feature-guide)
  * [ FAQs ](./frequently-asked-question)


