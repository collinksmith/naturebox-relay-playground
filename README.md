# NatureBox Relay Playground

This is based off of the [Relay Starter Kit](https://github.com/relayjs/relay-starter-kit). It connects to the NatureBox GraphQL server, which provides a GraphQL wrapper over parts of the NatureBox REST API.

## Installation

```
npm install
```

## Running

Start a local server:

```
npm start
```

## Developing

Any changes you make to files in the `js/` directory will cause the server to
automatically rebuild the app and refresh your browser.

## Using

To use, you'll need to start both this server and the [graphql server](https://github.com/collinksmith/naturebox-graphql-server).

There is one route set up, showing a product name and its reviews. You need to provide the provide product id in the url params, like so: `localhost:4000?id=437`.