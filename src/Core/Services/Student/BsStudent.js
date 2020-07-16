import axios from '../../../axiosInst'
import appConfig from '../../configuration/AppConfig'

class StudentService {
    static UpdateStudentProfile(id, data) {
        const body = data
        console.log('Student Service' + id, body);
        axios.put('/members/' + id, body)
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
    }

    static getByIdStudent(id) {
        const requestOptions = {
            method: 'GET',
            headers: appConfig.headers
        };
        return fetch(appConfig.baseUrl + 'members/' + id, requestOptions)
            .then(response => response.json())
            .catch(error => {
                console.error('There was an error!', error);
            });
    }
}
export default StudentService;