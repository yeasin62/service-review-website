import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitles';

const Signup = () => {
    const [error,setError] = useState('');
    const {createUser, updateUserProfile} = useContext(authContext);
    useTitle('Signup');
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photoURL,email,password);

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name,photoURL)
            
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        });
        const handleUpdateUserProfile = (name,photoURL)=> {
            const profile = {
                name: name,
                photoURL: photoURL
            }
            updateUserProfile(profile)
            .then(()=>{})
            .catch(error=>console.error(error));
        }
    }
    return (
        <section className="p-6 w-6/12 mx-auto mt-10">
            <h2 className='text-center text-3xl'>Signup</h2>
            <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-1 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    
                    <div className="grid grid-cols-6 gap-4 col-span-full">
                        
                        <div className="col-span-full">
                            <label for="name" className="text-sm">Name</label>
                            <input id="name" name="name" type="text" placeholder="Your Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
                        </div>

                        <div className="col-span-full">
                            <label for="photo" className="text-sm">Upload your photo</label>
                            <input id="photoURL" name="photoURL" type="url"  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
                        </div>
                        
                        <div className="col-span-full">
                            <label for="email" className="text-sm">Email</label>
                            <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
                        </div>
                        <div className="col-span-full">
                            <label for="password" className="text-sm">Password</label>
                            <input id="password" type="password" placeholder="password" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
                        </div>
                        <button type="submit" className="px-4 py-2 border rounded-md dark:border-gray-100">Signup</button>
                        <p className='text-red-500'>{error}</p>
                        
                    </div>
                </fieldset>
                <p>Already have an account? <Link to={'/login'}>Login Now</Link></p>
            </form>
        </section>
    );
};

export default Signup;