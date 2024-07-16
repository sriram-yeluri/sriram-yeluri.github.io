---
title: "Kind"


---

kind : kubernetes in docker

```sh
# Set go path, kind path and KUBECONFIG path

export PATH=$PATH:$HOME/go/bin:$HOME/k8s/bin
kind get kubeconfig-path)
# output: /home/sriram/.kube/kind-config-kind
export KUBECONFIG="$(kind get kubeconfig-path)"
```

```sh
sriram@sriram-Inspiron-5567:~$ kind create cluster
Creating cluster "kind" ...
 ✓ Ensuring node image (kindest/node:v1.15.0) 🖼 
 ✓ Preparing nodes 📦 
 ✓ Creating kubeadm config 📜 
 ✓ Starting control-plane 🕹️ 
 ✓ Installing CNI 🔌 
 ✓ Installing StorageClass 💾 
Cluster creation complete. You can now use the cluster with:

export KUBECONFIG="$(kind get kubeconfig-path --name="kind")"
kubectl cluster-info
```

```sh
kind create cluster
 kubectl cluster-info
 Kubernetes master is running at https://localhost:37933
 KubeDNS is running at https://localhost:37933/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

# To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

```sh
kind delete cluster
Deleting cluster "kind" ...
$KUBECONFIG is still set to use /home/sriram/.kube/kind-config-kind even though that file has been deleted, remember to unset it
```

## References

https://kind.sigs.k8s.io/docs/user/quick-start
