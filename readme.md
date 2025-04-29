<h1>Learning Docker compose</h1>
Let's break down Docker Compose with question such as:

<li>What is docker compose</li>
<li>Why we need docker compose</li>
<li>How to use the docker compose</li>

<h2>Step1:What is the docker compose</h2>
<p>Docker Compose is a tool for defining and managing multi-container Docker applications. It uses a YAML file to configure the application's services, networks, and volumes. With a single command, Docker Compose can create and start all the services defined in the configuration file. It is commonly used for development, testing, and staging environments, as well as for simpler production deployments. 
</p>

<h2>Step2:Why we need the docker compose</h2>
<p>If your need multi container to run then docker compose is the best option .But suppose you have a python code and you want to run on your machine and this python code doesn't require other things like database,redis etc then the docker run command or dockerfile is the best option</p>

<h2>Step3:How to use docker compose</h2>
<h4>Step3.1Create a docker-compose.yaml</h4>
<p>Define all the services required to run the application</p>
<h4>Step3.2 run the below command if have cloned this repo this command run the container of the monogdb and mongo-express(interface for the mongodb) and application contianer</h4>
```bash
docker compose -f learning.yaml up -d
``` 
<h4>Step3.3 Now to the broswer type</h4>

``` bash 
    http://localhost:8081
```
<p>
It ask for the user : admin and password : pass
Then create my-db database and then go inside the my-db .
Then create my-collection and click on the view document.
Then paste the below code
</p>

```bash
{
  "_id":  "ObjectId()" 
  "myid": 1,
  "message": "this is the message"
}
```
<p>Save!!!</p>
<h4>Last step:Go the broswer</h4>

```bash 
http://localhost:3000/getinfo
```
<p>This show the message saved on the mongodb but only whose  myid=1 and server.js file according to you this for the demo purpose only!</p>


<h3>If things doesn't went well then
see the logs this will help to understand where you have made mistake

``` bash
docker logs container_name or continer_id
```
</h3>