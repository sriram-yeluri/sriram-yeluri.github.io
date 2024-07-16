---
title: "SSL-Certificates"

---

## How to obtain a SSL certificate

* Create a Java Keystore
* Create a CSR (certificate signing request)
* Send the CSR to Certificate Authority
* SSL certificate will be issued by CA
* Import the certificate to the keystore
* Import Intermediate certificate of CA to keystore
* Create a trust chain of certificates

## How to create a self signed certificate

<! To Do>

## CA Certificates keystore path

``` sh
/etc/ssl/certs/java/cacerts  
Default password : changeit
```

## Creating trust chain using Keystore Explorer

<img src="/images/Security/Create_Cert_Chain/keystore_explorer.png" alt="" width="800"/>
<img src="/images/Security/Create_Cert_Chain/open_keystore.png" alt="" width="800">
<img src="/images/Security/Create_Cert_Chain/import_ca_reply_1.png" alt="" width="800">
<img src="/images/Security/Create_Cert_Chain/import_ca_reply_2.png" alt="" width="800">
<img src="/images/Security/Create_Cert_Chain/import_ca_reply_3.png" alt="" width="800">
<img src="/images/Security/Create_Cert_Chain/append_cert_1.png" alt="" width="800">
<img src="/images/Security/Create_Cert_Chain/append_cert_2.png" alt="" width="800">
<img src="/images/Security/Create_Cert_Chain/append_cert_3.png" alt="" width="800">
<img src="/images/Security/Create_Cert_Chain/append_cert_4.png" alt="" width="800">
<img src="/images/Security/Create_Cert_Chain/view_chain_details_1.png" alt="" width="800">
<img src="/images/Security/Create_Cert_Chain/view_chain_details_2.png" alt="" width="800">
<img src="/images/Security/Create_Cert_Chain/view_chain_details_3.png" alt="" width="800">

## Reference

GUI tool to manage keystores and certificates  
[Download Keystore Explorer](https://keystore-explorer.org/)
