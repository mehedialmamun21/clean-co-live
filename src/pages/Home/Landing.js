import React from 'react';
import bucketGirl from '../../assets/images/bucketgirl.png'
const Landing = () => {
    return (
        <>
            <div class="hero h-screen lg:h-[60vh] bg-accent relative z-0 mt-16">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='lg:mr-10'>
                        <p className='text-xl' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Best Quality</p>
                        <h1 class="text-4xl font-bold" data-aos="fade-up" data-aos-duration="900" data-aos-delay="500">Professional Cleaning Service</h1>
                        <p class="py-6 max-w-lg" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary" data-aos="zoom-in" data-aos-delay="1300">Get Started</button>
                    </div>
                    <div className='h-[60vh] shrink-0' data-aos="zoom-in-up" data-aos-duration="1300" data-aos-delay="200">
                        <img src={bucketGirl} class="h-full" alt='' />
                    </div>
                </div>
            </div>

            <div className='shadow-lg p-10 w-5/6 rounded-2xl mx-auto relative z-20 bg-base-200 mt-[-50px]'>
                <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'>Request a quote</button>
            </div>

        </>
    );
};

export default Landing;