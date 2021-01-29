const data = async () => {
    const url = `http://localhost:3001/api/book?page=1`
    try {
        const response = await fetch(url);
        const books = await response.json();
        console.log(books);
        console.log(books.data);
        return books.data
    } catch (e) {
        console.log(e)
    }
}

export { data }