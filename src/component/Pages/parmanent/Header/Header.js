import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/eagle-logo-design-vector-28157853-removebg-preview.png'

const Header = () => {
    return (
        <div className='bg-cyan-900 text-white capitalize'>
            <div className="navbar flex justify-between container mx-auto">
                <div>
                    <img className='w-14 h-14 rounded-full ' src={logo} alt="" />
                    <Link to={'/'} className=" btn-ghost text-xl uppercase italic ">Titan</Link>
                </div>
                <div>
                    <div className="navbar-end mr-4">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to={'/courses'}>courses</Link></li>
                                <li><Link to={''}>FAQ</Link></li>
                                <li><Link to={''}>blog</Link></li>
                                <input type="checkbox" className="toggle toggle-sm ml-4" />
                                <li><Link to={'/login'}>login</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 lg:flex items-center">
                            <li><Link to={'/courses'}>courses</Link></li>
                            <li><Link to={''}>FAQ</Link></li>
                            <li><Link to={''}>Blog</Link></li>
                            <input type="checkbox" className="toggle" />
                            <li className='btn btn-warning rounded-md ml-2'><Link to={'/login'}>Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;