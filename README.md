# apollo-server-playground

[![Build Status](https://travis-ci.org/alexanderVu/apollo-server-playground.svg?branch=master)](https://travis-ci.org/alexanderVu/apollo-server-playground)
[![Coverage Status](https://coveralls.io/repos/github/alexanderVu/apollo-server-playground/badge.svg?branch=master)](https://coveralls.io/github/alexanderVu/apollo-server-playground?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/alexanderVu/apollo-server-playground/badge.svg?targetFile=package.json)](https://snyk.io/test/github/alexanderVu/apollo-server-playground?targetFile=package.json)

> Template or playground for Apollo-Server (GraphQL).

This project is not for teaching GraphQL neither nor Apollo-Server. It is a help to quickly set up a API based on Apollo GraphQL Server.

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

## Install

Use git to clone the repository.

```bash
git clone git@github.com:alexanderVu/apollo-server-playground.git
```

## Usage

```bash
cd apollo-server-playground
npm install
npm run serve
```

## CLI

* *serve* - Start the API with nodemon for hot reload during development
* *start* - Node default start script to start api in production
* *test* - Run jest test utility with coverall
* *test:unit* - Run jest test utility only
* *lint* - Run eslint standard
* *lint:fix* - Run eslint with fix option

## A top-level directory layout

> Folder structure options for Apollo Server

    .
    ├── lib
    │   ├── datasources         # Data sources encapsulate fetching data
    │   ├── directives          # Schema custom directives
    │   ├── schemas             # GraphQL schemas and resolvers
    │   ├── util                # Helper files
    │   └── context.js          # Settings for Apollo Server context object
    ├── .env                    # loads environment variables into process.env
    ├── index.js                # API start script
    ├── LICENSE
    └── README.md

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
