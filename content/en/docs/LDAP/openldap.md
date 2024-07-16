---
title: "OpenLDAP"

---

OpenLDAP is a free and opensource LightWeight Directory Access Protocol software.

## Docker images for OpenLDAP

[Docker Image for OpenLDAP](https://hub.docker.com/r/yeluris/openldap/)  
[How to compile and Build OpenLdap](https://bitbucket.org/sriramyeluri/openldap)  

### Generate password for slapd.conf file

``` sh
 /appl/openldap/sbin/slappasswd
```

### Update slapd.conf

``` sh
 ./slaptest -f  /appl/openldap/etc/openldap/slapd.conf -F /appl/openldap/etc/openldap/slapd.d 
```

### How to know the version of OpenLdap

``` sh
 /appl/openldap/libexec/slapd -VV
 /appl/openldap/bin/ldapsearch -VV
```

### How to start the OpenLDAP server manually

``` sh
# Go to the path /appl/openldap/libexec and run OpenLDAP daemon
 ./slapd -h "ldap://0.0.0.0:10389 ldaps://0.0.0.0:10636"
```

### How to take OpenLDAP backup manually

``` sh
# Use slapcat utility from OpenLDAP to create a backup file
 /appl/openldap/sbin/slapcat -b "cn=root,o=sccm" -l openldap-backupfile.ldif
```

### How to restore OpenLDAP manually

* Stop OpenLDAP service by stopping slapd daemon
* Go to `/appl/openldap/var/openldap-data-sccm` and delete all the files
* Execute the slapadd command `./slapadd -q -l /appl/openldap/backup/backupfile.ldif`
* Change the permissions `chmod -R 700 /appl/openldap/var/openldap-data`
* Start OpenLDAP service by starting slapd daemon

### References

[OpenLDAP](https://www.openldap.org/)  
[OpenLDAP using OLC-online configuration](http://www.zytrax.com/books/ldap/ch6/slapd-config.html)
