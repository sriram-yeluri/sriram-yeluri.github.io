---
title: System Admin
linktitle: System Admin
Description: >
  Learn about Linux system administration
---

List all Hardware : `lshw`

List all pci devices : `lspci`

```sh
# Required pciutuls package to be installed 'yum install pciutils'

[root@10 ~]# lspci
00:00.0 Host bridge: Intel Corporation Xeon E3-1200 v6/7th Gen Core Processor Host Bridge/DRAM Registers (rev 02)
00:02.0 VGA compatible controller: Intel Corporation HD Graphics 620 (rev 02)
00:04.0 Signal processing controller: Intel Corporation Xeon E3-1200 v5/E3-1500 v5/6th Gen Core Processor Thermal Subsystem (rev 02)
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
02:00.0 Ethernet controller: Realtek Semiconductor Co., Ltd. RTL810xE PCI Express Fast Ethernet controller (rev 07)
```

## How to reset root password

* 'rd.break' drops to a rescue shell earlier than any other rescue mode.
* Reboot the system, add 'rd.break' to the kernel boot parameters
* remount the root filesystem R/W
* use 'chroot' to switch to the proper root FS and run 'passwd'.
* Remember to 'touch /.autorelabel' before typing 'exit' twice to resume booting.

## Questions

* Where could you configure the order in which filesystems are checked at boot time?
 `/etc/fstab`

* How to drop to a minimal rescue environment in which only you remained logged in and the system was not available over the network, what command would you run?
 `systemctl isolate rescue.target`

* Which rescue parameter would you pass to the kernel from the grub2 menu if your system was failing to boot because a filesystem check was failing?
 `systemd.unit=emergency.target`

* You are a member of a team of admins who are responsible for a critical system. This system has two different web servers installed: The first (Nginx) is used to serve content, the other (httpd) is installed only to satisfy dependencies and should never be started as it causes a conflict. What command could you run to ensure that `httpd` is never accidentally started or enabled by another admin?
 `systemctl mask httpd`

## How to find open ports/sockets ?

* old systems : `ipstat -tulpn`
* new systems (socket statistics) : `ss -a`

## List OpenFiles - `lsof`

### How to find list of open files ? 
 `lsof`

### How to know Which process is listening on port X ?
 `lsof -i :80`

### Which process opened the file
 `lsof /path_to_file`

```sh
[root@10 ~]# lsof /usr/bin/bash
COMMAND  PID USER  FD   TYPE DEVICE SIZE/OFF    NODE NAME
bash    1533 root txt    REG  253,0  1219216 8512853 /usr/bin/bash
bash    1820 root txt    REG  253,0  1219216 8512853 /usr/bin/bash
```

### How to find all files that a process has opened ?
 `lsof -p PID`

## How To Create a Sudo User on CentOS ?

```sh
[root@CentosServer1910 ~]# useradd sriram
[root@CentosServer1910 ~]# passwd sriram
Changing password for user sriram.
New password:
Retype new password:
passwd: all authentication tokens updated successfully.
# By default, on CentOS, members of the wheel group have sudo privileges.
[root@CentosServer1910 ~]# usermod -aG wheel sriram
[root@CentosServer1910 ~]# id sriram
uid=1000(sriram) gid=1000(sriram) groups=1000(sriram),10(wheel)

# Testing new SUDO user
[sriram@CentosServer1910 ~]$ sudo blkid /dev/sda1
[sudo] password for sriram:
/dev/sda1: UUID="64b6f04f-d510-4c39-9a37-cacfeeec774b" TYPE="ext4" PARTUUID="ec47036c-01"
```

```
# Debian based system, add the user to sudo group.
sudo usermod -a -G sudo <user_id>
```