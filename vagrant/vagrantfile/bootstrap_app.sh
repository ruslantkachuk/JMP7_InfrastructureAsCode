#!/usr/bin/env bash
java -version
mkdir /home/vagrant/jmp7
git clone https://github.com/ruslantkachuk/JMP7_InfrastructureAsCode.git /home/vagrant/jmp7
cd /home/vagrant/jmp7
gradle build
cp /home/vagrant/jmp7/build/libs/jmp.war /opt/tomcat/webapps
/opt/tomcat/bin/startup.sh
