//-------User authtoken--------//
export const SECRET_KEY = 'authuser'
export const isAuthenticated = () => (localStorage.getItem(SECRET_KEY) !== null)
export const getToken = () => localStorage.getItem(SECRET_KEY)
export const authenticateUser = user => localStorage.setItem(SECRET_KEY, user)
export const destroySession = () => localStorage.removeItem(SECRET_KEY)
export const getUserId = () => {
   const userToken= JSON.parse(localStorage.getItem(SECRET_KEY));
   return userToken.user._id
}
