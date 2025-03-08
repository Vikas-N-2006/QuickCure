import React from 'react';
import ema from '../../../images/ema.png';
import john from '../../../images/john.png';
import watson from '../../../images/watson.png';
import BlogDetail from './BlogDetail';
import './Blog.css';

const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: "Many patients only visit the dentist when they're in pain, but regular check-ups can prevent most dental emergencies. This post explains why you should see your dentist at least once a year, even if your teeth feel fine.",
        author: 'Dr. Cudi',
        authorImg: ema,
        date: '23 April 2019'
    },
    {
        title: "The Complete Guide to Preventive Health Screenings by Age",
        description: "Preventive screenings can detect health issues before symptoms appear. This comprehensive guide breaks down which screenings you should request at different stages of life, from your 20s through your 70s and beyond.",
        author: 'Dr. Sinthia',
        authorImg: watson,
        date: '23 April 2019'
    },
    {
        title: "Vision Changes: When to See an Ophthalmologist vs. Optometrist",
        description: "Many people ignore subtle changes in their vision until significant problems develop. Learn about the warning signs that warrant immediate attention and why adults should have comprehensive eye exams every 1-2 years.",
        author: 'Dr. Cudi',
        authorImg: john,
        date: '23 April 2019'
    },
]



const Blog = () => {
    return (
        <section className="blogs my-5" id="BlogContaint">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="brand-color text-uppercase">Our Blogs</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck">
                    <div className="mt-5 d-flex justify-content-center">
                        <div className="row w-80">
                            {
                                blogData.map(blog => <BlogDetail key={blog.title} blog={blog}></BlogDetail>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;