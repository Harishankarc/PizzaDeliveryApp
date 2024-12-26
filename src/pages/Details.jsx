import { Link, useParams } from "react-router-dom";
import pizzaCategories from "../data/pizza";
import itemPic from '../assets/images/item.jpeg'
import backgroundImage from '../assets/images/background.jpg'
import Loading from "../components/Loading";
import { useEffect,useState } from "react";
export default function Details({setSearchItem}){
    const {id} = useParams();
    const [item,setItem] = useState(null);
    const [isFavorate,setIsFavorate] = useState(false);
    useEffect(()=>{
        let allItems = pizzaCategories.flatMap(category => 
            category.items.map(item => ({
                ...item
            }))
        );
        const selectedItem = allItems.find(item => item.id === parseInt(id));
        setItem(selectedItem);
        window.scrollTo(0,0)
    },[id])

    function HandleFavorateOnCLick(){
        item.favorate = !item.favorate;
        console.log("favorate added!!")
        console.log(item)
        setIsFavorate(!isFavorate)
    }

    if(item){
        return(
            <div className="mx-60 my-10 min-h-screen">
                <h1 className="font-medium text-4xl text-center">{item.name}</h1>
                <div className="mt-16 flex">
                    <img src={itemPic} alt={item.name} className="w-[500px] rounded-tl-xl rounded-bl-xl "/>
                    <div className="w-[500px] shadow-lg p-4 rounded-tr-xl rounded-br-xl flex flex-col justify-between" style={{backgroundImage : `url(${backgroundImage})`}}>
                        <p className="text-gray-600 flex flex-wrap mb-5">{(item.description).slice(0,(item.description.length - 1))} for just ₹{item.price}</p>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <button className="w-full bg-transparent border-2 border-slate-500 px-4 py-2 rounded-md text-black text-sm hover:bg-slate-500 hover:text-white">Add to Cart</button>
                            <button className="w-full bg-red-600 px-4 py-2 rounded-md text-white flex justify-center" onClick={()=>HandleFavorateOnCLick()}>{ isFavorate ? <p>Remove from Favorate</p> : <p>Favorate</p> }</button>
                            <button className="w-full bg-green-900 px-4 py-2 rounded-md text-white flex justify-center"><Link to="/deals" className="w-full" onClick={()=>setSearchItem(null)}>View More</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        return <Loading />
    }
}