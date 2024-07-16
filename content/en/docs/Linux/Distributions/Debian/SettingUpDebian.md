---
title: Debian
linktitle: Configure Debian
weight: 1
description: >
  Learn about configuring debian system
---

## Install wifi drivers

When i was installing Debian 10, automatic network detection failed to load wifi drivers. Hence i have to manually add non-free debian sources and install the fimware wifi drivers.

```sh
# Reference : https://wiki.debian.org/iwlwifi

apt edit-sources
# add below non-free sources of debian to the list
# deb http://deb.debian.org/debian buster main contrib non-free
# deb-src http://deb.debian.org/debian buster main contrib non-free

apt update

apt install wireless-tools
apt install firmware-iwlwifi

modprobe -r iwlwifi
modprobe iwlwifi
```

```sh
root@sriram-pc:~# lspci
00:00.0 Host bridge: Intel Corporation Xeon E3-1200 v6/7th Gen Core Processor Host Bridge/DRAM Registers (rev 02)
00:02.0 VGA compatible controller: Intel Corporation HD Graphics 620 (rev 02)
00:04.0 Signal processing controller: Intel Corporation Skylake Processor Thermal Subsystem (rev 02)
00:14.0 USB controller: Intel Corporation Sunrise Point-LP USB 3.0 xHCI Controller (rev 21)
00:14.2 Signal processing controller: Intel Corporation Sunrise Point-LP Thermal subsystem (rev 21)
00:15.0 Signal processing controller: Intel Corporation Sunrise Point-LP Serial IO I2C Controller #0 (rev 21)
00:15.1 Signal processing controller: Intel Corporation Sunrise Point-LP Serial IO I2C Controller #1 (rev 21)
00:16.0 Communication controller: Intel Corporation Sunrise Point-LP CSME HECI #1 (rev 21)
00:17.0 SATA controller: Intel Corporation Sunrise Point-LP SATA Controller [AHCI mode] (rev 21)
00:1c.0 PCI bridge: Intel Corporation Sunrise Point-LP PCI Express Root Port #5 (rev f1)
00:1c.5 PCI bridge: Intel Corporation Sunrise Point-LP PCI Express Root Port #6 (rev f1)
00:1f.0 ISA bridge: Intel Corporation Sunrise Point-LP LPC Controller (rev 21)
00:1f.2 Memory controller: Intel Corporation Sunrise Point-LP PMC (rev 21)
00:1f.3 Audio device: Intel Corporation Sunrise Point-LP HD Audio (rev 21)
00:1f.4 SMBus: Intel Corporation Sunrise Point-LP SMBus (rev 21)
01:00.0 Network controller: Intel Corporation Wireless 3165 (rev 79)
02:00.0 Ethernet controller: Realtek Semiconductor Co., Ltd. RTL8101/2/6E PCI Express Fast/Gigabit Ethernet controller (rev 07)
```
## How to enable enp0s8 interface

```sh
# List all the available interfaces
ip a

# Install net-tools
apt-get install net-tools

# execute the commands as root
vi /etc/network/interfaces

# Add below lines to the interface file
auto enp0s8
iface enp0s8 inet dhcp

# Start the network interface
ifup enp0s8

# Check the status of enp0s8
ip a show enp0s8
```
## configure static IP for enp0s8

```
# Add below lines in /etc/network/interfaces
auto enp0s8
iface enp0s8 inet static
        address 192.168.0.100
        netmask 255.255.255.0
        network 192.168.0.0
        broadcast 192.168.0.255
        gateway 192.168.0.1

# Restart the network
systemctl restart networking

# update /etc/hosts entry
127.0.0.1       localhost.localdomain   localhost
192.168.0.100   server1.example.com     server1

# Reboot the system
systemctl reboot
```

### References


