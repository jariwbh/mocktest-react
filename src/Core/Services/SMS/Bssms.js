import appConfig from '../../configuration/AppConfig'

class SmsService {
    static getSMS(data) {
        const body = JSON.stringify(data)
        const requestOptions = {
            method: 'POST',
            headers: appConfig.headers,
            body: body
        };
        return fetch(appConfig.baseUrl + 'public/sms', requestOptions)
            .then(response => response.json())
            .catch(error => {
                console.error('There was an error!', error);
            });
    }
}

export default SmsService;