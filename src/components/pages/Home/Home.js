import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div className=''>
            <section className="bg-blue-500 bg-[url('/public/assets/home-applicances.jpg')]">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl text-white">Gazi 
                            <span className="dark:text-violet-400"> Home</span> Servicing
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 text-white">We Repair All Kinds of Home Appliances
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to={'/services'}  className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 text-white">All Services</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>

            <div className='md:w-4/5 mx-auto'>
            <h1 className='text-center text-4xl py-10'>Services</h1>
            <div className='grid grid-cols-3 gap-4 mb-10'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>

        <section className="dark:bg-gray-800 dark:text-gray-100 bg-slate-200">
            <div className="container flex flex-col mx-auto lg:flex-row py-20">
                <div className="flex flex-col w-full p-6 md:p-8 lg:p-12 text-center">
                    <h2 className="text-3xl font-semibold leading-none">Modern solutions to all kinds of problems</h2>
                    <p className="mt-4 mb-8 text-sm">We have made easier your life. Just a single call, we will reach your home in an hour</p>
                </div>
            </div>
        </section>           



        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    <div className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
                </div>
                <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
            </div>
            <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label for="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
                    <div data-lastpass-icon-root="true" ></div>
                </div>
                <div>
                    <label for="email" className="text-sm">Email</label>
                    <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" />
                </div>
                <div>
                    <label for="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
            </form>
        </div>
        </div>
    );
};

export default Home;