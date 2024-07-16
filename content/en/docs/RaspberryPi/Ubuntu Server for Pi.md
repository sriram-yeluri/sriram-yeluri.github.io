---
title: Ubuntu Server for Pi
linktitle: Ubuntu Server
---

## How to enable wifi and configure a static IP address

* Find the available interfaces using : `ip a`

* [or] use `networkctl` to Query the status of network links

```sh
sriram@ubuntu:~$ networkctl
IDX LINK  TYPE     OPERATIONAL SETUP
  1 lo    loopback carrier     unmanaged
  2 eth0  ether    no-carrier  configuring
  3 wlan0 wlan     routable    configured

3 links listed.
```

* Use `netplan` to configure the interface

```sh
# edit /etc/netplan/50-cloud-init.yaml
# add entry for wlan0
# add entry for static ip address, gateway and nameservers.
# below is an example configuration

sriram@ubuntu:~$ cat /etc/netplan/50-cloud-init.yaml
network:
    ethernets:
        eth0:
            dhcp4: true
            match:
                driver: bcmgenet smsc95xx lan78xx
            optional: true
            set-name: eth0
    version: 2
    wifis:
      wlan0:
        dhcp4: no
        addresses:
          - 192.168.2.123/24
        gateway4: 192.168.2.254
        nameservers:
          addresses: [8.8.8.8, 1.1.1.1]
        optional: true
        access-points:
          "ACCESSPOINT-NAME":
            password: "password"

## apply the changes with netplan
sudo netplan apply
```