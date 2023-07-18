import Shimmer from './ShimmerUI';
import { MENU_URL } from '../utilis/constants';
import { useParams } from "react-router-dom"
import useRestaurantMenu from '../utilis/useRestaurantMenu';
import { useDispatch } from 'react-redux';
import { addItem } from '../utilis/cartSlice';

const RestaurantMenu = () => {

    const resId = useParams()
    
    const resMenu = useRestaurantMenu(resId)

    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addItem(item))
    }

    if(resMenu===null) return <Shimmer />

    const {name, cuisines, costForTwo, avgRating} = resMenu?.cards[0]?.card?.card?.info;
    const { itemCards } = resMenu?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return ( 
        <div className = 'resMenuBody'>
            <div className = 'ResInfoContainor'>
                <h1>{name}</h1>
                <h2>{cuisines.join(", ")}</h2>
                <h2>Cost For Two = {costForTwo/100}</h2>
                <h2>Avg Rating: {avgRating}</h2>
            </div>
            <div >
                <ul className = 'menuitemscontainor'>
                {itemCards && itemCards.map((item, index) => {
                    return (
                        <li key = {item?.card.info?.id}> <button onClick = {() => handleAdd(item)}>Add</button> {item?.card.info?.name} </li>
                    )
                })}
            </ul>
            </div>
        </div>
     );
}
 
export default RestaurantMenu;