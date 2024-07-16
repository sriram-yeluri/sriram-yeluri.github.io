---
title: Getting Started
linktitle: Getting Started
---


## How to install Python3 in Debian

```sh
# Install prerequisites
$ sudo apt-get install build-essential 
$ sudo apt-get install libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev zlib1g-dev

# Download and extract python source tar
cd /tmp
wget https://www.python.org/ftp/python/3.8.5/Python-3.8.5.tar.xz
tar -xvf Python-3.8.5.tar.xz
cd Python-3.8.5
./configure --prefix=/appl/Python_3_8_5 --enable-optimizations
make
make install
```

## Dictionary

```python
# load json file 
with open('data_file.json') as json_file: 
    data = json.load(json_file) 
 
print(json.dumps(data,indent=4)) 

for groups in data['values']: 
     print(groups.items()) 
```

## Class

```python
class MyClass: 
    def __init__(self,f_name,l_name): 
        print("MyClass is instantiated successfully") 
        print(f'{f_name}_{l_name}') 
        self.f_name = f_name 
        self.l_name = l_name 
 
if __name__ == '__main__': 
    print('file is called directly') 
else: 
    print('test2 file is imported') 
 
print(MyClass.__dict__) 
```

## How to parse JSON

```python
# https://docs.atlassian.com/bitbucket-server/rest/6.10.0/bitbucket-rest.html 
# https://pynative.com/parse-json-response-using-python-requests-library/ 
 
import requests 
 
session = requests.Session() 
limit = 25 
start = 0 
isLastPage = False 
json_response = [] 
admin_groups = [] 
 
try: 
    while not isLastPage: 
        url = f'https://bitbucket_url:7999/rest/api/1.0/admin/groups?limit={limit}&start={start}'
        # print(url) 
        r = session.get(url,auth=('USer_ID', 'Passwd')) 
        json_response.append(r.json()) 
        isLastPage = r.json()['isLastPage'] 
        if isLastPage == True: 
            break 
        start = r.json()['nextPageStart'] 
except Exception as err: 
    print(f'error: {err}') 
 
# json_response is a list with dictionary of values 
# iterate through list and get the dictionary 
for item in json_response: 
    for names in item['values']: 
        admin_groups.append(names['name'])      # Add the admin group names to list 
 
# Total number of groups 
print(f'Total Number of groups : {len(admin_groups)}') 
# iterate through admins list and print the admin group names 
for admin in admin_groups: 
    print(admin)
```

## Argument Parsing - Flags

```python
import requests 
import argparse 
 
 
def check_app_status(url): 
    r = requests.get(url) 
    try: 
        response = r.json() 
    except Exception as e: 
        print(f'Exception occured : {e}') 
    if (r.status_code == 200 and response['state'] == "RUNNING"): 
        print(f'Application is up and running') 
    else: 
        print(f'Application is not reachable') 

 
def init_argument_parser(argument_list=None): 
    parser = argparse.ArgumentParser() 
    parser.add_argument('-url', '--url', help='URL of Application ', required=True) 
    return parser.parse_args() 
 
if __name__ == '__main__': 
    args = init_argument_parser() 
    # print(f'{args.url}') 
    check_app_status(args.url) 
```