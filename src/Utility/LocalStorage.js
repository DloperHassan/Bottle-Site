const getStoredCard = () => {
        const storedCardString = localStorage.getItem('cart');
        if (storedCardString) {
            return JSON.parse(storedCardString)
        } 
        return [];
}

const saveToLocalStorage = cart =>{
    const cartStringified = JSON.stringify (cart);
    localStorage.setItem('cart',cartStringified);

}

const addToLocalStorage = id => {
    const cart =getStoredCard();
    cart.push(id);
    saveToLocalStorage(cart)
}
export {addToLocalStorage,getStoredCard}