import React, {useContext} from 'react';
import { CDN_URL } from '../utilis/constants';
import UserContext from '../utilis/userContext';

const RestaurantCard = (props) => {
    const {user, setUser} = useContext(UserContext)
    const { resData } = props 
    const {name, cloudinaryImageData, avgRating, deliveryTime, cuisines} = resData?.info;
    return (
        <div className = "res-card">
            <img src={ CDN_URL + props.resData.info.cloudinaryImageId} className = 'restaurantimage' />
            <h3>{props.resData.info.name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{props.resData.info.avgRating}</h4>
            <h4>{props.resData.info.deliveryTime}</h4>
            <h4>{user.name}</h4>
        </div>
    )
}

export default RestaurantCard;