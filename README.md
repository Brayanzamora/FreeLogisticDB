# CustomPlush database

This project holds the migrations behind the CustomPlush's database. It only runs migrations and seeders and then finishes execution.

## Quickstart

```bash
# Install dependencies
yarn install

# Configure the connection credentials
cp .env.example .env
vim .env

# (Optional) Create a local database with docker. It will use the credentials from the .env file.
yarn db:up

# Run the migrations and seeders!
yarn start
```

## Managing the docker database

```
# Create the database
yarn db:up

# Stop the database
yarn db:down

# Destroy the database
yarn db:remove

# Show the database logs
yarn db:logs
```

## Troubleshooting

- After changing branches, I keep receiving errors about migrations not existing. What do I do?

Sometimes the migrations in the `/dist` folder aren't updated after changing branches. Delete the folder manually or run `yarn clear`.

_---_
