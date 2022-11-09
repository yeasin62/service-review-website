import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {title,price,fimage,simage,details,_id} = service;
    return (
        <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-2">
                    <div className="-space-y-1">
                        <h2 className="text-sm font-semibold leading-none">{title}</h2>
                        <span className="inline-block text-xs leading-none dark:text-gray-400">Rating: 4.9</span>
                    </div>
                </div>
            </div>
            <img src={simage} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
            <div className="p-3">
                <div className="flex items-center justify-between">
                    <p>Price: ${price}</p>
                </div>
                <div className="space-y-3">
                    <p className="text-sm mb-3">
                        {details.slice(0,100)}
                    </p>
                    <Link to={`/service/${_id}`}><button type="button" className="px-4 py-2 border rounded dark:border-gray-100 dark:text-gray-100">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;