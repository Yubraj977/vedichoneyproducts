export const getToken = () => {
    return localStorage
}
export const removeToken = () => {
    localStorage.removeItem('token');
}
export const setToken = (val) => {
    localStorage.setItem('token', val);
}