import logo from '../assets/images/logo.png'
import { Search, User, Heart, ShoppingCart,LogIn } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';
export default function Navbar({setSearchItem}) {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    let [itemsName,setItemsName] = useState(null);
    const [user,setUser] = useState(null);
    const [favoriteItemsLength,setFavoriteItemsLength] = useState(0)
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
        async function getItems(){
            const {data,error} = await supabase
            .from('products')
            .select('name')
            if(error){
                console.log(error.message)
            }else{
                setItemsName(data)
            }
        }
        getItems()
        async function getFavoriteItemsLength(){
            const {data,error} = await supabase
            .from('products')
            .select('favorite')
            if(error){
                console.log(error.message)
            }else{
                data.map((item) => {
                    if(item.favorite === true){
                        setFavoriteItemsLength((prevLength) => prevLength + 1)                    
                    }
                })
            }
        }
        getFavoriteItemsLength()
    },[])

    // making into an array //
    itemsName = itemsName?.map((item) => item.name);





    function HandleSearchOnClick(){
        setSearchItem(inputValue)
        if(inputValue){
            navigate('/deals')
        }
        setInputValue('')
    }
    return (
        <header className="bg-white">
            <div className="container mx-auto px-4 py-4 flex items-center justify-around">
                <div className="mr-auto md:w-48 flex-shrink-0 flex flex-row items-center cursor-pointer">
                    <Link to={'/'} className='flex items-center gap-2'>
                        <img className="h-14 md:h-15" src={logo} alt="appLogo" />
                        <p><span className="font-semibold">Pizza</span> Hut</p>
                    </Link>
                </div>

                    <div className="max-w-xs xl:max-w-lg bg-gray-100 rounded-md hidden xl:flex items-center">
                        <select className="bg-transparent text-sm p-4 mr-4 cursor-pointer" name="" id="">
                            <option className='text-gray-500'>All Categories</option>
                            <option className='text-gray-500'>Veg Pizzas</option>
                            <option className='text-gray-500'>Non-Veg Pizzas</option>
                            <option className='text-gray-500'>Cheese Lovers</option>
                            <option className='text-gray-500'>Gourmet Pizzas</option>
                            <option className='text-gray-500'>Desserts Pizzas</option>
                        </select>
                        <div>
                            <input className=" bg-transparent text-sm p-4 w-full" type="text" placeholder="I'm searching for ..." onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                            <div className='absolute bg-white rounded-l-lg rounded-r-lg'>
                                { itemsName && itemsName
                                    .filter((item) => inputValue && item.toLowerCase().includes(inputValue.toLowerCase()))
                                    .slice(0, 10)
                                    .map((item, index) => (
                                        <p key={index} className="text-gray-500 p-4 cursor-pointer hover:bg-gray-100 relative rounded-l-lg rounded-r-lg" onClick={()=> setInputValue(item)}>
                                            {item}
                                        </p>
                                ))}
                            </div>
                        </div>
                        <Search className='p-2 text-gray-500 cursor-pointer' color='gray' size={40} onClick={()=>HandleSearchOnClick()}/>
                    </div>
                <nav className="contents">
                    <ul className="ml-4 xl:w-48 flex items-center justify-end">
                        <li className="ml-2 lg:ml-4 relative inline-block">
                            {user? <Link className="" to="/profile">
                                            <User className='p-2 text-gray-500 cursor-pointer' color='gray' size={40} />
                                         </Link>:
                                         <Link className="" to="/login">
                                            <LogIn className='p-2 text-gray-500 cursor-pointer' color='gray' size={40}/>
                                         </Link>}
                        </li>
                        <li className="ml-2 lg:ml-4 relative inline-block">
                            <Link className="" to="/favorate">
                                <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-full">{favoriteItemsLength}</div>
                                <Heart className='p-2 text-gray-500 cursor-pointer' color='gray' size={40} />
                            </Link>
                        </li>
                        <li className="ml-2 lg:ml-4 relative inline-block">
                            <Link className="" to="/cart">
                                <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-full">12</div>
                                <ShoppingCart className='p-2 text-gray-500 cursor-pointer' color='gray' size={40} />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <hr />
        </header>
    );
}