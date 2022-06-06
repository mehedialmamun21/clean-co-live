import React from 'react';
import googleIcon from '../assets/images/google.png';
const Login = () => {
    return (
        <div class="flex justify-center items-center h-screen bg-accent">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h1 className='text-center text-2xl font-semibold'>Login</h1>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" class="input input-bordered" />
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                    </div>
                    <div class="divider">OR</div>
                    <button className='btn btn-outline bg-gray-300 text-black border-none font-semibold'> <span className='mr-4'>Continue with Google</span> <img src={googleIcon} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default Login;