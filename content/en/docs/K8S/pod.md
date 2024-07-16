---
title: "Pod"


---

Kubernetes PODS

```sh

$ kubectl describe pods

Name:           kubernetes-bootcamp-5b48cfdcbd-5ddlwNamespace:      defaultPriority:       0

Node:           minikube/172.17.0.90
Start Time:     Mon, 26 Aug 2019 11:54:05 +0000
Labels:         pod-template-hash=5b48cfdcbd
                run=kubernetes-bootcamp

Annotations:    <none>

Status:         Running
IP:             172.18.0.5
Controlled By:  ReplicaSet/kubernetes-bootcamp-5b48cfdcbd

Containers:

  kubernetes-bootcamp:
    Container ID:   docker://016f25827984c14dc74e5cbaafe43b0fb77b20b8838b5818d1e9a90376b8ad5d
    Image:          gcr.io/google-samples/kubernetes-bootcamp:v1
    Image ID:       docker-pullable://jocatalin/kubernetes-bootcamp@sha256:0d6b8ee63bb57c5f5b6156f446b3bc3b3c143d233037f3a2f00e279c8fcc64af
    Port:           8080/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Mon, 26 Aug 2019 11:54:06 +0000
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-5wbkl (ro)
Conditions:
  Type              Status
  Initialized       True
  Ready             True
  ContainersReady   True
  PodScheduled      True
Volumes:
  default-token-5wbkl:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-5wbkl
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type    Reason     Age    From               Message
  ----    ------     ----   ----               -------
  Normal  Scheduled  6m58s  default-scheduler  Successfully assigned default/kubernetes-bootcamp-5b48cfdcbd-5ddlw to minikube
  Normal  Pulled     6m57s  kubelet, minikube  Container image "gcr.io/google-samples/kubernetes-bootcamp:v1" already present on machine
  Normal  Created    6m57s  kubelet, minikube  Created container kubernetes-bootcamp
  Normal  Started    6m57s  kubelet, minikube  Started container kubernetes-bootcamp
```

## POD Manifest/Definition

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: label-demo
  labels:
    environment: production
    app: nginx
spec:
  containers:
  - name: nginx
    image: nginx:1.7.9
    ports:
    - containerPort: 80
```

$ kubectl apply -f nginx-pod.yaml
$ kubectl get events
$ kubectl get pods
$ kubectl delete pod label-demo

## Static POD

PODS that are created by kubelet without any communication from kube-apiserver are called static pods.  
If master node fails, kublet on worker node can manage deploying/deleting the pods. This can be achieved by placing the pod definition files directly in the manifests path on the node (/etc/kubernetes/manifests). Kublet monitors this path regularly and creates a POD and also ensures the POD stays alive.

## POD Eviction

If a node runs out of CPU, memory or disk, Kubernetes may decide to evict one or more pods. It may choose to evict the Weave Net pod, which will disrupt pod network operations.

You can see when pods have been evicted via the `kubectl get events` command or `kubectl get pods`

### Resources

[Eviction](https://kubernetes.io/docs/tasks/administer-cluster/out-of-resource/)
