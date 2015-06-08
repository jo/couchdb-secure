# CouchDB Secure
Write couchdb security object from file or directory.

[![Build
Status](https://travis-ci.org/eHealthAfrica/couchdb-secure.svg?branch=master)](https://travis-ci.org/eHealthAfrica/couchdb-secure)

`source` is processed by [couch-compile](https://github.com/jo/couch-compile),
so you can use a json file, node module or filesystem mapping.

## API

```js
var secure = require('couchdb-secure')
secure('http://localhost:5984/mydb', 'couchdb/security.json', function(error, response) {
  // here we go
})
```

## CLI

```sh
couchdb-secure http://localhost:5984/mydb couchdb/security.json
```

## Tests
```sh
npm test
```
