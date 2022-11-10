import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitles';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const {loading}= useContext(authContext);
    useTitle('Services');
    
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    
    
    return (
        <div className='md:w-4/5 mx-auto'>
            <h1 className='text-center text-4xl py-10'>Services</h1>
            <div className='grid grid-cols-3 gap-4 mb-10'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;