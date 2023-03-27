

export const getBooks = async () => {
    try {
        let res = await fetch('./books.json')
        let da = await res.json()
        const books = await da.books
        if (localStorage.getItem("bookslist") === null) {
            localStorage.setItem('bookslist', JSON.stringify(books))
        }

        return books;
    } catch (err) {
        throw err
    }
}
// export const getStoragedBooks = () => {
//     return JSON.parse(localStorage.getItem('bookslist'))
// }
