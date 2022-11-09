import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { authContext } from '../../../AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const {title,price,fimage,details,service_id} = serviceDetails;
    const {user} = useContext(authContext);

    const submitReview = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const serviceName = event.target.serviceName.value;
        const serviceId = event.target.serviceId.value;
        const review = event.target.review.value;

        console.log(email,serviceName,serviceId,review);
    }

    return (
        <div className='md:w-4/5 mx-auto'>
            <h1 className='text-center text-4xl py-10'>{title}</h1>
             <div className=''>
                 <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <img src={fimage} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                    <div className="flex items-center justify-between p-3">
                        <div className="flex items-center space-x-2">
                            <div className="-space-y-1">
                                <p>Price: ${price} | <span>Rating: 4.9</span></p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="flex items-center justify-between">
                            
                        </div>
                        <div className="space-y-3">
                            <p className="text-sm mb-3">
                                {details}
                            </p>
                            <button type="button" className="px-4 py-2 border rounded dark:border-gray-100 dark:text-gray-100">Details</button>
                        </div>
                    </div>
                </div>
            </div>
            {
                user?.uid ?
                <>
                
                </> :
                <>
                    <p className='text-center mt-10'>Please login to submit your review</p>
                    
                    <Link to={'/login'} className='text-center block px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800'><button type="button">Login</button></Link>
                </>
            }

            
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <form onSubmit={submitReview} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-1 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <h3 className='text-center text-4xl py-10'>Share your experience</h3>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" type="email" name="email" value={user?.email} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" disabled/>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="serviceName" className="text-sm">Service</label>
                                <input id="serviceName" type="text" name='serviceName' placeholder={title} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" disabled/>
                                <input type="hidden" name="serviceId" id="serviceId" value={service_id}/>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Write your experience</label>
                                <textarea id="review" placeholder="" name='review' className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                            </div>
                            <div className="col-span-full">
                                <div className="flex items-center space-x-2">
                                    <button type="submit" className="px-4 py-2 border rounded-md dark:border-gray-100">Submit Review</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default ServiceDetails;