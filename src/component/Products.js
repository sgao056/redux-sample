import React from 'react'
import Product from './Product'
import Cart from './Cart'
import CartCount from './CartCount'
import { connect } from 'react-redux'

const Products = ({products}) => {
    return(
        <div>
            <CartCount />
            {   
                products.map((product) => {
                    console.log(product)
                    return (                    
                        <Product key={product.id} productData={product}/>
                    )
                })
            }
            <Cart />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
    }
}

export default connect(mapStateToProps)(Products)
