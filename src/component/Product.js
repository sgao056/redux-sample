import React from 'react'
import { connect } from 'react-redux'

const addToCart = (itemID) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            id:itemID
        }
    }
}
const Product = ({productData}) => {
    return(
        <div className="row" 
            style={{margin:'20px', 
                    backgroundColor:'black', 
                    color: '#eee',
                    padding:'5px',
                    height:'200px',
                    fontSize:'20px',
                    alignItems:'center'}}>
            <div className="col-2" style={{height:'190px'}}>
                <img src={productData.image} alt="" style={{height:'100%', width:'100%'}}/>    
            </div>
            <div className="col-2">
                name: {productData.name}
            </div>
            <div className="col-3">
                storage: 
                <input type="text" value={productData.count} readOnly="readOnly"/>
            </div>
            <div className="col-2">
                color: {productData.color}
            </div>
            <div className="col-3 row">
                <div className="col-6">
                    <button onClick={() => addToCart(productData.id)}>Add to Cart</button>
                </div>
                <div className="col-6">
                    <button>???</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : () => {dispatch(
            {
                type: 'ADD_TO_CART',
                payload: {
                    id:1
                }
            }
        )}
    }
}

export default connect(null, mapDispatchToProps)(Product)