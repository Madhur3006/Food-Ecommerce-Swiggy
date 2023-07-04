import React, {useState} from 'react';
import RestaurantCard from './RestaurantCard';
import { RestaurantList } from '../utilis/mockaata';
import Shimmer from './ShimmerUI';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]) 
    const [inputValue, setInputValue] = useState('')

    const handleSearchButton = () => {
        const filteredREs = listOfRestaurants.filter(restaurant => restaurant.info.name.tolowerCase().includes(inputValue.toLowerCase()))
        setListOfRestaurants(filteredREs)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('')
        const json = await data.json()
        setListOfRestaurants(json?.data?.success?.cards[5]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    }

    const handleButton = () => {
        const updatedList = RestaurantList.filter((restaurant) => restaurant.info.avgRating>=4.0)
        setListOfRestaurants(updatedList)
    }

    if(listOfRestaurants.length===0) {
        return <Shimmer />
    }

    return (
        <div className = 'body' >
            <div className='filter'>
                <button className = 'filter-btm' onClick = {() => handleButton()}>Top Rated Restaurants</button>
                <input type = 'text' value = {inputValue} onChange = {(e) => setInputValue(e.response.target)} />
                <button onClick = {() => handleSearchButton()}>Search</button>
            </div>
            <div className='res-containor'>
                {listOfRestaurants.map((restaurant, index) => {
                    return (
                        <RestaurantCard key = {index} resData = {restaurant} />
                    )
                })}
            </div>
        </div>
    )
}

export default Body;
