import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

const CartCount = ({cart}) => {
    const [CartCounter, setCartCounter] = useState(0);
    useEffect(()=>{
        let count = 0;
        cart.forEach(item => {
            count += item.qty
        })
        setCartCounter(count)
    },[cart, CartCounter])
    return (
        <div>
            <div style={{fontSize: '100px', fontWeight: '800'}}>
                {CartCounter}
            </div>
            <button>Click to open Cart</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}
export default connect(mapStateToProps)(CartCount)
