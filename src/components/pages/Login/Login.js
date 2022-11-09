import React from 'react';
import { AiOutlineGoogle } from "react-icons/ai";

const Login = () => {
    return (
        <section className="p-6 w-6/12 mx-auto mt-10">
            <h2 className='text-center text-3xl'>Login</h2>
            <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-1 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    
                    <div className="grid grid-cols-6 gap-4 col-span-full">
                        
                        <div className="col-span-full">
                            <label for="email" className="text-sm">Email</label>
                            <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label for="password" className="text-sm">Password</label>
                            <input id="password" type="password" placeholder="password" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">Login</button>
                        
                    </div>
                </fieldset>
                        <p className='text-center m-0'>or</p>
                        <button type="button" className="px-4 py-2 mt-0 border rounded-md dark:border-gray-100"><AiOutlineGoogle className='inline'></AiOutlineGoogle> Login with Google</button>
            </form>
        </section>
    );
};

export default Login;