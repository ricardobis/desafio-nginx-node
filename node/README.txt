docker build -t ricardobis/node .
docker run -d --name node -v $(pwd):/usr/src/app -p 3000:3000 ricardobis/node

docker ps
docker rm $(docker ps -a -q) -f
docker rmi $(docker images -a -q) -f