---
title: Networking
linktitle: Networking
description: >
  Learn more about Networking in Linux
---

{{< alert color="warning" title="Warning" >}}
net-tools utilities are obsoleted by iproute2  
https://wiki.linuxfoundation.org/networking/iproute2
{{< /alert >}}

| Legacy utility | Replacement command        | Note                               |
|----------------|----------------------------|------------------------------------|
| ifconfig       | ip addr, ip link, ip -s    | Address and link configuration     |
| route          | ip route                   | Routing tables                     |
| arp            | ip neigh                   | Neighbors                          |
| iptunnel       | ip tunnel                  | Tunnels                            |
| nameif         | ifrename, ip link set name | Rename network interfaces          |
| ipmaddr        | ip maddr                   | Multicast                          |
| netstat        | ip -s, ss, ip route        | Socket statistics                  |

### ip address statistics with colors and human readable format

`ip -stats -color -human addr`  
`ip -s -c -h a`

### How to start/stop an interface

```sh
ifup eth0  (deprecated)
ifdown eth0 (deprecated)
```

To show the current neighbour table in kernel  
`$ ip neigh`

To temporarily assign IP Address to a specific network interface (eth0)  
`$ sudo ip addr add 192.168.56.1 dev eth0`

To remove an assigned IP address from an network interface (eth0)
`$ sudo ip addr del 192.168.56.15/24 dev eth0`

### ethtool

a command line utility for querying and modifying network interface controller parameters and device drivers.  
`$ sudo ethtool enp0s3`

### ping (Packet INternet Groper)

Utility normally used for testing connectivity between two systems on a network (Local Area Network (LAN) or Wide Area Network (WAN)). It uses ICMP (Internet Control Message Protocol) to communicate to nodes on a network.  
To test connectivity to another node, simply provide its IP or host name, for example.  
`$ ping 192.168.0.1`

### traceroute | tracepath

Traceroute is a command line utility for tracing the full path from your local system to another network system. It prints number of hops (router IP’s) in that path you travel to reach the end server. It is an easy-to-use network troubleshooting utility after ping command.

Tracepath is similar to traceroute but for non root users.

In this example, we are tracing the route packets take from the local system to one of Google’s servers with IP address 216.58.204.46.  
`$ traceroute 216.58.204.46`

If traceroute is not available on the system, then install the utility as a root : `yum install traceroute`

### MTR - a network diagnostic tool

MTR is a modern command-line network diagnostic tool that combines the functionality of ping and traceroute into a single diagnostic tool. Its output is updated in real-time, by default until you exit the program by pressing q.

The easiest way of running mtr is to provide it a host name or IP address as an argument, as follows.

`$ mtr google.com` (or) `$ mtr 216.58.223.78`

### route - show / manipulate the IP routing table

route is a command line utility for displaying or manipulating the IP routing table of a Linux system. It is mainly used to configure static routes to specific hosts or networks via an interface.

You can view Kernel IP routing table by typing.
`$ route`

Add a default gateway to the routing table.
`$ sudo route add default gw <gateway-ip>`

Add a network route to the routing table.
`$ sudo route add -net <network ip/cidr> gw <gateway ip> <interface>`

Delete a specific route entry from the routing table.
`$ sudo route del -net <network ip/cidr>`

## nmcli - command line tool for network management

nmcli is an easy-to-use, scriptable command-line tool to report network status, manage network connections, and control the NetworkManager.  

Install network-manager for nmcli:  
`sudo apt install network-manager`

To check network connections on your system  
`$ nmcli con show`

List out all network interfaces and status  
`$ nmcli d` (or) `$ nmcli dev status`

```sh
[root@10 ~]# nmcli d
DEVICE  TYPE      STATE      CONNECTION
enp0s3  ethernet  connected  enp0s3
enp0s8  ethernet  connected  enp0s8
lo      loopback  unmanaged  --
```

{{< alert color="warning" title="Warning" >}}
netstat is obsolete and replaced by **ss**
{{< /alert >}}
netstat is a command line tool that displays useful information such as network connections, routing tables, interface statistics, and much more, concerning the Linux networking subsystem. It is useful for network troubleshooting and performance analysis.

Additionally, it is also a fundamental network service debugging tool used to check which programs are listening on what ports. For instance, the following command will show all TCP ports in listening mode and what programs are listening on them.
$ sudo netstat -tnlp

