# How to instrument a polyglot microservices application with the Elastic APM

In this blog post we use an example application to demonstrate how to instrument a microservices application using the Elastic APM, with focus on Distributed Tracing.


## Components

1. [Frontend](/frontend) part is a Javascript application, provides UI. Created with [VueJS](http://vuejs.org)
2. [Auth API](/auth-api) is written in Go and provides authorization functionality
3. [TODOs API](/todos-api) is written with NodeJS, provides CRUD functionality ove user's todo records. Also, it logs "create" and "delete" operations to Redis queue, so they can be later processed by [Log Message Processor](/log-message-processor).
4. [Users API](/users-api) is a Spring Boot project written in Java. Provides user profiles. 
5. [Log Message Processor](/log-message-processor) is a very short queue processor written in Python. It's sole purpose is to read messages from Redis queue and print them to stdout

Take a look at the components diagram that describes them and their interactions.

![picture](https://github.com/nephel/microservice-app-example/blob/master/polyglot%20microservices%20app.jpg)


## Why this fork

The original project instrumeted the example app using Zipkin. 
This fork used the [Elastic APM](https://www.elastic.co/guide/en/apm/get-started/current/index.html)


## How to start

The demo uses the elastic stack on APM on ESS. If you don’t have an Elasticsearch Service account already, you can [set up a trial one](https://www.elastic.co/guide/en/cloud/current/ec-getting-started-trial.html). It comes with an APM server included as default. 

To get the example application running locally on our local machine and configure to send APM data to the Elasticsearch Service cluster. 
We need to clone the project i.e. 
```
git clone https://github.com/nephel/microservice-app-example.git
cd microservice-app-example
```
Create a file called .env  at the root directory of the project with the contents:`
`vi .env`
Adding the token and server URL values for the APM sever, that correspond to our environment.
```
TOKEN=XXXX
SERVER=XXXX
```


Use `docker-compose`:

```
docker-compose up --build
```

Then go to http://127.0.0.1:8080 for web UI.

Usernames/passwords are defined in `microservice-app-example/auth-api/user.go` as follows:
* admin/admin
* johnd/foo
* janed/ddd

## Contribution

This is definitely a contrived project, so it can be extended in any way you want.

## License

MIT
