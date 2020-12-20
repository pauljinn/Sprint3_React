import React from 'react'
import AddPatientButton from './patients/AddPatientButton';

class PatientItemComponent extends React.Component {
    render() {
        return (
            
             <div className="container">
             <div className="card card-body bg-light mb-3">
                 <div className="row">
                     <div className="col-2">
                         <span className="mx-auto"><b>Add Patient Details</b></span>
                     </div>
                     <div className="col-md-8 d-none d-lg-block">
                         <p>Use this service to add the details about the patient and saved it permanently inside the repository</p>
                     </div>
                     <div className="col-md-2">
                        <AddPatientButton />
                     </div>
                 </div>
             </div>
         </div>
        
        )
    }
}

export default PatientItemComponent;