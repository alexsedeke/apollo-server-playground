const { book } = require('../index')()
const mockBooks = require('../mockBooks')

describe('[BookAPI.getAll]', () => {
  it('Looks up Book', () => {
    const res = book.getAll()
    expect(res).toEqual(mockBooks)
  })
})
