---
title: "Services"

---


AWS Services  

## Storage

EBS - Elastic Block Store

* Amazon EBS delivers high-availability block-level storage volumes for Amazon Elastic Compute Cloud (EC2) instances
* It stores data on a file system which is retained after the EC2 instance is shut down
* [EBS](https://aws.amazon.com/ebs/)  
* [AWS::EC2::Volume](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volume.html)

EFS - Elastic File System

* Managed NFS for use with AWS EC2 instances.
* Built to scale on demand to petabytes without disrupting applications.
* Storage size will grow and shrink automatically as you add and remove files.
* [EFS](https://aws.amazon.com/efs/)
* [AWS::EFS::FileSystem](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html)

S3 - Simple Storage Service

* object storage service that offers scalability, data availability, security, and performance.
* You can store and protect any amount of data for a range of use cases, such as websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics.
* [S3](https://aws.amazon.com/s3/)  
* [AWS::S3::Bucket](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html)

## Compute

EC2 - Elastic Compute Cloud

* Virtual machine in the cloud.
* [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html)
