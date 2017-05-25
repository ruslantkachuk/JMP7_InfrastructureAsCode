Docker
-----------------------
Docker is the software container platform. How to install and work with a docker you can find on the official website https://www.docker.com/ and https://docs.docker.com/engine/installation/

**Step 1**: Install Docker from store https://store.docker.com/ (about how https://docs.docker.com/engine/installation/)

**Step 2**: Depending on the operating system, maybe need to install additionally docker-compose tool. It comes as part of the install bundle for the Mac and Windows versions, but needs to be obtained separately for Linux. Check this by call the command: docker-compose --version from commant line. Additional info https://docs.docker.com/compose/

**Step 3**: Clone the current project and go to <project>/docker/dockerfile directory

**Step 4**: Run docker compose command from command line: docker-compose up. Docker compose will create the images from <project>/docker/dockerfile/tomcat and <project>/docker/dockerfile/angular and starts two containers.

**Step 5**: Application will be available on localhost:3000
