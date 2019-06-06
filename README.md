# Retkeily.Info

Portal for hikers to inform other hikers about trail conditions and events.

## Prerequisites

- Yarn
- Docker
- MariaDB (for initializing database remotely)
- Strong recommendation for an IDE: VSCode

### Recommended VSCode plugins:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Setup

After cloning this repository, create a new `.env.development.local` file from the provided `.env.example` file and configure it as needed:

```
$ cp .env.example .env.development.local
```

## Development

To create Docker container for database:

```
$ yarn db
```

Initialize database:

```
$ mysql -h 127.0.0.1 -P 3333 -u root -p -D retkeily_info < api/scripts/create_database.sql
```

To start development, run:

```
$ yarn start
```

This will start [the application](http://localhost:3000) on port `3000`

To start API, run:

```
$ yarn api
```

This will start [the API](http://localhost:3001) on port `3001`
