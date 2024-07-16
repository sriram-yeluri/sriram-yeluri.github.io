---
title: users
linktitle: users
---

## How to create a non-login user?

* Create user with -M (caps) flag.
* Lock the account to prevent from login

```
useradd -M subversion
usermod -L subversion
```

## How to create a system user ?

```sh
$ adduser --system -s usr/sbin/nologin subversion
# The -r flag will create a system user - one which does not have a password, a home dir and is unable to login.
# -s flag is for shell , /bin/nologin prevents to have a shell for this user.

## Testing
$ sudo adduser --system --no-create-home --shell /usr/sbin/nologin subversion
Adding system user `subversion' (UID 109) ...
Adding new user `subversion' (UID 109) with group `nogroup' ...
Not creating home directory `/home/subversion'.

$ sudo grep subversion /etc/passwd /etc/shadow
/etc/passwd:subversion:x:109:65534::/home/subversion:/usr/sbin/nologin
/etc/shadow:subversion:*:18628:0:99999:7:::

## Check if account is usuable
$ sudo -u subversion whoami
subversion

$ sudo -u subversion date
Fri 01 Jan 2021 07:35:20 PM CET
```