# Pull base image.
FROM centos:7

MAINTAINER ruslantkachuk

# Insatll wget, unzip, git
RUN yum -y update
RUN yum -y install epel-release
RUN yum -y install nodejs
RUN yum -y install npm
RUN yum -y install git

# Clone project
RUN mkdir /app && cd $_
RUN git clone https://github.com/ruslantkachuk/JMP7_InfrastructureAsCode.git /app

# Install packages
RUN npm install --prefix /app/docker/web

EXPOSE 3000
EXPOSE 3001

# Launch
CMD npm start --prefix /app/docker/web
