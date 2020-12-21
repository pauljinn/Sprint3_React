import axios from 'axios';
import { GET_ERRORS,GET_PATIENTS} from './type';
export const createPatient=(patient,history)=>async dispatch=> {
    try {
        const res =await axios.post ("http://localhost:8080/api/patients",patient)
        alert("Patient saved with following details:\nPatient Identifier:  " + res["data"]["patientIdentifier"]+"\nName: " + res["data"]["patientName"] + "\nAge: " + res["data"]["patientAge"] + "\nPhone Number: " + res["data"]["phoneNumber"] + "\nAddress: " + res["data"]["patientAddress"]);
        history.push("/getPatient");
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}

export const getPatients=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8080/api/patients/all");
    dispatch({
        type:GET_PATIENTS,
        payload:res.data
    })
}