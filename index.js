var nano = require('nano')
var compile = require('couchdb-compile')
var ensure = require('couchdb-ensure')

module.exports = function configure(url, source, callback) {
  var db = typeof url.config === 'object' ? url : nano(url)
  var couch = nano(db.config.url)

  compile(source, function(error, secObj) {
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
