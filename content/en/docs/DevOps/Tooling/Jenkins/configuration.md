---
title: "Jenkins Configuration"

---

Q1) In the Global Security, I didn't have a TCP port for JNLP agents enabled, which automatically disables the line "Launch agent via Java Web Start"

Solution:  
Manage Jenkins => Configure Global Security => Enable security => TCP port for JNLP agents Set it to either Fixed (for this option also set the port number) or Random.

![enable-jnlp-agent](/images/Jenkins/enable-jnlp-agents.png)
