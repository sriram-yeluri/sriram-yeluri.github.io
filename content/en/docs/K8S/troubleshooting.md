---
title: "Troubleshooting"

---

Troubleshooting

`kubectl get` - list resources

`kubectl describe` - show detailed information about a resource

`kubectl logs` - print the logs from a container in a pod

`kubectl exec` - execute a command on a container in a pod

```sh
$ export POD_NAME=$(kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')

$ echo $POD_NAME
kubernetes-bootcamp-5b48cfdcbd-5ddlw

$ kubectl exec $POD_NAME env

PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
HOSTNAME=kubernetes-bootcamp-5b48cfdcbd-5ddlw
KUBERNETES_SERVICE_HOST=10.96.0.1
KUBERNETES_SERVICE_PORT=443
KUBERNETES_SERVICE_PORT_HTTPS=443
KUBERNETES_PORT=tcp://10.96.0.1:443
KUBERNETES_PORT_443_TCP=tcp://10.96.0.1:443
KUBERNETES_PORT_443_TCP_PROTO=tcp
KUBERNETES_PORT_443_TCP_PORT=443
KUBERNETES_PORT_443_TCP_ADDR=10.96.0.1
NPM_CONFIG_LOGLEVEL=info
NODE_VERSION=6.3.1
HOME=/root
```

```sh
# Start a bash session in the Pod’s container:
 ## name of the container can be omitted if we only have a single container in the Pod

kubectl exec -ti $POD_NAME bash
```
