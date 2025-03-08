import { Link } from 'react-router-dom';
import React from 'react';
import doctor from '../../../images/doctor.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="appointment my-5">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5 d-none d-md-block">
                    <img src={doctor} alt="Doctor" className="img-fluid" />
                </div>
                <div className="col-md-7 text-white py-5">
                    <h5 className="brand-color text-uppercase">AppointMent</h5>
                    <h1 className="">Make An AppointMent <br/> today </h1>
                    <p> Schedule your visit with our experienced healthcare professionals. 
                            Our online booking system makes it easy to find a time that works for you, 
                            with flexible scheduling options available for both urgent care and routine check-ups.</p>
                    <Link to="/appointment">
                            <button className="btn btn-primary">Book Appointment</button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Appointment;