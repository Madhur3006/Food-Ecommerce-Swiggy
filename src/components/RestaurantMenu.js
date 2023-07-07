import Shimmer from './ShimmerUI';
import { MENU_URL } from '../utilis/constants';
import { useParams } from "react-router-dom"
import useRestaurantMenu from '../utilis/useRestaurantMenu';

const RestaurantMenu = () => {

    const resId = useParams()
    
    const resMenu = useRestaurantMenu(resId)

    if(resMenu===null) return <Shimmer />

    const {name, cuisines, costForTwo, avgRating} = resMenu?.cards[0]?.card?.card?.info;
    const { itemCards } = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return ( 
        <div className = 'MenuContainor'>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>Cost For Two = {costForTwo/100}</h2>
            <h2>Avg Rating: {avgRating}</h2>
            <ul>
                {itemCards.map((item, index) => {
                    return (
                        <li key = {item?.card.info?.id}>{item?.card.info?.name}</li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default RestaurantMenu;