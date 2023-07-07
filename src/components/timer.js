import React, {useState, useEffect} from 'react';

const Timer = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        let timer = setInterval(() => {
            setCount(count+1)
            console.log('Namastey react')
        }, 1000)

        return () => {
            clearInterval(timer)
            console.log('useEffect return')
        }
    }, [count])

    return ( 
        <div>
            {count}
        </div>
     );
}
 
export default Timer;