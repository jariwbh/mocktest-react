//-------sms---------//
export const TOKEN_KEY = 'header'
export const headerset = data => localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
export const destroyheader = () => localStorage.removeItem(TOKEN_KEY)
export const getheader = () => {
    return localStorage.getItem(TOKEN_KEY);
}