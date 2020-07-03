import appConfig from '../../configuration/AppConfig'

class MockTestService {
    static getAllMockTest(data) {
        const body = JSON.stringify(data)
        const requestOptions = {
            method: 'POST',
            headers: appConfig.headers,
            body: body
        };
        return fetch(appConfig.baseUrl + 'exams/filter', requestOptions)
            .then(response => response.json())
            .catch(error => {
                //this.setState({ errorMessage: error });
                console.error('There was an error!', error);
            });
    }
}
export default MockTestService;