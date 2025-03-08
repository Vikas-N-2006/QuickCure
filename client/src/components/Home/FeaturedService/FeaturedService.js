import React from 'react';
import { useNavigate } from 'react-router-dom';
import baby from '../../../images/doc/doctor chair 2.jpg';


const FeaturedService = () => {
    const navigate = useNavigate();
    return (
        <div className="feature-service pb-0 pb-md-5 pt-md-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-5 col-sm-6 col-12">
                        <img src={baby} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-7 col-sm-6 col-12 align-self-center">
                        <h1>Exceptional Dental Care, on your Term</h1>
                        <p className="text-primary my-5">At Dental Care Partners, we believe quality dental health should fit your life, not the other way around. Our modern approach combines advanced dental technology with flexible scheduling options to ensure your oral health never takes a backseat to your busy lifestyle.
                            We offer comprehensive dental services from routine check-ups to specialized treatments, all designed around your comfort and convenience. Our team of experienced dental professionals is committed to providing personalized care in a welcoming environment.
                            With our online appointment system, managing your dental health has never been easier. Schedule visits, receive reminders, access your dental records, and communicate with our team—all from your smartphone or computer.
                            Experience dentistry that respects your time while never compromising on quality. Your smile deserves nothing less.</p>
                        <button className="btn btn-primary" onClick={() => navigate('/appointment')}>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;