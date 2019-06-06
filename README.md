# Retkeily.Info

Portal for hikers to inform other hikers about trail conditions and events.

## Prerequisites

- Yarn
- Docker
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
$ yarn db-create
```

Populate database:

```
$ yarn db-populate
```

To access container bash shell:

```
$ yarn db-ssh
```

If you ever need to delete container:

```
$ yarn db-delete
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
