---
title: "SELinux"
description: Security Enhanced Linux


---

Security Enhanced Linux

SELinux is built into the kernel, and provides a non-discretional (ie. mandatory) access control framework for controlling how OS objects such as ports, users, and executables may interact.

* kernel level mandatory access control mechanism.
* SELinux is a security mechanism built into the Linux kernel.
* Linux distributions like CentOS, RHEL, and Fedora are enabled with SELinux by default.

## SELinux Modes

* `Enforcing`: The default mode which will enable and enforce the SELinux security policy on the system, denying access and logging actions
* `Permissive`: In Permissive mode, SELinux is enabled but will not enforce the security policy, only warn and log actions. Permissive mode is useful for troubleshooting SELinux issues. Changing modes between enforcing and permissive does not require a system reboot.
* `Disabled`: SELinux is turned off

By default, SELinux starts up in `Enforcing` mode, running the `targeted` policy.  
SELinux can manage / secure many different type of `objects` like file system objects, Network Ports, Running Exeutables.

## SELinux Troubleshooting

`setroubleshoot-server` & `policycoreutils-gui` can help you trouble shoot by making the errors easier to understand.

Further information:

[redhat-selinux_users_and_administrators_guide](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/selinux_users_and_administrators_guide/sect-security-enhanced_linux-working_with_selinux-which_log_file_is_used)

https://access.redhat.com/solutions/2529361

Check status of SELinux : `sestatus`

```sh
[root@10 ~]# sestatus
SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
Current mode:                   enforcing
Mode from config file:          enforcing
Policy MLS status:              enabled
Policy deny_unknown status:     allowed
Memory protection checking:     actual (secure)
Max kernel policy version:      31
```

SElinux Configuration `/etc/selinux/config`

```sh
[root@10 ~]# cat /etc/selinux/config

# This file controls the state of SELinux on the system.
# SELINUX= can take one of these three values:
#     enforcing - SELinux security policy is enforced.
#     permissive - SELinux prints warnings instead of enforcing.
#     disabled - No SELinux policy is loaded.
SELINUX=enforcing
# SELINUXTYPE= can take one of these three values:
#     targeted - Targeted processes are protected,
#     minimum - Modification of targeted policy. Only selected processes are protected.
#     mls - Multi Level Security protection.
SELINUXTYPE=targeted
```

SELinux log messages : `/var/log/audit/audit.log`

To change the mode from enforcing to permissive type: `setenforce 0`

{{< alert >}}
changes only apply to the current session. They turn back to default after a reboot. To make the changes permanent, edit the configuration file
{{< /alert >}}
