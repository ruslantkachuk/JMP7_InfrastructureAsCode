# Pull base image.
FROM centos:7

MAINTAINER ruslantkachuk

# Insatll wget, unzip, git
RUN yum -y update
RUN yum -y install wget
RUN yum -y install unzip
RUN yum -y install git

# Install JAVA 8
RUN mkdir /opt/java &&\
wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.rpm" -P /opt/java/ &&\
yum localinstall -y /opt/java/jdk-8u131-linux-x64.rpm
ENV JAVA_HOME /usr/java/jdk1.8.0_131/
ENV PATH $PATH:$JAVA_HOME/bin

# Install Tomcat 8
RUN mkdir /opt/tomcat &&\
wget http://archive.apache.org/dist/tomcat/tomcat-8/v8.5.14/bin/apache-tomcat-8.5.14.tar.gz -P /opt/tomcat/ &&\
tar xvf /opt/tomcat/apache-tomcat-8.5.14.tar.gz -C /opt/tomcat &&\
mv /opt/tomcat/apache-tomcat-8.5.14 /opt/tomcat/tomcat8
ENV CATALINA_HOME /opt/tomcat/tomcat8
ENV PATH $PATH:$CATALINA_HOME/bin

# Install Gradle 3.5
RUN mkdir /opt/gradle && cd $_
ADD https://services.gradle.org/distributions/gradle-3.5-all.zip /opt/gradle/gradle-3.5-all.zip
RUN unzip -d /opt/gradle /opt/gradle/gradle-3.5-all.zip
ENV PATH $PATH:/opt/gradle/gradle-3.5/bin

# Download HSQLDB JDBC Driver
RUN mkdir /opt/hsqldb &&\
wget https://sourceforge.net/projects/hsqldb/files/hsqldb/hsqldb_2_4/hsqldb-2.4.0.zip/download?use_mirror=pilotfiber -O /opt/hsqldb/hsqldb-2.4.0.zip &&\
unzip -d /opt/hsqldb /opt/hsqldb/hsqldb-2.4.0.zip &&\
cp /opt/hsqldb/hsqldb-2.4.0/hsqldb/lib/hsqldb.jar $CATALINA_HOME/lib

# Clone project
RUN mkdir /app && cd $_
RUN git clone https://github.com/ruslantkachuk/JMP7_InfrastructureAsCode.git /app

# Build project
RUN gradle build -p /app/docker &&\
rm -r $CATALINA_HOME/webapps/ROOT &&\
unzip -o /app/docker/build/libs/jmp.war -d /app/docker/build/libs/jmp &&\
ln -s /app/docker/build/libs/jmp $CATALINA_HOME/webapps/ROOT

EXPOSE 8080
EXPOSE 8000

# Launch Tomcat
#CMD tail -f /dev/null
CMD $CATALINA_HOME/bin/catalina.sh jpda run