To view kernel routing table, use the -r flag (which is equivalent to running route command above).
$ netstat -r

## ss (socket statistics) - another utility to investigate sockets

ss (socket statistics) is a powerful command line utility to investigate sockets. It dumps socket statistics and displays information similar to netstat. In addition, it shows more TCP and state information compared to other similar utilities.

The following example show how to list all TCP ports (sockets) that are open on a server.  
`$ ss -ta`

## nc (or netcat) - arbitrary TCP and UDP connections and listens

NC (NetCat) also referred to as the “Network Swiss Army knife”, is a powerful utility used for almost any task related to TCP, UDP, or UNIX-domain sockets.

* It can open TCP connections
* send UDP packets
* listen on arbitrary TCP and UDP ports
* do port scanning
* deal with both IPv4 and IPv6.

Example to show how to scan a list of ports.  
`$ nc -zv www.google.com 21 22 80 443 3000`

```sh
nc -zv www.google.com 21 22 80 443 3000
nc: connect to www.google.com port 21 (tcp) failed: Connection timed out
nc: connect to www.google.com port 21 (tcp) failed: Connection timed out
nc: connect to www.google.com port 22 (tcp) failed: Connection timed out
nc: connect to www.google.com port 22 (tcp) failed: Connection timed out
Connection to www.google.com 80 port [tcp/http] succeeded!
Connection to www.google.com 443 port [tcp/https] succeeded!
nc: connect to www.google.com port 3000 (tcp) failed: Connection timed out
```

You can also specify a range of ports as shown.  
`$ nc -zv www.google.com 20-90`

The following example shows how to use nc to open a TCP connection to port 5000 on server2.tecmint.lan, using port 3000 as the source port, with a timeout of 10 seconds.  
`$ nc -p 3000 -w 10 server2.tecmint.lan 5000`

## nmap

Nmap (Network Mapper) is a powerful and extremely versatile tool for Linux system/network administrators. It is used gather information about a single host or explore networks an entire network. Nmap is also used to perform security scans, network audit and finding open ports on remote hosts and so much more.

You can scan a host using its host name or IP address, for instance.
`$ nmap google.com`

### Find all devices connected to the same Network using nmap

```sh
~$ nmap -sP 192.168.2.1/24
Starting Nmap 7.80 ( https://nmap.org ) at 2020-07-04 22:14 CEST
Nmap scan report for wn3000rpv3.home (192.168.2.1)
Host is up (0.098s latency).
Nmap scan report for 192.168.2.6 (192.168.2.6)
Host is up (0.098s latency).
Nmap scan report for 192.168.2.11 (192.168.2.11)
Host is up (0.011s latency).
Nmap scan report for sriram-inspiron-5567.home (192.168.2.13)
Host is up (0.00024s latency).
Nmap scan report for 192.168.2.40 (192.168.2.40)
Host is up (0.064s latency).
Nmap scan report for router.home (192.168.2.254)
Host is up (0.088s latency).
Nmap done: 256 IP addresses (6 hosts up) scanned in 11.17 seconds
```

## DNS Lookup Utilities

host command is a simple utility for carrying out DNS lookups, it translates host names to IP addresses and vice versa.  
`$ host google.com`

dig (domain information groper) is also another simple DNS lookup utility, that is used to query DNS related information such as A Record, CNAME, MX Record etc, for example:  
`$ dig google.com`

Nslookup is also a popular command line utility to query DNS servers both interactively and non-interactively. It is used to query DNS resource records (RR). You can find out “A” record (IP address) of a domain as shown.  
`$ nslookup google.com`

## tcp dump

Linux Network Packet Analyzers:
Tcpdump is a very powerful and widely used command-line network sniffer. It is used to capture and analyze TCP/IP packets transmitted or received over a network on a specific interface.

To capture packets from a given interface, specify it using the -i option.  
`$ tcpdump -i eth1`

To capture a specific number of packets, use the -c option to enter the desired number.  
`$ tcpdump -c 5 -i eth1`

To capture and save packets to a file for later analysis, use the -w flag and specify the output file.  
`$ tcpdump -w captured.pacs -i eth1`

### References

[IPROUTE2 Utility Suite Howto](http://www.policyrouting.org/iproute2.doc.html#ss9.2.1)
