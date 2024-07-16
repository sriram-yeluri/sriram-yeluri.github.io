---
title: Linux file system
linktitle: File System
---


```sh
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
```

## Linux File Permissions

`-rwsrwsrwt`  
`chmod u+s,g+s,o+t dir`

* Sticky bit  
Items in directory may only be deleted by owner.

```sh
[root@10 ~]# ls -ld /tmp
drwxrwxrwt. 8 root root 216 Oct 27 11:18 /tmp
```

* SGID - Set Group Identity  
Can be set on directories aswell as on files
Directory : New objects in this directory inherit its group ownership.  
Execuable File : Runs as owning group rather than invoker's group.

* SUID - Set User Identity  
Executable: Program runs as owner, rather than caller.

![SpecialPermissions](/images/Linux/SpecialPermissions.png)

### References
[Linux file system](https://www.tldp.org/LDP/intro-linux/html/sect_03_01.html)  
man hier