import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { callContext } from '../../Contexting/Contexting';

const Login = () => {
    const { googleSignIn, githubSignIn, Loginhandleclick } = useContext(callContext)
    const [errorShow , setErrorShow]=useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleOnGoogleClick = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user
                console.log(user)  
                navigate(from ,{replace: true})  
            })
            .catch((error) => console.log(error))
    }
    const handleOnGithubClick = () => {
        githubSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate(from ,{replace: true})
            })
            .catch((error) => console.log(error))
    }
    const handleOnSigninEmailOrPass = (event) => {
        event.preventDefault()   
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        Loginhandleclick(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate(from ,{replace: true})
                form.reset(" ")
            })
            .catch((error) => {
                console.log(error)
                const err = error.message.split('/')
                const message =err[1].split(')')
                const show = message[0]
                setErrorShow(show)
            })
    }
    return (
        <div className='bg-blue-500 text-white h-full pb-10 md:px-0 px-3'>
            <div className=" lg:translate-y-16 lg:h-screen h-full container mx-auto w-full">
                <div className="flex justify-evenly items-center flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold md:mt-0 mt-10">Login now!</h1>
                        <div className='text-center mt-8'>
                            <button onClick={handleOnGoogleClick} className='flex justify-center items-center btn btn-outline btn-warning w-full text-white '><FcGoogle className='text-3xl mr-1'></FcGoogle><p>google</p></button>
                            <br />
                            <button onClick={handleOnGithubClick} className='btn btn-primary flex justify-center items-center w-full'><BsGithub className='text-3xl mr-1'></BsGithub><p>github</p></button>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mt-10" data-theme='dark'>
                        <form onSubmit={handleOnSigninEmailOrPass} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <sub>if you don't have an existing account <Link to={'/     register'} className='text-info'>please register</Link></sub>
                                </label>
                            </div>
                            <p className='text-red-700'>{errorShow || ''}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;