//-------User authtoken--------//
export const SECRET_KEY = 'authuser'
export const isAuthenticated = () => (localStorage.getItem(SECRET_KEY) !== null)
export const authenticateUser = user => localStorage.setItem(SECRET_KEY, user)
export const destroySession = () => localStorage.removeItem(SECRET_KEY)
export const getUser = () => {
   return JSON.parse(localStorage.getItem(SECRET_KEY));
}
export const getToken = () => {
   const user = getUser() //JSON.parse(localStorage.getItem(SECRET_KEY));
   return user.token
}
export const getUserId = () => {
   const user = getUser() //JSON.parse(localStorage.getItem(SECRET_KEY));
   return user.user._id
}

//-------sms---------//
export const SMS_TOKEN_KEY = 'token'
export const smstokenset = sms => localStorage.setItem(SMS_TOKEN_KEY, sms)
export const destroySMS = () => localStorage.removeItem(SMS_TOKEN_KEY)
export const getsms = () => {
   return localStorage.getItem(SMS_TOKEN_KEY);
}