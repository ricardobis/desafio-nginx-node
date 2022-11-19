# to run the application #
docker-compose up -d

# to stop the application #
docker-compose down

docker-compose up 
docker-compose down
docker-compose ps -a
docker-compose up -d --build



docker ps
docker rm $(docker ps -a -q) -f
docker rmi $(docker images -a -q) -f


docker exec -it db bash
mysql -uroot -p
show databases;
use nodedb;
create table people(id int not null auto_increment, name varchar(255), primary key(id));
desc people;

docker exec -it app bash
npm install mysql --save
node index.js


docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=nodedb -e MYSQL_USER=myroot -e MYSQL_PASSWORD=myroot local/mysql


docker exec -it 61d742d34cb6 bash

mysql -uroot -p
