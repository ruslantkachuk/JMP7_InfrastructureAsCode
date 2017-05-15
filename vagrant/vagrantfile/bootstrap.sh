#!/usr/bin/env bash
# Install wget zip unzip git
sudo yum -y update
sudo yum -y install wget
sudo yum -y install zip
sudo yum -y install unzip
sudo yum -y install git
cd /opt/
# Install JAVA 8
wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz"
tar xzf jdk-8u131-linux-x64.tar.gz
# Install Gradle 3.5
wget https://services.gradle.org/distributions/gradle-3.5-all.zip
mkdir /opt/gradle
unzip -d /opt/gradle gradle-3.5-all.zip
# Install Tomcat 8
wget http://archive.apache.org/dist/tomcat/tomcat-8/v8.5.14/bin/apache-tomcat-8.5.14.tar.gz
tar xvf apache-tomcat-8.5.14.tar.gz
mv apache-tomcat-8.5.14 tomcat
# Download HSQLDB JDBC Driver
wget https://sourceforge.net/projects/hsqldb/files/hsqldb/hsqldb_2_4/hsqldb-2.4.0.zip/download?use_mirror=pilotfiber -O hsqldb-2.4.0.zip
mkdir /opt/hsqldb
unzip -d /opt/hsqldb hsqldb-2.4.0.zip
cp /opt/hsqldb/hsqldb-2.4.0/hsqldb/lib/hsqldb.jar /opt/tomcat/lib
