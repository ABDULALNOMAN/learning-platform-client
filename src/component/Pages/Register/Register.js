import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { callContext } from '../../Contexting/Contexting';

const Register = () => {
    const { createUser,userNameAndUrl  } = useContext(callContext)
    const navigate = useNavigate()
    const handleSubmitEmailOrPassword = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.text.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                handleNameAndUrl(name, image)
                navigate('/')
            })
            .catch((error) => console.log(error))
    }
    const handleNameAndUrl = (name, image) => {
        const identity = {
            displayName: name,
            photoURL: image,   
        }
        userNameAndUrl (identity)
            .then((result) => { })
            .catch((error) => console.log(error))
    }
    return (
        <div className=''>
            <div className=" container mx-auto max-w-full min-h-screen pt-3 capitalize">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 max-w-sm bg-base-200 shadow-2xl w-11/12 border">
                        <form onSubmit={handleSubmitEmailOrPassword} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='text' placeholder="enter your name" className="input input-bordered"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">image</span>
                                </label>
                                <input type="text" name='image' placeholder="image" className="input input-bordered"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;  