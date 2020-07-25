import axios from '../../../axiosInst'
import appConfig from '../../configuration/AppConfig'

class PasswordService {
    static ResetPassword(data) {
        const body = data
        axios.post('/auth/member/resetpassword', body)
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
    }

    static getUserIdForgetPassword(data) {
        const body = JSON.stringify(data)
        //console.log(body)
        const requestOptions = {
            method: 'POST',
            headers: appConfig.headers,
            body: body
        };
        return fetch(appConfig.baseUrl + 'members/filter', requestOptions)
            .then(response => response.json())
            .catch(error => {
                //this.setState({ errorMessage: error });
                console.error('There was an error!', error);
            });
    }
}

export default PasswordService;