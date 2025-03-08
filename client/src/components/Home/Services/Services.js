import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import teath from '../../../images/teath.png';
import ServiceDetail from '../../../components/Home/ServiceDetail/ServiceDetail';
import './Services.css';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: flouride,
        desc: "A preventive dental procedure that strengthens enamel, helping to prevent tooth decay and cavities by applying fluoride to the teeth.",
    },
    {
        name: 'Cavity Filling',
        img: cavity,
        desc: "A restorative treatment where decayed tooth material is removed and replaced with a filling to restore the tooth's structure and function.",
    },
    {
        name: 'Teeth Whitening',
        img: teath,
        desc: "A cosmetic procedure that removes stains and discoloration from the teeth, brightening smiles with professional or at-home treatments.",
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5" id="serviceContaint">
            <div className="text-center">
                <h5 className="brand-color">OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="w-75 row">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;