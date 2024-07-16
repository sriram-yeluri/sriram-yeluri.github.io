---
title: "Secrets"


---



Managing kubernetes secrets





Secret Manifest with default secret type:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
type: Opaque
data:
  username: User
  password: **********
```

```sh
$ kubectl apply -f ./secret.yaml
$ kubectl get secrets
NAME                  TYPE                                  DATA   AGE
default-token-prh24   kubernetes.io/service-account-token   3      27m
mysecret              Opaque                                2      14m
```

type: Opaque means that from kubernetes's point of view the contents of this Secret is unstructured, it can contain arbitrary key-value pairs.

SecretType = "Opaque"                                 // Opaque (arbitrary data; default)
SecretType = "kubernetes.io/service-account-token"    // Kubernetes auth token
SecretType = "kubernetes.io/dockercfg"                // Docker registry auth
SecretType = "kubernetes.io/dockerconfigjson"         // Latest Docker registry auth



### References

[K8S-SecretTypes](https://github.com/kubernetes/kubernetes/blob/release-1.14/pkg/apis/core/types.go#L4447)
