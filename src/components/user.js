import React, {useEffect, useState} from 'react';
import Shimmer from './ShimmerUI';

const User = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [info, setInfo] = useState({})

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://api.github.com/users/Madhur3006')
        const json = await data.json()
        setInfo(json)
    }

    const handleIncrease = () => {
        setCount(count+1)
        setCount2(count2+1)
    }

    if(info===null) return <Shimmer/>

    const {name, location, company} = info
    return ( 
        <div className = 'user-card'>
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <button onClick = {() => handleIncrease()}>Increase</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Company: {company}</h3>
            <h4>Contact: @akshaymarsh7</h4>
        </div>
     );
}
 
export default User;