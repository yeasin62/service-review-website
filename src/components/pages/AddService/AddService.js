import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitles';

const AddService = () => {
    useTitle('Add Services');
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const simage = form.simage.value;
        const fimage = form.fimage.value;
        const details = form.details.value;

        console.log(title,price,simage,fimage,details);

        const addService = {
            title: title,
            price: price,
            simage: simage,
            fimage: fimage,
            details: details
        }
        fetch("http://localhost:5000/add-service",{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                toast("Service added successfully");
                form.reset();
            }
        })
    }
    return (
        <section className="p-6 w-6/12 mx-auto mt-10">
            <h2 className='text-center text-3xl'>Add New Service</h2>
            <form onSubmit={handleAddService} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-1 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="grid grid-cols-6 gap-4 col-span-full">
                        <div className="col-span-full">
                            <label for="title" className="text-sm">Title</label>
                            <input id="title" name="title" type="text" placeholder="Service Title" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
                        </div>

                        <div className="col-span-full">
                            <label for="price" className="text-sm">Price</label>
                            <input id="price" name="price" type="number"  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
                        </div>
                        
                        <div className="col-span-full">
                            <label for="simage" className="text-sm">Thumbnail Image URL</label>
                            <input id="simage" type="url" placeholder="Upload thumbnail" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
                        </div>
                        <div className="col-span-full">
                            <label for="fimage" className="text-sm">Large Image</label>
                            <input id="fimage" type="url" placeholder="Large image uload" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
                        </div>
                        <div className="col-span-full">
                            <label for="details" className="text-sm">Service Details</label>
                            <textarea id="details" type="textarea" placeholder="Service details" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
                        </div>
                        <button type="submit" className="px-4 py-2 border rounded-md dark:border-gray-100">Add Service</button>
                        
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddService;