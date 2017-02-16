#!/usr/bin/env babel-node --optional es7.asyncFunctions

import fs from 'fs';
import path from 'path';
import http from 'http';

function callback(res) {
  res.on('data', (chunk) => {
    var schema = JSON.parse(chunk);

    // Save JSON of full schema introspection for Babel Relay Plugin to use
    fs.writeFileSync(
      path.join(__dirname, '../data/schema.json'),
      JSON.stringify(schema.data, null, 2)
    );
  });
}

function getSchema() {
  http.request('http://localhost:5000/schema', callback).end();
}

getSchema();
