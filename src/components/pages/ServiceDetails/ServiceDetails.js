import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { authContext } from '../../../AuthProvider/AuthProvider';
import ReviewCard from '../../ReviewCard/ReviewCard';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const {title,price,fimage,details,_id} = serviceDetails;
    const {user} = useContext(authContext);
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/myreviews?serviceId=${_id}`)
        .then(res => res.json())
        .then(data => setReviews(data));
    },[_id])

    const submitReview = (event) => {
        event.preventDefault();
        const email = user?.email;
        const id = _id;
        const comment = event.target.review.value;
        const photo = user?.photoURL;
        const userName = user?.displayName;

        const review = {
            name: userName,
            email: email,
            serviceId: id,
            serviceName: title,
            comment: comment,
            photo: photo
        }
        
        fetch(`http://localhost:5000/reviews`,{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                
                toast('Review added successfully');
                event.target.review.value = "";
            }
        })
        .catch(error => console.error(error));
        
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

            <section className="review_section">
                <h1 className='text-center text-4xl py-10'>Reviews</h1>
                <div className='grid grid-cols-3 gap-4 mb-10 '>
                    {
                        reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                    }
                </div>
            </section>


            {
                user?.uid ?
                <>
                <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                    <form onSubmit={submitReview} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                        <fieldset className="grid grid-cols-1 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <h3 className='text-center text-4xl py-10'>Share your experience</h3>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                
                                <div className="col-span-full">
                                    <label htmlFor="bio" className="text-sm">Write your experience</label>
                                    <textarea id="review" placeholder="" name='review' className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                                </div>
                                <div className="col-span-full">
                                    <div className="flex items-center space-x-2">
                                        <button type="submit" className="px-4 py-2 border rounded-md dark:border-gray-100 bg-slate-700 text-white">Submit Review</button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </section>
                </> :
                <>
                    <p className='text-center mt-20'>Please login to submit your review</p>
                    
                    <Link to={'/login'} className='text-center block px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800 mb-20'><button type="button" className='bg-slate-700 text-white px-10 py-3'>Login</button></Link>
                </>
            }

            
            
            
        </div>
    );
};

export default ServiceDetails;