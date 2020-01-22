const BookDataSource = require('./book')

function defineDataSources () {
  return {
    book: new BookDataSource()
  }
}

module.exports = defineDataSources
