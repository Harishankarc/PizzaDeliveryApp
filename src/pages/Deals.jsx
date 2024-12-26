import itemPic from '../assets/images/item.jpeg'
import { Star } from 'lucide-react';
import pizzaCategories from '../data/pizza';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { useEffect } from 'react';
export default function Deals({ searchItem, setSearchItem }) {
    const navigate = useNavigate();

    let allItems = pizzaCategories.flatMap(category =>
        category.items.map(item => ({
            ...item
        }))
    );

    if (searchItem) {
        allItems = allItems.filter((item) => {
            return item.name.toLowerCase().includes(searchItem.toLowerCase())
        })

    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function HandleProductOnCLick(id) {
        navigate(`/details/${id}`)
    }

    if (allItems.length === 0) {
        return <Loading />
    } else {
        return (
            <div className='mx-40 my-10 flex flex-wrap min-h-screen'>
                {allItems.map((item, index) => {
                    return (
                        <div className='flex flex-col h-72 w-72 shadow-lg rounded-b-lg m-2 cursor-pointer' key={index} onClick={() => HandleProductOnCLick(item.id)}>
                            <div className="relative h-44">
                                <img
                                    src={itemPic}
                                    alt={item.name}
                                    className="object-cover rounded-t-xl "
                                />
                                <p className="absolute bottom-0 flex items-center justify-center text-white text-xl font-bold font-sans ml-2 ">
                                    ITEMS AT ₹{item.price}
                                </p>
                            </div>
                            <div className='ml-5'>
                                <p className='text-lg font-bold mt-2'>{item.name}</p>
                                <div className='flex gap-2 items-center mt-2'>
                                    <Star color="#092421" strokeWidth={3} />
                                    <p className='text-base font-bold'>{item.rating}</p>
                                </div>
                                <p className='text-base text-gray-500 mt-2'>{(item.description).length < 30 ? item.description : item.description.slice(0, 30) + "..."}</p>
                            </div>
                        </div>
                    );
                })

                }
            </div>
        );
    }
}