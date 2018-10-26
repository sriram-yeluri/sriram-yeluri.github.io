#!/bin/bash
if [ `whoami` != 'root' ]; then
	echo "Executing the installer script"
else
	echo "Root is not allowed to execute the installer script"
fi
