import React from 'react';
import ema from '../../../images/ema.png';
import john from '../../../images/john.png';
import watson from '../../../images/watson.png';
import TestimonialDetails from './TestimonialDetails';
import './Testimonial.css';
import useFetch from '../../hooks/useFetch';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    address: "Chicago, IL",
    desc: "The online appointment system made scheduling my annual check-up so convenient. I was able to see all available time slots and choose one that worked perfectly with my busy schedule. The reminder notifications were helpful too!",
    image: ema,
  },
  {
    id: 2,
    name: "Robert Chen",
    address: "San Francisco, CA",
    desc: "As someone who manages appointments for my elderly father, this system has been a lifesaver. I can easily track his upcoming appointments, receive medication reminders, and communicate with his doctors. The interface is intuitive and user-friendly.",
    image : john,
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    address: "Miami, FL",
      desc: "I've been struggling with managing my family's healthcare appointments for years. This system keeps everything organized in one place. The ability to upload documents before appointments saves so much time during visits!",
    image : watson,
  },
];

// Usage example:
// In parent component:


const Testimonial = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const { data, loading, error } = useFetch(`${baseUrl}/auth/reviews`);
    return (
        <section className="container testimonial my-5 py-5" id="reviewsContaints">
            <div className="cointainer">
                <div className="section-header py-5 text-center">
                    <h5 className="brand-color text-uppercase">Testimonial</h5>
                    <h1>What Our Patients <br /> Say</h1>
                </div>
                <div className="card-deck ">
                    <div className="d-flex justify-content-center ">
                        <div className="row w-80 ">
                            {testimonials.map(testimonial => (
                            <TestimonialDetails key={testimonial.id} testimonial={testimonial} img = {testimonial.image} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;