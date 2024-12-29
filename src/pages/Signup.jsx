import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import { Link } from "react-router-dom";
export default function SignUp() {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    async function HandleFormSubmit(e){
        e.preventDefault();

        if(password === confirmPassword){
            const {data,error} = await supabase.auth.signUp({
                email,
                password,
                options:{
                    data:{
                        name : name
                    }
                }
            })
            if(error){
                console.log(error.message)
                alert(error.message)
    
            }else{
                console.log(data)
                navigate('/login')
            }
        }else{
            setError('Passwords do not match')
        }
    }
    return (
        <div className="min-h-screen">
            <div className="h-[95vh] flex justify-center items-center">
                <form className="w-full">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    Create an account
                                </p>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Name
                                    </label>
                                    <input placeholder="Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="name" type="text" onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Your username
                                    </label>
                                    <input placeholder="Username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text" onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Password
                                    </label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Password" id="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Confirm password
                                    </label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Confirm Password" id="confirmPassword" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input className="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-primary-300 bg-gray-700 focus:ring-primary-600 ring-offset-gray-800" type="checkbox" aria-describedby="terms" id="terms" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className="font-light text-gray-500">
                                            I accept the
                                            <a href="#" className="font-medium text-primary-600 hover:underline text-primary-500">
                                                Terms and Conditions
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                {error && <p className="text-sm text-center text-red-500">{error}</p>}
                                <button className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit" onClick={HandleFormSubmit}>
                                    Create an account
                                </button>
                                <hr />
                                <div className="text-center">
                                    <p className="text-sm text-gray-500">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}