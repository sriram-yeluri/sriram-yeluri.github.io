---
title: Firewall
linktitle: Firewall
description: >
  Learn about linux firewall setup
---

A firewall provides a means to protect machines from any unwanted traffic. It enables users/administrators to control incoming network traffic on host machines by defining a set of firewall rules. These rules are used to sort the incoming traffic and either block it or allow through.

## firewalld

* `firewalld` is a firewall service daemon that provides a dynamic customizable host-based firewall. Being dynamic, it enables creating, changing, and deleting the rules without the necessity to restart the firewall daemon each time the rules are changed.

* firewalld uses the concepts of zones and services

* Zones are predefined sets of rules.

* Network interfaces and sources can be assigned to a zone.

* The traffic allowed depends on the network your computer is connected to and the security level this network is assigned.

* Firewall services are predefined rules that cover all necessary settings to allow incoming traffic for a specific service and they apply within a zone.

* Services use one or more ports or addresses for network communication.

* Firewall filter communication based on ports.

```sh
# To start firewalld
systemctl unmask firewalld
systemctl enable firewalld.service
systemctl start firewalld

# To stop firewalld
systemctl stop firewalld
systemctl disable firewalld
systemctl mask firewalld

# Quick command to check whether the firewall is enabled or disabled
systemctl is-enabled firewalld
```

```sh
[root@centos8 ~]# systemctl status firewalld
● firewalld.service - firewalld - dynamic firewall daemon
   Loaded: loaded (/usr/lib/systemd/system/firewalld.service; enabled; vendor preset: enabled)
   Active: active (running) since Mon 2019-10-28 15:05:45 CET; 1min 25s ago
     Docs: man:firewalld(1)
 Main PID: 772 (firewalld)
    Tasks: 2 (limit: 11525)
   Memory: 36.2M
   CGroup: /system.slice/firewalld.service
           └─772 /usr/libexec/platform-python -s /usr/sbin/firewalld --nofork --nopid

Oct 28 15:05:44 centos8 systemd[1]: Starting firewalld - dynamic firewall daemon...
Oct 28 15:05:45 centos8 systemd[1]: Started firewalld - dynamic firewall daemon.
```

## firewall-cmd

firewall-cmd is a cli for firewall service.
To get more details on how to use firewall-cmd : `firewall-cmd --help`

```sh
# Examples:

# How to add a service to firewall
yum install tftp-server
firewall-cmd --add-service=tftp

# How to add and open port to firewall
## The command below will open the port effective immediately, but will not persist across reboots:
firewall-cmd --add-port=<YOUR PORT>/tcp
## The following command will create a persistent rule, but will not be put into effect immediately:
firewall-cmd --permanent --add-port=<YOUR PORT>/tcp
```

### Resources

firewalld(1) man page  
firewalld.zone(5) man page  
[redhat-documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/securing_networks/using-and-configuring-firewalls_securing-networks)
