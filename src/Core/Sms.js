//-------sms---------//
export const SMS_TOKEN_KEY = 'token'
export const smstokenset = sms => localStorage.setItem(SMS_TOKEN_KEY, sms)
export const destroySMS = () => localStorage.removeItem(SMS_TOKEN_KEY)
export const getsms = () => {
    return localStorage.getItem(SMS_TOKEN_KEY);
}