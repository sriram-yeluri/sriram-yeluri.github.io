---
title: "SSH"

---

## How SSH communication is established

* The client sends a request to the server for a secure session. The server responds by sending its X.509 digital certificate to the client.

* The client receives the server's X.509 digital certificate.

* The client authenticates the server, using a list of known certificate authorities.

* The client generates a random symmetric key and encrypts it using server's public key.

* The server decrypts the message with private key and extracts the symmetric key sent by client.

* The client and server now both know the symmetric key and can use the SSL encryption process to encrypt and decrypt the information contained in the client request and the server response.

## How to generate SSH keypair

``` sh
ssh-keygen -t rsa -b 2048 -C "your_email@example.com"

ssh keygen will create 2 files in .ssh default path which are id_rsa and id_rsa.pub  
id_rsa file will have private key  
id_rsa.pub will have the public key
```

![ssh-keygen](/images/Linux/ssh-keygen.png)

## How to install public key to host machine

```sh
ssh-copy-id user@host
# This will add public key from ~/.ssh/id_rsa.pub on your system to /home/USER/authorized_keys on target HOST
```

## References

[Securing SSH](https://wiki.centos.org/HowTos/Network/SecuringSSH)
