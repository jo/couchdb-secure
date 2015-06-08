var nano = require('nano')
var compile = require('couch-compile')

module.exports = function configure(url, source, callback) {
  var db = nano(url)
  var couch = nano(db.config.url)

  compile(source, function(error, secObj) {
    couch.request({
      method: 'PUT',
      path: '_security',
      db: db.config.db,
      body: secObj
    }, callback)
  })
}
