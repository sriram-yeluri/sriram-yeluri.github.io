---
title: RHEL

---

RedHat Enterprise Linux.

![RHEL release](/images/RHEL/rhel-release-7_4.png)  

## How to subscribe to Redhat using subscription-manager

### subscription-manager

![subscription-manager](/images/RHEL/subscription-manager.png)  

### subscription-manager list

![subscription-manager list](/images/RHEL/subscription-manager-list.png)  

### subscription-manager register

![subscription-manager register](/images/RHEL/subscription-manager-register.png)  

### subscription-manager attach

![subscription-manager attach](/images/RHEL/subscription-manager-attach.png)  

### subscription-manager identity

![subscription-manager identity](/images/RHEL/subscription-manager-identity.png)  

### Add GUI from basic installation

```sh  
 yum groupinstall gnome-desktop x11 fonts  
 yum groupinstall "Server with GUI"  
 systemctl set-default graphical.target  
 systemctl start graphical.target  
```

### References

[Add GUI](https://access.redhat.com/solutions/5238?tour=6)
