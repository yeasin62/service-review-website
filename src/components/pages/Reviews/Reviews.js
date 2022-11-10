import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitles';
import ReviewCard from '../../ReviewCard/ReviewCard';

const Reviews = () => {
    const {user} = useContext(authContext);
    const [reviews, setReviews] = useState([]);
    useTitle('My Reviews');

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setReviews(data));
    },[user?.email])

    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm("Do you want to delete this review?");
        if(proceed){
            fetch(`http://localhost:5000/review/${id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    toast('Deleted successfully');
                    const remaining = reviews.filter(review => review._id !== id);
                    setReviews(remaining);
                }
            })

        }
    }
    const handleReviewUpdate = (id, message) => {
        fetch(`http://localhost:5000/review/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({message:message})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className='md:w-4/5 mx-auto h-screen'>
            <h1 className='text-center text-4xl py-10'>My Reviews</h1>
            
                {
                    reviews.length > 0 ? 
                    <>
                    <div className='grid grid-cols-3 gap-4 mb-10 '>
                        {
                        reviews.map(review => <ReviewCard key={review._id} review={review} handleDelete={handleDelete}></ReviewCard>)
                        }
                    </div>
                    </>
                    : 
                    <h3 className="font-2xl text-center">You did not provide any review</h3>
                }
            
        </div>
    );
};

export default Reviews;