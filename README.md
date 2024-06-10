## Setup

You need to change some variables at .env.development, .env.production, docker-compose.yml, copy_production_db_to_local.sh, cron_send_backup_db.sh

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# watch mode
$ yarn dev

# production mode
$ yarn start:prod
```

## Run docker

```bash
$ yarn dc:prod
```

## URL

```bash
# Run app
$ yarn dev => http://localhost:3004

# Swagger
$ http://localhost:3004/swagger

```
