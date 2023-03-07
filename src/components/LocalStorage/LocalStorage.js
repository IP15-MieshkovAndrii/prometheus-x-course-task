const setUser = (username) => {
    localStorage.setItem('username', username);
}

const getUsername = () => {
    return localStorage.getItem('username')
}

const deleteUsername = () => {
    localStorage.removeItem('username')
}

const deleteCart = () => {
    localStorage.removeItem('cart')
}

export {setUser, getUsername, deleteUsername, deleteCart}