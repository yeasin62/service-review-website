import React from 'react';

const Edit = () => {
    return (
        <div className='md:w-4/5 mx-auto'>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                    <form className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
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
        </div>
    );
};

export default Edit;