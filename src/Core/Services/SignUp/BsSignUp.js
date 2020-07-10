import axios from '../../../axiosInst'

class SignUpService {

    static signUp(data) {
        const body = data
      
        axios.post('/members', body)
        .then(response => {
            console.log(response);
        });
    }

}
export default SignUpService;