import React, { createContext } from 'react';

const UserContext = createContext({
    user: {
        name: '',
        Email: ''
    }
})
 
export default UserContext;