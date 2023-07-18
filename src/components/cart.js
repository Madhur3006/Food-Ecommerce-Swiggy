import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetItem } from '../utilis/cartSlice';

const Cart = () => {

    const dispatch = useDispatch()
    const cartItems = useSelector(store => store.cart.items)

    const handleReset = () => {
        dispatch(resetItem())
    }

    const handleRemove = (index) => {
        dispatch(removeItem(index))
    }

    const totalPrice = cartItems.reduce((acc, value) => acc + value.card.info.price, 0)
    return ( 
        <div>
            <h1>My Cart - {cartItems.length}</h1>
            <button onClick = {() => handleReset()}>Reset Cart</button>
            <div>
                {cartItems.map((item, index) => {
                    return (
                        <div> <button onClick = {() => handleRemove(index)}>Remove</button> {item.card.info.name} - {item.card.info.price/100} </div>
                    )
                })}
            </div>
            <h3>TotalPrice: {totalPrice/100}</h3>
            <button>ConfirmOrder</button>
        </div>
     );
}
 
export default Cart;
