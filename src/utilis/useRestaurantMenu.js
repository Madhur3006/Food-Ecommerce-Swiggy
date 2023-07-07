import React, {useEffect, useState} from 'react';
import { MENU_URL } from './constants';

const useRestaurantMenu = (resId) => {

    const [resMenu, setResMenu] = useState(null)

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        if(resId.resId) {
            const data = await fetch(MENU_URL+resId.resId)
            const json = await data.json()
            setResMenu(json?.data)
        }
    }

    return resMenu 
}
 
export default useRestaurantMenu;