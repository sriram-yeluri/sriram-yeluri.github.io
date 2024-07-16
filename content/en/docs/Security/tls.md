---
title: "TLS"
description: Transport Layer Security

---

TLS - Transport Layer Security  
TLS is a protocol for encrypting internet traffic and to verify the identity of server.

## How to extract remote Certificates

```sh
echo | openssl s_client -connect www.google.com:443 2>&1 | sed --quiet '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > google.crt
```

How to verify the TLS connection status ?

```sh
sriram@sriram-Inspiron-5567:~$ openssl s_client -connect google.com:443 -servername google.com -cipher ALL -brief
CONNECTION ESTABLISHED
Protocol version: TLSv1.3
Ciphersuite: TLS_AES_256_GCM_SHA384
Peer certificate: C = US, ST = California, L = Mountain View, O = Google LLC, CN = *.google.com
Hash used: SHA256
Signature type: ECDSA
Verification: OK
Server Temp Key: X25519, 253 bits
```

## Show Server Certificate chain

```sh
openssl s_client -connect google.com:443 -servername google.com -cipher ALL -showcerts
```

## Export Public key from a Certificate

```sh
openssl x509 -pubkey -noout -in cert.pem  > pubkey.pem
```

## How to find validity of a certificate

```sh
echo | openssl s_client -connect google.com:443 2>/dev/null | openssl x509 -noout -dates
```

## Get public key from Private key

```sh
# Generate a private key
openssl genrsa -out mykey.pem 2048

# Extract public key from above generated private key
openssl rsa -in mykey.pem -pubout > mykey.pub
```

## TLS Handshake explained

Below example explains how the TLS Handshake happens between a client and server.

```sh
sriram@sriram-Inspiron-5567:~$ curl abnamro.com -L -v
* Rebuilt URL to: abnamro.com/
*   Trying 88.221.24.80...
* TCP_NODELAY set
* Connected to abnamro.com (88.221.24.80) port 80 (#0)
> GET / HTTP/1.1
> Host: abnamro.com
> User-Agent: curl/7.58.0
> Accept: */*
< HTTP/1.1 301 Moved Permanently
< Server: AkamaiGHost
< Content-Length: 0
< Location: https://www.abnamro.com/
< Expires: Fri, 09 Aug 2019 04:24:52 GMT
< Cache-Control: max-age=0, no-cache, no-store
< Pragma: no-cache
< Date: Fri, 09 Aug 2019 04:24:52 GMT
< Connection: keep-alive
* Connection #0 to host abnamro.com left intact
* Issue another request to this URL: 'https://www.abnamro.com/'
*   Trying 88.221.24.96...
* TCP_NODELAY set
* Connected to www.abnamro.com (88.221.24.96) port 443 (#1)
* ALPN, offering h2
* ALPN, offering http/1.1
* successfully set certificate verify locations:
*   CAfile: /etc/ssl/certs/ca-certificates.crt
  CApath: /etc/ssl/certs
* (304) (OUT), TLS handshake, Client hello (1):
* (304) (IN), TLS handshake, Server hello (2):
* TLSv1.2 (IN), TLS handshake, Certificate (11):
* TLSv1.2 (IN), TLS handshake, Server key exchange (12):
* TLSv1.2 (IN), TLS handshake, Server finished (14):
* TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
* TLSv1.2 (OUT), TLS change cipher, Client hello (1):
* TLSv1.2 (OUT), TLS handshake, Finished (20):
* TLSv1.2 (IN), TLS handshake, Finished (20):
* SSL connection using TLSv1.2 / ECDHE-RSA-AES256-GCM-SHA384
* ALPN, server accepted to use h2
* Server certificate:
*  subject: jurisdictionC=NL; jurisdictionST=NH; jurisdictionL=Amsterdam; businessCategory=Private Organization; serialNumber=34334259; C=NL; ST=NH; L=Amsterdam; O=ABN AMRO Bank N.V.; OU=Internet Banking; CN=www.abnamro.com
*  start date: Sep 24 13:22:58 2018 GMT
*  expire date: Sep 24 13:31:00 2020 GMT
*  subjectAltName: host "www.abnamro.com" matched cert's "www.abnamro.com"
*  issuer: C=BM; O=QuoVadis Limited; CN=QuoVadis EV SSL ICA G1
*  SSL certificate verify ok.
* Using HTTP2, server supports multi-use
* Connection state changed (HTTP/2 confirmed)
* Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0
* Using Stream ID: 1 (easy handle 0x5602954b8580)
> GET / HTTP/2
> Host: www.abnamro.com
> User-Agent: curl/7.58.0
> Accept: */*
```

### References

https://www.feistyduck.com/library/openssl-cookbook/online/ch-testing-with-openssl.html  
https://www.ssllabs.com/ssltest/index.html  
https://testssl.sh/  
http://openssl.cs.utah.edu/docs/apps/s_client.html  
https://www.cloudflare.com/learning/ssl/what-is-an-ssl-certificate/  
