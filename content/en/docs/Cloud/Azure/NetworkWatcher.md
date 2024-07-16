---
title: "NetworkWatcher"

---
## Monitoring

### Connection monitor
Network Watcher Connection Monitor enables you to configure and track connection reachability, latency, and network topology changes. If there is an issue, it tells you why it occurred and how to fix it. 

## Network diagnostic tools

### IP flow verify
Network Watcher IP flow verify checks if a packet is allowed or denied to or from a virtual machine based on 5-tuple information.
The security group decision and the name of the rule that denied the packet is returned.

### Next hop
Next Hop provides the next hop from the target virtual machine to the destination IP address.

### VPN troubleshoot
Network Watcher VPN Troubleshoot diagnoses the health of the virtual network gateway or connection. This request is a long running transaction, and the results are returned once the diagnosis is complete. You can select multiple gateways or connections to troubleshoot simultaneously.

### Packet capture


### Connection troubleshoot
Network Watcher Connection Troubleshoot provides the capability to check a direct TCP connection from a virtual machine (VM) to a VM, fully qualified domain name (FQDN), URI, or IPv4 address. To start, choose a source to start the connection from, and the destination you wish to connect to and select "Check". See the screenshots below.

## Logs
### NSG flow logs
Network security group (NSG) flow logs allows you to view information about ingress and egress IP traffic through a Network security groups or Network security groups (classic) . NSG flow logs do not support Storage accounts (classic).

### Diagnostic logs
Diagnostic settings are used to configure streaming export of platform logs and metrics for a resource to the destination of your choice. You may create up to five different diagnostic settings to send different logs and metrics to independent destinations.

### Traffic Analytics
Traffic Analytics monitors your cloud environment and provides visibility into user and application activity across Azure. Traffic Analytics analyzes NSG Flow logs across Azure regions and subscriptions and equips you with actionable information to optimize workload performance, secure applications and data, audit your organization’s network activity and stay compliant. 

![Connection troubleshoot](/images/Azure/vm_connection_troubleshoot_manually.png)  
![](/images/Azure/nw_vm_add_connection_monitor_1.png)  
![](/images/Azure/nw_vm_add_connection_monitor_2.png)  
