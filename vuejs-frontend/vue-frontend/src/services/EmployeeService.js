import axios from 'axios'

const EPLOYEE_API_BASE_URL = 'http://localhost:8080/api/employees'

class EmployeeService{
    getEmployees(){
        return axios.get(EPLOYEE_API_BASE_URL);
    }
}

export default new EmployeeService()