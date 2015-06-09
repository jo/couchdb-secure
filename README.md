# CouchDB Secure
Write couchdb security object from file or directory.

[![Build
Status](https://travis-ci.org/eHealthAfrica/couchdb-secure.svg?branch=master)](https://travis-ci.org/eHealthAfrica/couchdb-secure)


## API

```js
secure(url, source[, options], callback)
```

* `url` - CouchDB database URL
* `source` -  Can be a  Couchapp Directory Tree, JSON file or CommonJS/Node module. Please see [couchdb-compile](https://github.com/jo/couchdb-compile) for in depth information about source handling.
* `callback` - called when done with a `response` object describing the status of all operations.

### Example

```js
var secure = require('couchdb-secure')
secure('http://localhost:5984/mydb', 'couchdb/security.json', function(error, response) {
  // here we go
})
```

## CLI

```sh
couchdb-secure URL [SOURCE]
```

When `SOURCE` is omitted, the current directory will be used.


### Example
```sh
couchdb-secure http://localhost:5984/mydb couchdb/security.json
```

## Tests
```sh
npm test
```
