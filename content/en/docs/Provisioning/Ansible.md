---
title: "Ansible"

---

* Automation tool for configuration management
* Tool for automated deployments
* Agent less
* Yaml syntax playbooks

## Installation of Ansible

```sh
yum update -y && \
yum install ansible -y
```

## Setting up Inventory

* Inventory file lists hostnames and groups in INI-like format
* Inventory file can be static or Dynamic
* Inventory file can specify IP addresses, hostnames and groups
* Inventory file can include specific parameters like non standard ports, aliases
* Default location for ansible inventory : `/etc/ansible/hosts`
* Inventory can also be located else where and used with -i flag by providing the path in command line
* Important to have local group as ansible communicates back to host instance

Example :

```Ansible
[webservers]
web1 ansible_host=www.mywebserver.com:5309

[loadbalancers]
lb ansible_host=192.168.10.2

[local]
control ansible_connection=local --> this is required to tell ansible not to ssh to local host
```

Inventory Commands:

```Ansible
ansible --list-hosts all
```

## Setting up Ansible Configuration file

Ansible will search for configuration file in below order

1. ANSIBLE_CONFIG (environment variable if set)
2. ansible.cfg (in current directory)
3. `~/.ansible.cfg` (in home directory)
4. `/etc/ansible/ansible.cfg`

Create ansible.cfg file in project folder, to control ansible environment settings

```Ansible
# ansible.cfg

[defaults]
inventory = ./inventory-file
remote_user = user_id_of_host_servers
private_key_file = ~/.ssh/ssh_key_file_of_host_servers.pem
host_key_checking = FALSE --> do not check host key finger print while ssh when connecting for first time
```

## Ansible Tasks

Ansible tasks allows us to run adhoc commands against our inventory file.
In simple terms , Task is a call to ansible module.

syntax: ansible options host-pattern  
Ex: ansible -m ping all ---> ansible-command module_flag module_name inventory

## Using valut in Ansible

```Ansible
ansible-playbook -i hosts site.yml --ask-vault-pass
ansible-playbook -i hosts site.yml --vault-password-file vault-pass
```
{{< alert color="warning" title="Warning" >}} If you want to use --vault-password-file option, then make sure you add the password filename to `.gitignore`, else vault password will be exposed in the git repository.{{< /alert >}}

## Docker ansible control machine

Inorder to take advantage of the container technology, i have created a simple docker image from centos with ansible. So we can spin up a container and use this as a control machine to run ansible playbooks.  
[Centos Docker Image with Ansible](https://hub.docker.com/r/yeluris/ansibleimage/)  

### References

[Installation Guide](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)  
[Configuration File](https://docs.ansible.com/ansible/latest/reference_appendices/config.html#ansible-configuration-settings)
