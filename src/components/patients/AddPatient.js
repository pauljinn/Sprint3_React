import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPatient } from '../../actions/PatientAction';
class AddPatient extends Component {

    constructor(props){
        super(props);
        this.state={
            patientName:"",
            patientIdentifier:"",
            patientAge:"",
            phoneNumber:"",
            patientAddress:""
        }
        //this.onChange=this.onChange.bind(this);
    }

    onChange=(event)=>{
       this.setState(
           {[event.target.name]:event.target.value}
       );
    }

    onSubmit=(event)=>{
        event.preventDefault();
        const newPatient = {
            patientName:this.state.patientName,
            patientIdentifier:this.state.patientIdentifier,
            patientAge:this.state.patientAge,
            phoneNumber:this.state.phoneNumber,
            patientAddress:this.state.patientAddress
        }

        this.props.createPatient(newPatient,this.props.history);

    }
    render() {
        return (
            <div className="patient">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create Patient form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Patient Name" 
                                    name="patientName" 
                                    onChange={this.onChange}
                                    value={this.state.patientName}
                                   />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Unique Patient ID" 
                                    name="patientIdentifier" 
                                    onChange={this.onChange}
                                    value={this.state.patientIdentifier}
                                    />
                            </div>
                           
                            <div className="form-group">
                                <input 
                                    type="text"
                                    pattern="[0-9]{2}"
                                    className="form-control form-control-lg" 
                                    placeholder="Patient Age" 
                                    name="patientAge" 
                                    onChange={this.onChange}
                                    value={this.state.patientAge}
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    pattern="[6-9][0-9]{9}"
                                    className="form-control form-control-lg" 
                                    name="phoneNumber" 
                                    placeholder="Phone Number"
                                    onChange={this.onChange}
                                    value={this.state.phoneNumber}
                                    />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    type="text"
                                    placeholder="Patient Address" 
                                    className="form-control form-control-lg" 
                                    onChange={this.onChange}
                                    name="patientAddress" value={this.state.patientAddress}
                                    ></textarea>
                            </div>
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

AddPatient.propTypes = {
    createPatient:PropTypes.func.isRequired
}

export default connect(null,{createPatient})(AddPatient);