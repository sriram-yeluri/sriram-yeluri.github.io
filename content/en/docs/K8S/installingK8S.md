---
title: "Installing Kubernetes"


---

<b>[This page is under construction ...]</b>  

I am going to cover installation of kubernetes in two ways as mentioned below:

* Install kubernetes with kubeadm
* Install kubernetes the hard way

Prerequisites to install kubernetes with kubeadm

* VirtualBox
* Centos Image
* Virtual Machine with min 2 CPU

## Install kubelet, kubectl and kubeadm

[Installing-kubeadm-kubelet-and-kubectl](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#installing-kubeadm-kubelet-and-kubectl)

```sh
# This script is the modified version from k8s documentation
RELEASE="$(curl -sSL https://dl.k8s.io/release/stable.txt)"

mkdir -p /usr/bin
cd /usr/bin

curl -L --remote-name-all https://storage.googleapis.com/kubernetes-release/release/${RELEASE}/bin/linux/amd64/{kubeadm,kubelet,kubectl}
chmod +x {kubeadm,kubelet,kubectl}

curl -sSL "https://raw.githubusercontent.com/kubernetes/kubernetes/${RELEASE}/build/debs/kubelet.service" > /etc/systemd/system/kubelet.service

mkdir -p /etc/systemd/system/kubelet.service.d

curl -sSL "https://raw.githubusercontent.com/kubernetes/kubernetes/${RELEASE}/build/debs/10-kubeadm.conf" > /etc/systemd/system/kubelet.service.d/10-kubeadm.conf
```

At this stage, kubelet service will fail to start as the initialization did not happen and `/var/lib/kubelet/config.yaml` is not yet created.

## kubeadm init

```sh
[root@10 ~]# swapoff -a
[root@10 ~]# kubeadm init
[init] Using Kubernetes version: v1.15.3
[preflight] Running pre-flight checks
	[WARNING Firewalld]: firewalld is active, please ensure ports [6443 10250] are open or your cluster may not function correctly
	[WARNING Service-Docker]: docker service is not enabled, please run 'systemctl enable docker.service'
[preflight] Pulling images required for setting up a Kubernetes cluster
[preflight] This might take a minute or two, depending on the speed of your internet connection
[preflight] You can also perform this action in beforehand using 'kubeadm config images pull'
[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[kubelet-start] Activating the kubelet service
[certs] Using certificateDir folder "/etc/kubernetes/pki"
[certs] Generating "ca" certificate and key
[certs] Generating "apiserver-kubelet-client" certificate and key
[certs] Generating "apiserver" certificate and key
[certs] apiserver serving cert is signed for DNS names [10.0.2.15 kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local] and IPs [10.96.0.1 10.0.2.15]
[certs] Generating "etcd/ca" certificate and key
[certs] Generating "etcd/server" certificate and key
[certs] etcd/server serving cert is signed for DNS names [10.0.2.15 localhost] and IPs [10.0.2.15 127.0.0.1 ::1]
[certs] Generating "etcd/healthcheck-client" certificate and key
[certs] Generating "apiserver-etcd-client" certificate and key
[certs] Generating "etcd/peer" certificate and key
[certs] etcd/peer serving cert is signed for DNS names [10.0.2.15 localhost] and IPs [10.0.2.15 127.0.0.1 ::1]
[certs] Generating "front-proxy-ca" certificate and key
[certs] Generating "front-proxy-client" certificate and key
[certs] Generating "sa" key and public key
[kubeconfig] Using kubeconfig folder "/etc/kubernetes"
[kubeconfig] Writing "admin.conf" kubeconfig file
[kubeconfig] Writing "kubelet.conf" kubeconfig file
[kubeconfig] Writing "controller-manager.conf" kubeconfig file
[kubeconfig] Writing "scheduler.conf" kubeconfig file
[control-plane] Using manifest folder "/etc/kubernetes/manifests"
[control-plane] Creating static Pod manifest for "kube-apiserver"
[control-plane] Creating static Pod manifest for "kube-controller-manager"
[control-plane] Creating static Pod manifest for "kube-scheduler"
[etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"
[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests". This can take up to 4m0s
[apiclient] All control plane components are healthy after 20.014010 seconds
[upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
[kubelet] Creating a ConfigMap "kubelet-config-1.15" in namespace kube-system with the configuration for the kubelets in the cluster
[upload-certs] Skipping phase. Please see --upload-certs
[mark-control-plane] Marking the node 10.0.2.15 as control-plane by adding the label "node-role.kubernetes.io/master=''"
[mark-control-plane] Marking the node 10.0.2.15 as control-plane by adding the taints [node-role.kubernetes.io/master:NoSchedule]
[bootstrap-token] Using token: n2e7ii.lp571oh88qidwzdj
[bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
[bootstrap-token] configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
[bootstrap-token] configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
[bootstrap-token] configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
[bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace
[addons] Applied essential addon: CoreDNS
[addons] Applied essential addon: kube-proxy

Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 10.0.2.15:6443 --token n2e7ii.lp571oh88qidwzdj \
    --discovery-token-ca-cert-hash sha256:0957baa4cdea8fda244c159cf2a038a2afe2c0b20fb922014472c5c7918dac81
```

## kubelet service

```sh
[root@10 ~]# service kubelet status
Redirecting to /bin/systemctl status kubelet.service
● kubelet.service - kubelet: The Kubernetes Node Agent
   Loaded: loaded (/etc/systemd/system/kubelet.service; enabled; vendor preset: disabled)
  Drop-In: /etc/systemd/system/kubelet.service.d
           └─10-kubeadm.conf
   Active: active (running) since zo 2019-09-01 21:04:42 CEST; 1min 9s ago
     Docs: http://kubernetes.io/docs/
 Main PID: 4682 (kubelet)
   CGroup: /system.slice/kubelet.service
           └─4682 /usr/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf --c...

sep 01 21:05:35 10.0.2.15 kubelet[4682]: E0901 21:05:35.780354    4682 summary_sys_containers.go:47] Failed to get system container stats for ...
sep 01 21:05:35 10.0.2.15 kubelet[4682]: E0901 21:05:35.780463    4682 summary_sys_containers.go:47] Failed to get system container stats for ...
sep 01 21:05:37 10.0.2.15 kubelet[4682]: W0901 21:05:37.277274    4682 cni.go:213] Unable to update cni config: No networks found in /...ni/net.d
sep 01 21:05:40 10.0.2.15 kubelet[4682]: E0901 21:05:40.725221    4682 kubelet.go:2169] Container runtime network not ready: NetworkRe...tialized
sep 01 21:05:42 10.0.2.15 kubelet[4682]: W0901 21:05:42.277894    4682 cni.go:213] Unable to update cni config: No networks found in /...ni/net.d
sep 01 21:05:45 10.0.2.15 kubelet[4682]: E0901 21:05:45.728937    4682 kubelet.go:2169] Container runtime network not ready: NetworkRe...tialized
sep 01 21:05:45 10.0.2.15 kubelet[4682]: E0901 21:05:45.813742    4682 summary_sys_containers.go:47] Failed to get system container stats for ...
sep 01 21:05:45 10.0.2.15 kubelet[4682]: E0901 21:05:45.813868    4682 summary_sys_containers.go:47] Failed to get system container stats for ...
sep 01 21:05:47 10.0.2.15 kubelet[4682]: W0901 21:05:47.278690    4682 cni.go:213] Unable to update cni config: No networks found in /...ni/net.d
sep 01 21:05:50 10.0.2.15 kubelet[4682]: E0901 21:05:50.733668    4682 kubelet.go:2169] Container runtime network not ready: NetworkRe...tialized
Hint: Some lines were ellipsized, use -l to show in full.
```

```sh
#run the following as a regular user, to start using the cluster
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

[root@10 ~]# kubectl get nodes
NAME        STATUS     ROLES    AGE     VERSION
10.0.2.15   NotReady   master   6m38s   v1.15.3
```

## Deploy Weave Network for networking

Weave uses POD CIDR of 10.32.0.0/12 by default.

```sh
[root@10 ~]# kubectl apply -f "https://cloud.weave.works/k8s/net?k8s-version=$(kubectl version | base64 | tr -d '\n')"
serviceaccount/weave-net created
clusterrole.rbac.authorization.k8s.io/weave-net created
clusterrolebinding.rbac.authorization.k8s.io/weave-net created
role.rbac.authorization.k8s.io/weave-net created
rolebinding.rbac.authorization.k8s.io/weave-net created
daemonset.extensions/weave-net created

# kubernetes master is now in Ready status after deploying weave-net
[root@10 ~]# kubectl get nodes
NAME        STATUS   ROLES    AGE   VERSION
10.0.2.15   Ready    master   4d    v1.15.3
```

## Verification

```sh
[root@10 ~]# kubectl get pods -n kube-system
NAME                                READY   STATUS    RESTARTS   AGE
coredns-5644d7b6d9-9gp2m            0/1     Running   0          23m
coredns-5644d7b6d9-x5f9f            0/1     Running   0          23m
etcd-10.0.2.15                      1/1     Running   0          22m
kube-apiserver-10.0.2.15            1/1     Running   0          22m
kube-controller-manager-10.0.2.15   1/1     Running   0          22m
kube-proxy-xw6mq                    1/1     Running   0          23m
kube-scheduler-10.0.2.15            1/1     Running   0          22m
weave-net-8hmqc                     2/2     Running   0          2m6s

[root@10 ~]# kubectl get pods -A
NAMESPACE     NAME                                READY   STATUS    RESTARTS   AGE
kube-system   coredns-5644d7b6d9-9gp2m            0/1     Running   0          23m
kube-system   coredns-5644d7b6d9-x5f9f            0/1     Running   0          23m
kube-system   etcd-10.0.2.15                      1/1     Running   0          22m
kube-system   kube-apiserver-10.0.2.15            1/1     Running   0          22m
kube-system   kube-controller-manager-10.0.2.15   1/1     Running   0          22m
kube-system   kube-proxy-xw6mq                    1/1     Running   0          23m
kube-system   kube-scheduler-10.0.2.15            1/1     Running   0          22m
kube-system   weave-net-8hmqc                     2/2     Running   0          2m9s
```

```sh
[root@10 ~]# kubectl get componentstatuses
NAME                 STATUS    MESSAGE             ERROR
controller-manager   Healthy   ok
scheduler            Healthy   ok
etcd-0               Healthy   {"health":"true"}
```

```sh
[root@10 ~]# kubectl get events
LAST SEEN   TYPE     REASON                    OBJECT           MESSAGE
4d          Normal   NodeHasSufficientMemory   node/10.0.2.15   Node 10.0.2.15 status is now: NodeHasSufficientMemory
4d          Normal   NodeHasNoDiskPressure     node/10.0.2.15   Node 10.0.2.15 status is now: NodeHasNoDiskPressure
4d          Normal   NodeHasSufficientPID      node/10.0.2.15   Node 10.0.2.15 status is now: NodeHasSufficientPID
4d          Normal   RegisteredNode            node/10.0.2.15   Node 10.0.2.15 event: Registered Node 10.0.2.15 in Controller
4d          Normal   Starting                  node/10.0.2.15   Starting kube-proxy.
38m         Normal   Starting                  node/10.0.2.15   Starting kubelet.
38m         Normal   NodeHasSufficientMemory   node/10.0.2.15   Node 10.0.2.15 status is now: NodeHasSufficientMemory
38m         Normal   NodeHasNoDiskPressure     node/10.0.2.15   Node 10.0.2.15 status is now: NodeHasNoDiskPressure
38m         Normal   NodeHasSufficientPID      node/10.0.2.15   Node 10.0.2.15 status is now: NodeHasSufficientPID
38m         Normal   NodeAllocatableEnforced   node/10.0.2.15   Updated Node Allocatable limit across pods
38m         Normal   Starting                  node/10.0.2.15   Starting kube-proxy.
38m         Normal   RegisteredNode            node/10.0.2.15   Node 10.0.2.15 event: Registered Node 10.0.2.15 in Controller
12m         Normal   NodeReady                 node/10.0.2.15   Node 10.0.2.15 status is now: NodeReady
```

## etc/kubernetes

```sh
[root@10 kubernetes]# tree /etc/kubernetes
/etc/kubernetes
├── admin.conf
├── controller-manager.conf
├── kubelet.conf
├── manifests
│   ├── etcd.yaml
│   ├── kube-apiserver.yaml
│   ├── kube-controller-manager.yaml
│   └── kube-scheduler.yaml
├── pki
│   ├── apiserver.crt
│   ├── apiserver-etcd-client.crt
│   ├── apiserver-etcd-client.key
│   ├── apiserver.key
│   ├── apiserver-kubelet-client.crt
│   ├── apiserver-kubelet-client.key
│   ├── ca.crt
│   ├── ca.key
│   ├── etcd
│   │   ├── ca.crt
│   │   ├── ca.key
│   │   ├── healthcheck-client.crt
│   │   ├── healthcheck-client.key
│   │   ├── peer.crt
│   │   ├── peer.key
│   │   ├── server.crt
│   │   └── server.key
│   ├── front-proxy-ca.crt
│   ├── front-proxy-ca.key
│   ├── front-proxy-client.crt
│   ├── front-proxy-client.key
│   ├── sa.key
│   └── sa.pub
└── scheduler.conf

3 directories, 30 files
```

## Docker images for kubernetes cluster

```sh
[root@10 kubernetes]# docker images
REPOSITORY                           TAG                 IMAGE ID            CREATED             SIZE
k8s.gcr.io/kube-proxy                v1.15.3             232b5c793146        13 days ago         82.4 MB
k8s.gcr.io/kube-apiserver            v1.15.3             5eb2d3fc7a44        13 days ago         207 MB
k8s.gcr.io/kube-scheduler            v1.15.3             703f9c69a5d5        13 days ago         81.1 MB
k8s.gcr.io/kube-controller-manager   v1.15.3             e77c31de5547        13 days ago         159 MB
k8s.gcr.io/coredns                   1.3.1               eb516548c180        7 months ago        40.3 MB
k8s.gcr.io/etcd                      3.3.10              2c4adeb21b4f        9 months ago        258 MB
k8s.gcr.io/pause                     3.1                 da86e6ba6ca1        20 months ago       742 kB
```

## kubeadm reset

```sh
[root@10 ~]# kubeadm reset
[reset] Reading configuration from the cluster...
[reset] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -oyaml'
[reset] WARNING: Changes made to this host by 'kubeadm init' or 'kubeadm join' will be reverted.
[reset] Are you sure you want to proceed? [y/N]: y
[preflight] Running pre-flight checks
[reset] Removing info for node "10.0.2.15" from the ConfigMap "kubeadm-config" in the "kube-system" Namespace
W0901 11:56:16.802756   29062 removeetcdmember.go:61] [reset] failed to remove etcd member: error syncing endpoints with etc: etcdclient: no available endpoints
.Please manually remove this etcd member using etcdctl
[reset] Stopping the kubelet service
[reset] Unmounting mounted directories in "/var/lib/kubelet"
[reset] Deleting contents of config directories: [/etc/kubernetes/manifests /etc/kubernetes/pki]
[reset] Deleting files: [/etc/kubernetes/admin.conf /etc/kubernetes/kubelet.conf /etc/kubernetes/bootstrap-kubelet.conf /etc/kubernetes/controller-manager.conf /etc/kubernetes/scheduler.conf]
[reset] Deleting contents of stateful directories: [/var/lib/etcd /var/lib/kubelet /etc/cni/net.d /var/lib/dockershim /var/run/kubernetes]

The reset process does not reset or clean up iptables rules or IPVS tables.
If you wish to reset iptables, you must do so manually.
For example:
iptables -F && iptables -t nat -F && iptables -t mangle -F && iptables -X

If your cluster was setup to utilize IPVS, run ipvsadm --clear (or similar)
to reset your system's IPVS tables.

The reset process does not clean your kubeconfig files and you must remove them manually.
Please, check the contents of the $HOME/.kube/config file.
[root@10 ~]#

```

## Start k8s cluster after system reboot

```sh
# swapoff -a
# systemctl start kubelet
# systemctl status kubelet
```

## kubeadm join token

```sh
# This command will create a new token and display the connection string
[root@10 ~]# kubeadm token create --print-join-command
kubeadm join 10.0.2.15:6443 --token 1clhim.pk9teustr2v1gnu2     --discovery-token-ca-cert-hash sha256:efe18b97c7a320e7173238af7126e33ebe76f3877255c8f9aa055f292dbf3755

# Other toke commands
kubeadm token list
kubeadm token delete <TOKEN>
```

## Troubleshooting

`kubelet service not starting`

```sh
# vi /var/log/messages
Sep  1 20:57:25 localhost kubelet: F0901 20:57:25.706063    2874 server.go:198] failed to load Kubelet config file /var/lib/kubelet/config.yaml, error failed to read kubelet config file "/var/lib/kubelet/config.yaml", error: open /var/lib/kubelet/config.yaml: no such file or directory
Sep  1 20:57:25 localhost systemd: kubelet.service: main process exited, code=exited, status=255/n/a
Sep  1 20:57:25 localhost systemd: Unit kubelet.service entered failed state.
Sep  1 20:57:25 localhost systemd: kubelet.service failed.
Sep  1 20:57:35 localhost systemd: kubelet.service holdoff time over, scheduling restart.
Sep  1 20:57:35 localhost systemd: Stopped kubelet: The Kubernetes Node Agent.
Sep  1 20:57:35 localhost systemd: Started kubelet: The Kubernetes Node Agent.
Sep  1 20:57:35 localhost kubelet: F0901 20:57:35.968939    2882 server.go:198] failed to load Kubelet config file /var/lib/kubelet/config.yaml, error failed to read kubelet config file "/var/lib/kubelet/config.yaml", error: open /var/lib/kubelet/config.yaml: no such file or directory
Sep  1 20:57:35 localhost systemd: kubelet.service: main process exited, code=exited, status=255/n/a
Sep  1 20:57:35 localhost systemd: Unit kubelet.service entered failed state.
Sep  1 20:57:35 localhost systemd: kubelet.service failed.
```

Check journal for kubelet messages
`journalctl -xeu kubelet`

### References

[Install Kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/)  
[ERROR Swap](https://github.com/kubernetes/kubeadm/issues/610)  
[weavenet](https://www.weave.works/docs/net/latest/kubernetes/kube-addon/)
