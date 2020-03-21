# PostgreSQL, TypeScript,  Node.js and Express.js Stack

## Overview

This repo is a boilerplate project starter built with TypeScript for a PostgreSQL / Express.js / Node.js backend service. You can plug-in any other frontend library seamlessly.

## Technologies Used

- [PostgreSQL](https://www.postgresql.org/) - The World's Most Advanced Open Source Relational Database
- [Typescript](https://www.typescriptlang.org/) - TypeScript extends JavaScript by adding types to the language
- [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express.js](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [TypeORM](https://typeorm.io/#/) - TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8)

## Highlights

- [PostgreSQL Audit Trail]()
- Test Coverage
![](https://leo.d.pr/kmVY0g+)
- [Decorators and more]()


## Folders / Files Structure

Here is a high-level overview of our file structure.

```
src/
  __tests__/ # tests
  config/
  packages/
    api/ # API helpers, middlewares, resources, controllers, validations
    database/ # database helpers, models, database migrations
  index.ts
  server.ts
README.md
package.json, etc...
```

## Environment Variables

```
# JWT
AUTH_TOKEN_EXPIRATION_TIME=""
AUTH_TOKEN_SECRET=""

# DATABASE
DB_HOST=""
DB_NAME=""
DB_PASSWORD=""
DB_PORT=""
DB_USERNAME=""
DB_MAIN_SCHEMA=""
DB_AUDIT_SCHEMA=""

# LOGGING
LOGGING_COMBINED_FILE=""
LOGGING_ERROR_FILE=""
LOGGING_LEVEL=""
LOGGING_TYPE=""

# SERVER
SERVER_PORT=""
```

## Setup

1. Create a `.env.local` file on the root of the project based on `.env.example`
2. Execute `npm run setup:local`
3. Start the development server running `npm run dev`

## Running Tests

1. Create a `.env.test` file on the root of the project based on `.env.example`
2. Execute `npm run setup:test`
3. Run `npm test`

![](https://leo.d.pr/CYYAre+)

### License
This project is open-sourced software licensed under the [MIT license](https://github.com/busayo/meanmap/blob/master/LICENSE).
