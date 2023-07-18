import React from 'react';

const Shimmer = () => {
    return ( 
        <div data-testid = 'shimmer' className = 'shimmer-containor'>
            <div className = 'shimmer'></div>
            <div className = 'shimmer'></div>
            <div className = 'shimmer'></div>
        </div>
     );
}
 
export default Shimmer;