---
title: "Virtual Box"

---

## VBox Logs

For Vbox if you encounter errors, check vbox logs

```sh
# log location
/var/log/vboxadd-install.log

# Command to display list of vms on the vbox
vboxmanage list vms

vboxmanage showvminfo Centos7 --details
```

## Install virtualbox Extension pack

[how-to-install-virtualbox-extension-pack](https://unix.stackexchange.com/questions/289685/how-to-install-virtualbox-extension-pack/290462)


## Cloning VMs in VirtualBox

[how-do-i-fix-broken-networking-in-cloned-virtual-machines](https://askubuntu.com/questions/82322/how-do-i-fix-broken-networking-in-cloned-virtual-machines)

```sh
/etc/sysconfig/network-scripts/ifcfg-enp0s3
/etc/udev/rules.d/*-persistent-net.rules
```

## Run VM in background

``` sh
#Get the VM name by listing VMs
vboxmanage list vms

VBoxManage startvm ${VM_NAME} --type headless
example : vboxmanage startvm centos7vm2 --type headless
```

## Networking

[vbox Networking concepts](https://blogs.oracle.com/scoter/networking-in-virtualbox-v2)

![](/images/vbox/vbox_nw_1.png)
![](/images/vbox/vbox_nw_2.png)
![](/images/vbox/vbox_vm_nw_1.png)
![](/images/vbox/vbox_vm_nw_2.png)
![](/images/vbox/vbox_vm_nw_3.png)
