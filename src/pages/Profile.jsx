import { useState,useEffect } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";
export default function Profile() {
    const [user,setUser] = useState(null);
    const navigate = useNavigate()
    useEffect(()=>{
        async function checkSession(){
            const { data, error } = await supabase.auth.getUser()
            if(error){
                setUser(null)
            }else{
                setUser(data.user)
            }
        }
        checkSession();
    },[])

    async function HandleDeleteAccountOnClick(){
        const {error} = await supabase.auth.admin.deleteUser(user.id);
        if(error){
            alert("Error deleting account")
        }else{
            navigate("/")
        }
    }

    async function HandleLogoutOnCLick(){
        const {data,error} = await supabase.auth.signOut();
        if(error){
            console.log(error.message)
        }else{
            setUser(null)
            window.location.reload();
            navigate('/')
        }
    }
    return (
        <div className="h-[90vh] flex justify-center items-center">
            <div className="mx-auto p-6 pb-1 border bg-white rounded-md shadow-dashboard">
                <h1 className="font-bold text-2xl text-gray-700 mb-3">Account Details</h1>
                <p className="text-sm text-gray-500 mb-2">Name</p>
                <div className="bg-gray-100 px-4 py-2 rounded-md mb-2 w-96">
                    <p className="text-gray-800 text-md">{user?.user_metadata?.name}</p>
                </div>
                <p className="text-sm text-gray-500 mb-2">Email</p>
                <div className="bg-gray-100 px-4 py-2 rounded-md mb-2 w-96">
                    <p className="text-gray-800 text-md">{user?.email}</p>
                </div>
                <div className="mt-10 flex justify-between items-center mb-10">
                    <button className="bg-red-600 px-4 py-2 rounded-md text-white" onClick={HandleDeleteAccountOnClick}>Delete Account</button>
                    <button className="bg-black px-4 py-2 rounded-md text-white" onClick={HandleLogoutOnCLick}>Log Out</button>
                </div>
            </div>
        </div>
    );
}