const { DataSource } = require('apollo-datasource')
const { ApolloError } = require('apollo-server-errors')
const mockBooks = require('./mockBooks')
const uniqid = require('uniqid')

class BookDataSource extends DataSource {
  /**
   * Return all Book objects.
   * @returns {array}
   */
  getAll () {
    return mockBooks
  }

  /**
   * Find Book object by its isbn property.
   * @param {string} isbn
   * @returns {array}
   */
  getByISBN (isbn) {
    return mockBooks.filter(book => book.isbn === isbn)
  }

  /**
   * Find Book object by it's unique id.
   * If not found, return null.
   * @param {*} id Book object id.
   * @returns {array} New Book object with unique id.
   */
  getById (id) {
    const foundBook = mockBooks.filter(book => book.id === id)
    if (!foundBook.length) {
      return null
    }
    return foundBook[0]
  }

  /**
   * Save Book object to mock data. Create unique id.
   * @param {object} book Book object to be stored.
   * @returns {object} New Book object with unique id.
   */
  save (book) {
    book.id = uniqid()
    mockBooks.push(book)
    return book
  }

  /**
   * Modify Book object from mock data when exists.
   * If Book object is not set, remove book.
   * @param {string} id Book object id.
   * @returns {object|error}
   */
  modify (id, updatebook) {
    const getBook = mockBooks.find((book, index) => {
      if (book.id === id) {
        book.index = index
        return book
      }
    })
    // Raise exption when no record was found
    if (!getBook) {
      throw new ApolloError('Book for deleting not found')
    }
    if (updatebook) {
      mockBooks.splice(getBook.index, 1, updatebook)
      return updatebook
    } else {
      mockBooks.splice(getBook.index, 1)
      return getBook
    }
  }
}

module.exports = BookDataSource
