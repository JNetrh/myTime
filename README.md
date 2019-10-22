# MyTime

## Local development

### Prerequisites

- Docker: https://docs.docker.com/install/
- docker-compose: https://docs.docker.com/compose/install/

### Build + Run

In the root folder (where this README.md is located) run:

```sh
docker-compose up --build
```

Your app is running.

- Application: http://localhost:3000/
- GraphiQL playground: http://localhost:4000/

## Staging and Production deployment

TBD

**Do not use** `docker-compose.yml` in the root for deployment, it serves only for local development!
