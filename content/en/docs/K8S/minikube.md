---
title: Minikube


---

minikube is a tool/utility which runs a single node kuberbetes cluster using a virtual box. This tool helps in learning k8s with local setup.

## starting minikube for the first time

```sh
sriram@sriram-Inspiron-5567:~/k8s$ minikube start
😄  minikube v1.2.0 on linux (amd64)
💿  Downloading Minikube ISO ...
 129.33 MB / 129.33 MB [============================================] 100.00% 0s
🔥  Creating virtualbox VM (CPUs=2, Memory=2048MB, Disk=20000MB) ...
🐳  Configuring environment for Kubernetes v1.15.0 on Docker 18.09.6
💾  Downloading kubeadm v1.15.0
💾  Downloading kubelet v1.15.0
🚜  Pulling images ...
🚀  Launching Kubernetes ... 
⌛  Verifying: apiserver proxy etcd scheduler controller dns
🏄  Done! kubectl is now configured to use "minikube"
```

## status

```sh
$ minikube status
host: Running
kubelet: Running
apiserver: Running
kubectl: Correctly Configured: pointing to minikube-vm at 192.168.99.100
```

## minikube service list

```sh
$ minikube service list

|-------------|------------|--------------|
|  NAMESPACE  |    NAME    |     URL      |
|-------------|------------|--------------|
| default     | kubernetes | No node port |
| kube-system | kube-dns   | No node port |
|-------------|------------|--------------|
```

## minikube stop

```sh
$ minikube stop
✋  Stopping "minikube" in virtualbox ...
🛑  "minikube" stopped.

$ minikube status
host: Stopped
kubelet:
apiserver:
kubectl:
```

## restarting minikube

```sh
sriram@sriram-Inspiron-5567:~/k8s$ minikube start
😄  minikube v1.2.0 on linux (amd64)
💡  Tip: Use 'minikube start -p <name>' to create a new cluster, or 'minikube delete' to delete this one.
🔄  Restarting existing virtualbox VM for "minikube" ...
⌛  Waiting for SSH access ...
🐳  Configuring environment for Kubernetes v1.15.0 on Docker 18.09.6
🔄  Relaunching Kubernetes v1.15.0 using kubeadm ... 
⌛  Verifying: apiserver proxy etcd scheduler controller dns
🏄  Done! kubectl is now configured to use "minikube"
```

## Enable metrics service and listing all apiservices

```sh
$ minikube addons enable metrics-server
✅  metrics-server was successfully enabled

sriram@sriram-Inspiron-5567:~/k8s$ kubectl get apiservices
NAME                                   SERVICE                      AVAILABLE   AGE
v1.                                    Local                        True        31m
v1.apps                                Local                        True        31m
v1.authentication.k8s.io               Local                        True        31m
v1.authorization.k8s.io                Local                        True        31m
v1.autoscaling                         Local                        True        31m
v1.batch                               Local                        True        31m
v1.coordination.k8s.io                 Local                        True        31m
v1.networking.k8s.io                   Local                        True        31m
v1.rbac.authorization.k8s.io           Local                        True        31m
v1.scheduling.k8s.io                   Local                        True        31m
v1.storage.k8s.io                      Local                        True        31m
v1beta1.admissionregistration.k8s.io   Local                        True        31m
v1beta1.apiextensions.k8s.io           Local                        True        31m
v1beta1.apps                           Local                        True        31m
v1beta1.authentication.k8s.io          Local                        True        31m
v1beta1.authorization.k8s.io           Local                        True        31m
v1beta1.batch                          Local                        True        31m
v1beta1.certificates.k8s.io            Local                        True        31m
v1beta1.coordination.k8s.io            Local                        True        31m
v1beta1.events.k8s.io                  Local                        True        31m
v1beta1.extensions                     Local                        True        31m
v1beta1.metrics.k8s.io                 kube-system/metrics-server   True        95s
v1beta1.networking.k8s.io              Local                        True        31m
v1beta1.node.k8s.io                    Local                        True        31m
v1beta1.policy                         Local                        True        31m
v1beta1.rbac.authorization.k8s.io      Local                        True        31m
v1beta1.scheduling.k8s.io              Local                        True        31m
v1beta1.storage.k8s.io                 Local                        True        31m
v1beta2.apps                           Local                        True        31m
v2beta1.autoscaling                    Local                        True        31m
v2beta2.autoscaling                    Local                        True        31m
```

## Minikube behind Proxy

```sh
export HTTP_PROXY=http://<proxy hostname:port>
export HTTPS_PROXY=https://<proxy hostname:port>
export NO_PROXY=localhost,127.0.0.1,10.96.0.0/12,192.168.99.0/24,192.168.39.0/24

minikube start
```

## References

[minikube](https://kubernetes.io/docs/setup/learning-environment/minikube/)
[http-proxy](https://github.com/kubernetes/minikube/blob/master/docs/http_proxy.md)
