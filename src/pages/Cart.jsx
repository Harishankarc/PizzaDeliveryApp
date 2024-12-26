import ItemPic from '../assets/images/item.jpeg'
import { Trash2  } from 'lucide-react';
import pizzaCategories from '../data/pizza';
import { useNavigate } from 'react-router-dom';
export default function Cart(){
    const navigate = useNavigate();
    let allItems = pizzaCategories.flatMap(category =>
        category.items.map(item => ({
            ...item
        }))
    );
    function HandleCartProductOnCLick(id){
        navigate(`/details/${id}`)
    }
    return (
        <div className="min-h-screen">
            <div className="mx-60 my-14 flex flex-col gap-8">
                {allItems.map((item,key)=>{
                    return(
                        <div className='w-full shadow-xl rounded-lg p-2 flex justify-between items-center' key={key} onClick={()=>HandleCartProductOnCLick(item.id)}>
                            <div className='flex gap-4 items-center'>
                                <div className='w-40 rounded-tl-lg rounded-bl-lg'>
                                    <img src={ItemPic} alt="" className='rounded-tl-lg rounded-bl-lg'/>
                                </div>
                                <div className='w-60 overflow-ellipsis'>
                                    <p className='text-lg'>{item.name}</p>
                                    <p className='text-sm text-gray-500'>{item.description}</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-sm'>Price : <span className='text-lg'>₹ {item.price}</span></p>
                                <div className='flex gap-2'>
                                    <p className='text-sm'>Quantity</p>
                                    <input type="number" className='border-2 border-gray-500 rounded-sm w-5 h-5 text-center ' />
                                </div>
                                
                            </div>
                            <div className='pr-10 text-gray-800 cursor-pointer'>
                                <Trash2 />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}