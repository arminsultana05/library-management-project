import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../../Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const LogIn = () => {
    const navigate = useNavigate();
    const location = useLocation()
    let from =location.state?.from?.pathname || "/";

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = (data,e) => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully LogIn',
            showConfirmButton: false,
            timer: 1500
          })
          
          navigate('/dashboard')
    }
    if(loading|| gLoading){
        return <Loading></Loading>

    }
    let signInError;
    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    if (gUser || user) {
        navigate (from,{replace: true});
       
      
    }


    return (
        <div className='flex justify-center items-center rounder-xl  h-screen'>
            <div class=" w-96 bg-base-100 shadow-xl ">
                <div class="card-body ">
                    <h2 class="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">

                                <span class="label-text-alt">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"

                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>

                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">

                                <span class="label-text-alt">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Your password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"

                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters is longer'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>

                        </div>


                        <input className='btn w-full text-white' type="submit" value='Login ' />
                    </form>
                    <p>New to website?<Link to ='/register' className='text-orange-500'> Create a new account</Link></p>
                    <div className="divider ">OR</div>
                    <button
                        class="btn btn-outline" onClick={() => signInWithGoogle()}>
                        Continue with google</button>

                </div>
            </div>

        </div>
    );
};

export default LogIn;