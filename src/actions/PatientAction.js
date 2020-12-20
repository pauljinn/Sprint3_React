import axios from 'axios';
import { GET_ERRORS } from './type';
export const createPatient=(patient,history)=>async dispatch=> {
    try {
        const res =await axios.post ("http://localhost:8080/api/patients",patient)
        history.push("/dashboard");
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}