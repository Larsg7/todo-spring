# Todo-Spring

Simple Todo App written with Java Spring Boot and Angular 6 using Swagger V2.

## Start Backend

You need a mondodb database to run this sample.

Execute inside the `todo-backend` folder, replacing the mongodb uri with the one for your mongodb instance:

```
env spring.data.mongodb.uri=mongodb://<user>:<mongo_pass>@<host>:<port>/<database> ./mvnw spring-boot:run
```

## Start frontend

You need npm and optionally yarn installed.

Execute inside the `todo-frontend` folder:

```
yarn install
yarn start
```

## Swagger

You find the swagger ui at http://localhost:8080/swagger-ui.html