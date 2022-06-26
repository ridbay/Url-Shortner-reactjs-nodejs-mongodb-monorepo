# URL Shortner

Pastel Fullstack tech test

## Project structure

There are 2 packages inside the project:

- **Client:** React.JS application.
- **Server:** Express.JS application.

Each of the packages have their own `package.json` file, so they define their dependencies.

```
|- Dockerfile
|- docker-compose.yml
|------ client
        |-------- package.json
        |-------- Dockerfile
|------ server
        |-------- package.json
        |-------- Dockerfile
```

## How to install and execute

1. Clone this repository locally: `$ git clone https://github.com/ferreiro/example-monorepo.git`
2. Build with no cache: `docker-compose build`
3. Start the services: `docker-compose up`
4. List the services: `docker-compose ps`
5. List the containers: `docker ps`
6. stop services: `docker-compose stop`
