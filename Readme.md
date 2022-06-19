## Docker commands handy

1. **sudo docker build .** : Building a container with current directory.
2. **sudo docker build -t myflaskapp .** : Building a container with current directory and tagging name to it.
3. **docker ps -a** : To see all the running containers
4. **sudo docker exec -it 977521c93547 bash** : To execute a shell in a running container.
5. **sudo docker stop 977521c93547** : To stop a running container.
6. **sudo docker run -p 20000:3000 frontendimage** : To map the port of system and the docker image. `system port:docker port`
7. **sudo docker build --no-cache .** : Rebuild docker image from scratch.
8. **sudo docker run -p 20000:3000 -v /usr/app/node_modules -v $(pwd):/usr/app frontendimage** : Mapping the volumn inside docker image to local system.
9. **sudo docker exec -it <container Id> sh** : Starting a shell on a docker image. But before this, we would need to start the docker conainer. Not run but start. Using `sudo docker start <container id>`.
10. **sudo docker-compose up** : Start docker-compose.
11. **sudo docker run reactproject:latest npm run test** : We can run commands like this but this will not be interactive so to make it interactive, we have to use `-it` like in the command below.
12. **sudo docker run -it reactproject:latest npm run test** : This will run interactive command and will take user inputs etc.
13: **sudo docker-compose up --build** : To rebuild the containers and run them
