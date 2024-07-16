---
title: Storage
description: >
 Managing storage in Linux
---


```sh
# from baremetal
sriram@sriram-Inspiron-5567:~$ sudo fdisk -l /dev/sda
Disk /dev/sda: 111,8 GiB, 120034123776 bytes, 234441648 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 833807FE-A7E1-46DA-B629-ECC1B32A087E

Device         Start       End   Sectors   Size Type
/dev/sda1       2048   1050623   1048576   512M EFI System
/dev/sda2    1050624 217874431 216823808 103,4G Linux filesystem
/dev/sda3  217874432 234440703  16566272   7,9G Linux swap

# From Virtual Machine
[root@CentosServer1910 ~]# fdisk -l
Disk /dev/sda: 10 GiB, 10737418240 bytes, 20971520 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xec47036c

Device     Boot   Start      End  Sectors Size Id Type
/dev/sda1  *       2048  2099199  2097152   1G 83 Linux
/dev/sda2       2099200 20971519 18872320   9G 8e Linux LVM

Disk /dev/mapper/cl_centosserver1910-root: 8 GiB, 8585740288 bytes, 16769024 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

Disk /dev/mapper/cl_centosserver1910-swap: 1 GiB, 1073741824 bytes, 2097152 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

## UUID - Get the uuid of devices on linux

`UUID` is the `universally unique identifier` that is assigned to devices on a linux system for the purpose of identification.
For example if your hard disk has 3 partitions then each partition is a device and has a uuid.

To find the uuid of devices connected to a system use the command `ls -l /dev/disk/by-uuid/`

```
[sriram@CentosServer1910 ~]$ ls -l /dev/disk/by-uuid/
total 0
lrwxrwxrwx. 1 root root 10 Nov  3 12:55 64b6f04f-d510-4c39-9a37-cacfeeec774b -> ../../sda1
lrwxrwxrwx. 1 root root 10 Nov  3 12:55 860d422d-1b58-4545-a139-10ffc6677f63 -> ../../dm-1
lrwxrwxrwx. 1 root root 10 Nov  3 12:55 86f561ac-6bdf-4768-8cdd-4333d6e74b47 -> ../../dm-0
```

Another command to find UUI : `blkid`

```
# from baremetal
sriram@sriram-Inspiron-5567:~$ sudo blkid
/dev/sda1: UUID="5FAA-9D41" TYPE="vfat" PARTLABEL="EFI System Partition" PARTUUID="80a7a0c8-1f77-45b0-b720-93a044c6b597"
/dev/sda2: UUID="17e11c76-30e6-4e5d-84ee-9ad13021351b" TYPE="ext4" PARTUUID="2376aa03-2148-4b8c-92c5-c0a40a3124a3"
/dev/sda3: UUID="170ab405-c120-4c49-a8cd-24a0b2bf346d" TYPE="swap" PARTUUID="ed20cc7f-76de-4371-8016-e10c030c1ef8"

# from virtual server
[sriram@CentosServer1910 ~]$ blkid
/dev/mapper/cl_centosserver1910-root: UUID="86f561ac-6bdf-4768-8cdd-4333d6e74b47" TYPE="xfs"
/dev/sda2: UUID="wi21xh-Sj3l-ocKe-Q6Qr-aRLv-n3Nm-hcYhL5" TYPE="LVM2_member" PARTUUID="ec47036c-02"
```

To get the uuid of a specific device, simply put the device name next to blkid : `blkid /dev/sda1`

```sh
[sriram@CentosServer1910 ~]$ sudo blkid /dev/sda*
/dev/sda: PTUUID="ec47036c" PTTYPE="dos"
/dev/sda1: UUID="64b6f04f-d510-4c39-9a37-cacfeeec774b" TYPE="ext4" PARTUUID="ec47036c-01"
/dev/sda2: UUID="wi21xh-Sj3l-ocKe-Q6Qr-aRLv-n3Nm-hcYhL5" TYPE="LVM2_member" PARTUUID="ec47036c-02"
```
