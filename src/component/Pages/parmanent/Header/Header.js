import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/eagle-logo-design-vector-28157853-removebg-preview.png'
import { callContext } from '../../../Contexting/Contexting';
import { FcBusinessman } from 'react-icons/fc';

const Header = () => {
    const { logOutClick, user} = useContext(callContext)
    const handlelogOutClick = () => {
        logOutClick()
            .then(() => { })
            .catch(error => console.log(error))
    }   
    return (
        <div className='bg-cyan-900 text-white capitalize w-full'>
            <div className="navbar flex justify-between container mx-auto">
                <div>
                    <img className='w-14 h-14 rounded-full ' src={logo} alt="" />
                    <Link to={'/'} className=" btn-ghost text-xl uppercase italic ">Titan</Link>
                </div>
                <div>
                    <div className="navbar-end">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-lg w-28 right-0">
                                <input type="checkbox" className="toggle toggle-sm ml-4 mt-2" />
                                <li><Link to={'/courses'}>courses</Link></li>
                                <li><Link >FAQ</Link></li>
                                <li><Link to={'/blog'}>blog</Link></li>
                                {
                                    user?.uid ? <>
                                        <li onClick={handlelogOutClick}><Link>sign out</Link></li>
                                        {user?.photoURl ? <img title={user?.displayName} className='w-7 h-7 mb-2 rounded-full ml-4' src={user?.photoURL} alt="" />:<FcBusinessman className='w-7 h-7 ml-4 mb-2'></FcBusinessman>}
                                    </> : <li><Link to={'/login'}>login</Link></li>
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 lg:flex items-center">
                            <li><Link to={'/courses'}>courses</Link></li>
                            <li><Link >FAQ</Link></li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                            {
                                user?.uid ? <><li onClick={handlelogOutClick}><Link>sign Out</Link></li><div className="tooltip tooltip-bottom" data-tip={user?.displayName}>{user?.photoURL ?<img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" />:<FcBusinessman className='w-10 h-10 rounded-full'></FcBusinessman>}</div> </> : <li><Link to={'/login'}>Login</Link></li>
                            }
                            <input type="checkbox" className="toggle ml-3" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;



