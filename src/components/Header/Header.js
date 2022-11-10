import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const {user, logout} = useContext(authContext);
    const handleLogout=()=>{
        logout()
        .then(()=>{})
        .catch(error => console.error(error));
        console.log(user);
      }
     
    return (
        <header className="p-4 bg-slate-700">
            <div className="container flex justify-between h-16 mx-auto">
                <Link to={'/'} aria-label="Back to homepage" className="flex items-center p-2 text-white text-xl">
                    GAZI HOME SERVICING
                </Link>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <Link to={'/'} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white">Home</Link>
                    </li>
                    <li className="flex">
                        <Link to={'/services'} className="flex items-center px-4 -mb-1 dark:border-transparent text-white">Services</Link>
                    </li>
                    <li className="flex">
                        <Link to={'/reviews'} className="flex items-center px-4 -mb-1 dark:border-transparent text-white">My Reviews</Link>
                    </li>
                    <li className="flex">
                        <Link to={'/faq'} className="flex items-center px-4 -mb-1 dark:border-transparent text-white">FAQ</Link>
                    </li>
                    <li className="flex">
                        <Link to={'/blog'} className="flex items-center px-4 -mb-1 dark:border-transparent text-white">Blog</Link>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {
                        !user?.uid ? 
                        <>
                            <Link to={'/login'}><button className="self-center px-2 py-3 rounded text-white">Sign in</button></Link>
                            <Link to={'/signup'}><button className="self-center px-2 py-3 font-semibold rounded text-white">Sign up</button> </Link>
                        </> :
                             <button onClick={handleLogout} className="self-center px-8 py-3 font-semibold rounded text-white">Logout</button>
                    }
                    
                    
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;