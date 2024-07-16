---
title: yum
linktitle: yum
description: >
  Yellowdog Updater, Modified (YUM)
---

## yum is broken on the server

```sh
### YUM not working on Centos and gave below error
could not retrieve mirrorlist http://mirrorlist.centos.org/?release=7&arch=x86_64&repo=extras&infra=stock error was
14: curl#6 - "Could not resolve host: mirrorlist.centos.org; Unknown error"

### To Fix above issue : go to /etc/resolve.conf and add/update nameserver
nameserver 8.8.8.8
```

### Fix : Rebuild the yum database

```sh
yum clean all
rm -f /var/lib/rpm/__db*
rpm --rebuilddb
yum update
```
