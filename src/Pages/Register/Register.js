import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'


const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <h1>SignUp</h1>
                <div style={{ width: '100%' }} className="hero-content">

                    <div className="card w-full max-w-md shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    {...register("email", { pattern: /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/i }, { required: true })}
                                    className="input input-bordered" type='email' />

                                <p className='text-red-500 mt-2 ml-2' >{errors.email?.type === 'required' && "Email is required"} </p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register("email", { pattern: /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/i }, { required: true })}
                                    className="input input-bordered" type='email' />

                                <p className='text-red-500 mt-2 ml-2' >{errors.email?.type === 'required' && "Email is required"} </p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type='password'
                                    {...register("password", { required: true, maxLength: 20 })}
                                    className="input input-bordered" />
                                <p className='text-red-500 mt-2 ml-2'>{errors.password?.type === 'required' && "Password Required"} </p>
                            </div>
                            <p className='text-red-500'></p>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                            <p className='mt-3'> Not a user
                                <Link to='/register' className="ml-3 text-blue-600 link link-hover">Sign Up</Link>
                            </p>
                            <div className=''>
                                <div className="divider mt-5">OR</div>
                                <button

                                    className="btn bg-neutral w-full my-5">Google</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>


        </div>
    );

};

export default Register;