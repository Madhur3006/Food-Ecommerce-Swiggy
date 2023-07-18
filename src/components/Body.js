import React, {useState, useEffect} from 'react';
import RestaurantCard from './RestaurantCard';
import { RestaurantList } from '../utilis/mockdata';
import Shimmer from './ShimmerUI';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utilis/useOnlineStatus';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(null) 
    const [inputValue, setInputValue] = useState('')
    const onlineStatus = useOnlineStatus()
    
    useEffect(() => {
        const resInfo = RestaurantList 
        setListOfRestaurants(resInfo)
    }, [])

    const handleSearchButton = () => {
        const filteredREs = RestaurantList.filter((restaurant) => restaurant.info.name.toLowerCase().includes(inputValue.toLowerCase()))
        setListOfRestaurants(filteredREs)
    }

    const handleButton = () => {
        const updatedList = RestaurantList.filter((restaurant) => restaurant.info.avgRating>=4.0)
        setListOfRestaurants(updatedList)
    }

    if(onlineStatus==false) return <h1>Internet not working</h1>

    if(listOfRestaurants===null) {
        return <Shimmer />
    }

    return (
        <div className = 'body' >
            <div className='filter'>
                <button className = 'filter-btm' onClick = {() => handleButton()}>Top Rated Restaurants</button>
                <input data-testid = "search" type = 'text' value = {inputValue} onChange = {(e) => setInputValue(e.target.value)} />
                <button onClick = {() => handleSearchButton()}>Search</button>
            </div>
            <div className='res-containor'>
                {listOfRestaurants.map((restaurant, index) => {
                    return (
                        <Link key = {restaurant?.info?.id} to = {'/restaurant/'+restaurant?.info?.id}><RestaurantCard  resData = {restaurant} /></Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Body;
