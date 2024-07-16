---
title: Ubuntu
linktitle: Ubuntu
weight: 3
description: >
  Learn how to install and configure ubuntu linux
---

## Show Hiddenfiles

`Ctrl + H`

## Taking a screenshot

Hold `shift + prtScr` , mouse turns to a cross. Select the area to screenshot.  
Image will be saved to pictures folder by default.To copy to Clipboard, use: `Ctrl + Shift + PrtScn`

## Configure Wifi Network

Reference: [netplan](https://netplan.io/examples#connecting-to-a-wpa-personal-wireless-network)

* Find the network interface : `ip link show`
* Add `config.yaml` file in `/etc/netplans`

```sh
ubuntu@myberry:/etc/netplan$ cat config.yaml
network:
  version: 2
  renderer: networkd
  wifis:
    wlan0:
      dhcp4: no
      dhcp6: no
      addresses: [192.168.2.40/24]
      gateway4: 192.168.2.1
      nameservers:
              addresses: [8.8.8.8,192.168.2.1]
      access-points:
        "ACCESSPOINT_NAME":
          password: "PASSWORD"
```

* Apply the configuration : `sudo netplan apply`
* See the routing table : `ip r`

```sh
ubuntu@myberry:/etc/netplan$ ip r
default via 192.168.2.1 dev wlan0 proto static
192.168.2.0/24 dev wlan0 proto kernel scope link src 192.168.2.40
```

## Settingup SSH service

If there is any issue starting ssh service, remove and install openssh packages.

```sh
sudo apt remove openssh-server openssh-client --purge \
&& sudo apt autoremove \
&& sudo apt autoclean \
&& sudo apt update \
&& sudo apt install openssh-server openssh-client
```

```sh
sudo systemctl enable ssh
sudo systemctl daemon-reload
sudo systemctl status ssh

ubuntu@myberry:/etc/netplan$ systemctl status ssh
● ssh.service - OpenBSD Secure Shell server
     Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
     Active: active (running) since Sat 2020-07-04 19:44:17 UTC; 21min ago
       Docs: man:sshd(8)
             man:sshd_config(5)
   Main PID: 1880 (sshd)
      Tasks: 1 (limit: 9255)
     CGroup: /system.slice/ssh.service
             └─1880 sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups

Jul 04 19:44:17 myberry systemd[1]: Starting OpenBSD Secure Shell server...
Jul 04 19:44:17 myberry sshd[1880]: Server listening on 0.0.0.0 port 22.
Jul 04 19:44:17 myberry sshd[1880]: Server listening on :: port 22.
Jul 04 19:44:17 myberry systemd[1]: Started OpenBSD Secure Shell server.
Jul 04 19:47:28 myberry sshd[2195]: Accepted password for ubuntu from 192.168.2.13 port 36716 ssh2
Jul 04 19:47:28 myberry sshd[2195]: pam_unix(sshd:session): session opened for user ubuntu by (uid=0)
```
