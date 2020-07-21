import appConfig from '../../configuration/AppConfig'

class DemoService {
    static getClientDetails() {
        const requestOptions = {
            method: 'GET',
            headers: appConfig.headers
        };
        return fetch(appConfig.baseUrl + 'branches/5ef44df26bf23edb7fd9a8e6', requestOptions)
            .then(response => response.json())
            .catch(error => {
                //this.setState({ errorMessage: error });
                console.error('There was an error!', error);
            });
    }
}

export default DemoService;
