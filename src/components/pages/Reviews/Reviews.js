import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../../AuthProvider/AuthProvider';
import ReviewCard from '../../ReviewCard/ReviewCard';

const Reviews = () => {
    const {user} = useContext(authContext);
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data));
    },[user?.email])

    console.log(reviews);
    return (
        <div className='md:w-4/5 mx-auto'>
            <h1 className='text-center text-4xl py-10'>My Reviews</h1>
            <div className='grid grid-cols-3 gap-4 mb-10 '>
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;