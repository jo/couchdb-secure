var nanoOption = require('nano-option')
var compile = require('couchdb-compile')
var ensure = require('couchdb-ensure')

module.exports = function configure(url, source, callback) {
  var db = nanoOption(url)
  var couch = nanoOption(db.config.url)

  compile(source, { index: true }, function(error, secObj) {
    if (error) return callback(error)

    ensure(url, function(error) {
      if (error) return callback(error)

      couch.request({
        method: 'PUT',
        path: '_security',
        db: db.config.db,
        body: secObj
      }, callback)
    })
  })
}
