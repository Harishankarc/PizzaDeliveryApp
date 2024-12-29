import { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
export default function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    async function HandleFormOnClick(e){
        e.preventDefault();
        const {data,error} = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if(error){
            console.log(error.message)
            if(error.message === 'Invalid login credentials'){
                alert('Invalid login credentials')
                setEmail('')
                setPassword('')
            }else{
                navigate('/confirmEmail')
            }
        }else{
            navigate('/')
        }
    }
    return (
        <div className="min-h-screen">
            <div className="h-[80vh] flex justify-center items-center">
                <form className="w-full">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    Log in to your account
                                </p><div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Your username
                                    </label>
                                    <input placeholder="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text" onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Password
                                    </label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="password" id="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                
                                <button className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit" onClick={HandleFormOnClick}>
                                    Log in
                                </button>
                                <hr />
                                <div className="text-center">
                                    <p className="text-sm text-gray-500">Don't have an account? <Link to="/signup" className="text-blue-600">Sign Up</Link></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}