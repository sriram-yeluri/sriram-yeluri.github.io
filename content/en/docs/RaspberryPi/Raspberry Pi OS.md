---
title: Raspberry Pi OS
linktitle: Raspberry Pi OS
---

## How to configure a static IP address

* Find the available interfaces using : `ip a`
* Add static ip configuration in `dhcpcd.conf` file
* Restart dhcpcd service

```sh
#/etc/dhcpcd.conf
interface wlan0
static ip_address=192.168.2.123/24
static routers=192.168.2.254
static domain_name_servers=8.8.8.8

## reload the service configuration
sudo systemctl daemon-reload

## restart dhcpcd service
sudo systemctl restart dhcpcd.service
```