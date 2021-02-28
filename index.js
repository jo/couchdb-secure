const nanoOption = require('nano-option')
const compile = require('couchdb-compile')
const ensure = require('couchdb-ensure')

module.exports = function configure (url, source, callback) {
  const db = nanoOption(url)
  const couch = nanoOption(db.config.url)

  compile(source, { index: true }, function (error, secObj) {
    if (error) return callback(error)

    ensure(url, function (error) {
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
