import pizzaCover from '../assets/images/pizzaCoverPage.jpg'
import pizzaDeals from '../assets/images/deals.jpg'
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home({setSearchItem}){
    const [isLoading,setIsLoading] = useState(false);

    if(isLoading){
        return <Loading />
    }else{
        return (
            <>
                <img src={pizzaCover} alt="pizzaCoverPage"/>
                <p className='mx-10 py-20 font-bold text-2xl text-center text-slate-700'>Our Most Popular Deals</p>
                <div className='flex justify-center items-center mb-10'>
                    <div className='grid grid-cols-2 gap-4'>
                        <img src={pizzaDeals} alt="pizzaCoverPage" className='w-96 m-4 hover:scale-105 ease-in-out duration-500'/>
                        <img src={pizzaDeals} alt="pizzaCoverPage" className='w-96 m-4 hover:scale-105 ease-in-out duration-500'/>
                        <img src={pizzaDeals} alt="pizzaCoverPage" className='w-96 m-4 hover:scale-105 ease-in-out duration-500'/>
                        <img src={pizzaDeals} alt="pizzaCoverPage" className='w-96 m-4 hover:scale-105 ease-in-out duration-500'/>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Link
                    className="group relative inline-flex items-center overflow-hidden rounded bg-red-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500  mb-40 "
                    to="/deals"
                    >
                    <span className="absolute -end-full transition-all group-hover:end-4">
                        <svg
                        className="size-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>
                    <span className="text-sm font-medium transition-all group-hover:me-4" onClick={()=>setSearchItem(null)}> View All Deals </span>
                    </Link>
                </div>
            </>
            
        );
    }
    
}