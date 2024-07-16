---
title: CentOS-7
linktitle: CentOS-7
weight: 4
description: >
  Learn about CentOS release 7
---

## How to setup network after RHEL/CentOS minimal installation

After installing RHEL/CentOS minimal, You may not able to connect network in that machine. This will happen because Ethernet interfaces are not enabled by default.

### Method 1 – Using NetworkManager Service

```sh
edit '/etc/sysconfig/network-scripts/ifcfg-enp0s8'
change onboot parameter to yes, and restart the interface
'ONBOOT=YES'
# Restart the interface
ifdown ifcfg-enp0s8
ifup ifcfg-enp0s8
```

### Method 2 – Using nmcli Tool

``` sh
#nmcli d (List the available interfaces)
#nmtui
1. open Network manager, and choose Edit connection
2. choose you network interfaces and click “Edit”
3. Choose “Automatic” in IPv4 CONFIGURATION and check Automatically connect check box and press OK and quit from Network manager.
4. Restart network service 'systemctl restart NetworkManager.service'

[root@10 ~]# nmcli dev status
[or]
[root@10 ~]# nmcli d
DEVICE  TYPE      STATE      CONNECTION
enp0s3  ethernet  connected  enp0s3
enp0s8  ethernet  connected  enp0s8
```

![CentOS_7-network-setup](/images/CentOS_7-network-setup.png)

![CentOS_7-Network-manager-screen](/images/CentOS_7-Network-manager-screen.png)

![Edit-your-network-interfaces](/images/Edit-your-network-interfaces.png)

![Set-ip-adress-using-DHCP](/images/Set-ip-adress-using-DHCP.png)

![CentOS-7-check-ip-address](/images/CentOS-7-check-ip-address.png)  

## How to configure Static IP address

```sh
# vim /etc/sysconfig/network-scripts/ifcfg-eth0

## Default Configuration
DEVICE="eth0"
ONBOOT=yes
NETBOOT=yes
UUID="41171a6f-bce1-44de-8a6e-cf5e782f8bd6"
IPV6INIT=yes
BOOTPROTO=dhcp
HWADDR="00:08:a2:0a:ba:b8"
TYPE=Ethernet
NAME="eth0"

## Configuration for Static IP
HWADDR=00:08:A2:0A:BA:B8
TYPE=Ethernet
BOOTPROTO=static
# Server IP #
IPADDR=192.168.2.203
# Subnet #
PREFIX=24
# Set default gateway IP #
GATEWAY=192.168.2.254
# Set dns servers #
DNS1=192.168.2.254
DNS2=8.8.8.8
DNS3=8.8.4.4
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
# Disable ipv6 #
IPV6INIT=no
NAME=eth0
# This is system specific and can be created using `uuidgen eth0` command #
UUID=41171a6f-bce1-44de-8a6e-cf5e782f8bd6
DEVICE=eth0
ONBOOT=yes
```

```sh
# Restart network interface
systemctl restart NetworkManager

# Verify new IP settings:
ip a s eth0

# Verify new routing settings:
ip r

# Verify DNS servers settings
cat /etc/resolv.conf
```

## How to enable kernel modules

```sh
# Error message : "Your system does not seem to be set up to build kernel modules"
# Solution:
yum clean all
yum install gcc-c++
yum install kernel-devel
yum install kernel-headers
```
