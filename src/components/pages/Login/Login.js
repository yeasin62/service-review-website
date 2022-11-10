import React, { useContext, useState } from 'react';
import { AiOutlineGoogle } from "react-icons/ai";
import { authContext } from '../../../AuthProvider/AuthProvider';
import {GoogleAuthProvider} from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitles';

const Login = () => {
        const [error, setError] = useState('');
        const {providerLogin,userSignIn} = useContext(authContext);
        const googleProvider = new GoogleAuthProvider();
        useTitle('Login');

        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || '/';

        const handleGoogleSignIn = () => {
            providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, {replace:true});
            })
            .catch(error => console.error(error));
        }

        const handleSubmitSignIn = (event)=> {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;

            userSignIn(email,password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                //get jwt token
                fetch('http://localhost:5000/jwt',{
                    method: 'POST',
                    headers: {
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(currentUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    localStorage.setItem('token',data.token);
                    form.reset();
                    setError('');
                    navigate(from, {replace:true}); 
                })
                
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    
        }


    return (
        <section className="p-6 w-6/12 mx-auto mt-10">
            <h2 className='text-center text-3xl'>Login</h2>
            <form onSubmit={handleSubmitSignIn} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-1 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    
                    <div className="grid grid-cols-6 gap-4 col-span-full">
                        
                        <div className="col-span-full">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <input id="password" type="password" placeholder="password" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <button type="submit" className="px-4 py-2 border rounded-md dark:border-gray-100">Login</button>
                        
                    </div>
                    <p className='text-red-500'>{error}</p>
                </fieldset>
                        <p className='text-center m-0'>or</p>
                        <button onClick={handleGoogleSignIn} type="button" className="px-4 py-2 mt-0 border rounded-md dark:border-gray-100"><AiOutlineGoogle className='inline'></AiOutlineGoogle> Login with Google</button>
                        <p>Don't have an account? <Link to={'/signup'}>Signup Now</Link></p>
            </form>
        </section>
    );
};

export default Login;