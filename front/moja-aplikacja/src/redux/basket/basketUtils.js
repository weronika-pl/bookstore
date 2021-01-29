export const handleAddToCart = ({ list, book }) => {
    const isBookAlreadyInBasket = ({ list, book }) => {
        return list.includes(book)
    }
    if (list.length > 0){
        if(isBookAlreadyInBasket({ list, book })) {
            return list.map(item => 
                item.id === book.id
                ? {
                    ...item,
                    quantity: item.quantity++
                } : item
            )
        } else {
            return [
                ...list,
                {
                    ...book,
                    quantity: 1
                }
            ]
        }
    } else {
        return [
            ...list,
            {
                ...book,
                quantity: 1
            }
        ]
    }
}

export const handleRemoveFromCart = (list, book) => {
    return list.filter(item => item.id !== book.id)
}

export const handleReduceBook = (list, book) => {
    const existingBook = list.find(item =>
        item.id === book.id
    );
    
    if (existingBook.quantity === 1) {
    return list.filter(
        item => item.id !== existingBook.id);
    }

    return list.map(item =>
    item.id === existingBook.id 
    ?
    {
        ...item,
        quantity: item.quantity--
    } : item
    )
}

export const handleQty = list => {
    const sumOfBooks = list.length > 0 
    ? list.reduce((a, b) => a + b.quantity, 0) 
    : 0
    return sumOfBooks
}