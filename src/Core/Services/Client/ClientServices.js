import appConfig, { clientID, branches } from '../../configuration/AppConfig'

class DemoService {
    static getClientDetails() {
        const requestOptions = {
            method: 'GET',
            headers: appConfig.headers
        };
        //console.log(appConfig.baseUrl + branches + clientID)
        return fetch(appConfig.baseUrl + branches + clientID, requestOptions)
            .then(response => response.json())
            .catch(error => {
                //this.setState({ errorMessage: error });
                console.error('There was an error!', error);
            });
    }
}

export default DemoService;
