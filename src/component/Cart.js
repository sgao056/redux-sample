import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import CartItemC from './CartItemC'

const Cart = ({cart}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        let items = 0
        let price = 0
        cart.forEach(item => {
            items += item.qty
            price += item.qty*item.price
        })
        setTotalItems(items)
        setTotalPrice(price)
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])

    return (
        <div className="container" style={{borderRadius:"10px", border:'3px solid black'}}>
            <div className="col-3 container" style={{alignItems:"center", fontWeight:"800"}}><h1>Cart</h1></div>
            {
                cart.map(item => {
                    return <CartItemC key={item.id} itemData = {item}/>
                })
            }
            <div className="row container" style={{ padding:"20px"}}>
                <div className="col-6">Total: {totalItems} items</div>
                <div className="col-6">Total Price: ${totalPrice}</div>
                <div className="col-12"><button>Proceed To Checkout</button></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart)


