---
title: CentOS-8
linktitle: CentOS-8
weight: 3
description: >
  Learn about CentOS release 8
---

## Extra Packages for Enterprise Linux (EPEL)

Extra Packages for Enterprise Linux (EPEL) is a special interest group (SIG) from the Fedora Project that provides a set of additional packages for RHEL (and CentOS, and others)  from the Fedora sources. 

{{< alert title="Note" >}}
EPEL is not an official part of the RHEL subscription or an official offering from Red Hat. But it can come in handy for admins and developers who work with RHEL and need a few utilities packaged for RHEL from a source they can feel good about.
{{% /alert %}}


```sh
dnf -y install epel-release
dnf update -y
```

```sh
[root@192 ~]# dnf install epel-release
Last metadata expiration check: 1:50:34 ago on Fri 17 Jul 2020 11:34:52 AM CEST.
Dependencies resolved.
================================================================================================================
 Package                       Architecture            Version                    Repository               Size
================================================================================================================
Installing:
 epel-release                  noarch                  8-8.el8                    extras                   23 k

Transaction Summary
================================================================================================================
Install  1 Package

Total download size: 23 k
Installed size: 32 k
Is this ok [y/N]: y
Downloading Packages:
epel-release-8-8.el8.noarch.rpm                                                  98 kB/s |  23 kB     00:00    
----------------------------------------------------------------------------------------------------------------
Total                                                                            71 kB/s |  23 kB     00:00     
warning: /var/cache/dnf/extras-2770d521ba03e231/packages/epel-release-8-8.el8.noarch.rpm: Header V3 RSA/SHA256 Signature, key ID 8483c65d: NOKEY
CentOS-8 - Extras                                                               1.6 MB/s | 1.6 kB     00:00    
Importing GPG key 0x8483C65D:
 Userid     : "CentOS (CentOS Official Signing Key) <security@centos.org>"
 Fingerprint: 99DB 70FA E1D7 CE22 7FB6 4882 05B5 55B3 8483 C65D
 From       : /etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
Is this ok [y/N]: y
Key imported successfully
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                        1/1 
  Installing       : epel-release-8-8.el8.noarch                                                            1/1 
  Running scriptlet: epel-release-8-8.el8.noarch                                                            1/1 
  Verifying        : epel-release-8-8.el8.noarch                                                            1/1 
Installed products updated.

Installed:
  epel-release-8-8.el8.noarch                                                                                   

Complete!


[root@192 ~]# dnf update
Extra Packages for Enterprise Linux Modular 8 - x86_64                          122 kB/s |  82 kB     00:00    
Extra Packages for Enterprise Linux 8 - x86_64                                  1.1 MB/s | 7.4 MB     00:06    
Dependencies resolved.
Nothing to do.
Complete!
```

## How to install draw.io

```sh
# check the latest available release of draw.io from github before installing.
sudo dnf install https://github.com/jgraph/drawio-desktop/releases/download/v13.4.5/draw.io-x86_64-13.4.5.rpm
```

### References

[fedoraproject-wiki-epel](https://fedoraproject.org/wiki/EPEL)


