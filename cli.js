#!/usr/bin/env node

var secure = require('./')


var args = process.argv.slice(2);
if (!args.length) {
  return console.log('Usage: \ncouchdb-secure URL [SOURCE]')
}

var url = args[0];
var source = args[1] || process.cwd()


secure(url, source, function(error, response) {
  if (error) return console.error(error)

  console.log(JSON.stringify(response, null, '  '))
})
