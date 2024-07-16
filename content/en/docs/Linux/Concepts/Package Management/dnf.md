---
title: dnf
linktitle: dnf
description: >
  Dandified yum
---

DNF or Dandified yum is the next generation version of yum, a package manager for RPM-based Linux distributions like fedora,centos and redhat.

```sh
dnf -h  
dnf --help
```

```sh
[root@192 ~]# dnf history
ID     | Command line             | Date and time    | Action(s)      | Altered
-------------------------------------------------------------------------------
     5 | install transmission-gtk | 2020-07-17 13:26 | Install        |    3   
     4 | install epel-release     | 2020-07-17 13:25 | Install        |    1   
     3 |                          | 2020-07-17 11:33 | Install        |    8   
     2 |                          | 2020-07-17 11:27 | Removed        |    1   
     1 |                          | 2020-07-17 11:15 | Install        | 1476 EE
```

```sh
[root@192 ~]# dnf repolist
repo id                             repo name
AppStream                           CentOS-8 - AppStream
BaseOS                              CentOS-8 - Base
epel                                Extra Packages for Enterprise Linux 8 - x86_64
epel-modular                        Extra Packages for Enterprise Linux Modular 8 - x86_64
extras                              CentOS-8 - Extras
google-chrome                       google-chrome
```

```sh

#search package details for the given string

[root@192 ~]# dnf search chrome
Last metadata expiration check: 0:31:24 ago on Fri 17 Jul 2020 01:25:55 PM CEST.
======================================== Name & Summary Matched: chrome ========================================
google-chrome-stable.x86_64 : Google Chrome
google-chrome-beta.x86_64 : Google Chrome (beta)
google-chrome-unstable.x86_64 : Google Chrome (unstable)
chromedriver.x86_64 : WebDriver for Google Chrome/Chromium
============================================= Name Matched: chrome =============================================
chrome-gnome-shell.x86_64 : Support for managing GNOME Shell Extensions through web browsers
mathjax-winchrome-fonts.noarch : Fonts used by MathJax to display math in the browser
=========================================== Summary Matched: chrome ============================================
webextension-token-signing.x86_64 : Chrome and Firefox extension for signing with your eID on the web
```


```sh
# clear all cached packages from the system
[root@192 ~]# dnf clean all
44 files removed
```

### References
[fedora-dnf-wiki](https://fedoraproject.org/wiki/DNF)