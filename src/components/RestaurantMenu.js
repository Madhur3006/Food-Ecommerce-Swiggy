import React, {useState} from 'react';
import Shimmer from './ShimmerUI';
import { MENU_URL } from '../utilis/constants';
import {useParams} from "react-router-dom"

const RestaurantMenu = () => {

    const [menu, setMenu] = useState(null)

    const resId = useParams()

    const fetchData = async () => {
        const data = await fetch(MENU_URL+resId)
        const json = await data.json()
        setMenu(json.data)
    }

    if(menu===null) return <Shimmer />

    const { name, cuisines, costForTwo, avgRating } = menu?.cards[0]?.card?.card?.info;
    const { itemCards } = menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return ( 
        <div className = 'MenuContainor'>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{'cost for Two ' + costForTwo}</h2>
            <h2>{avgRating}</h2>
            <ul>
                {itemCards.map((item, index) => {
                    return (
                        <li key = {item?.info?.id}>{item?.info?.name}</li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default RestaurantMenu;