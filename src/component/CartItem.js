import React, {useState} from 'react'
import {connect} from 'react-redux'
import { adjustQty, removeFromCart } from '../redux/Shopping/shopping-actions'


function CartItem({itemData, removeFromCart, adjustQty}) {
    const [input, setInput] = useState(itemData.qty)

    const removeFromCartF = () => {
        removeFromCart(itemData.id)
    }

    const handleChange = (e) => {
        if(Object.keys(e.target.value).length !== 0){
            setInput(parseInt(e.target.value))
            adjustQty(itemData.id, parseInt(e.target.value))
        }
        else{
            setInput(0)
            adjustQty(itemData.id, 0)
        }
    }

        return (
                <div className="row" 
                    style={{margin:'20px', 
                            backgroundColor:'black', 
                            color: '#eee',
                            padding:'5px',
                            height:'200px',
                            fontSize:'20px',
                            alignItems:'center'}}>
                    <div className="col-2" style={{height:'190px'}}>
                        <img src={itemData.image} alt="" style={{height:'100%', width:'100%'}}/>    
                    </div>
                    <div className="col-2">
                        name: {itemData.name}
                    </div>
                    <div className="col-2">
                        storage: 
                        <input type="text" value={itemData.count} readOnly="readOnly" style={{width:"80%"}}/>
                    </div>
                    <div className="col-2">
                        color: {itemData.color}
                    </div>
                    <div className="col-2 row">
                        <div>
                            quantity: 
                            <input onChange={handleChange} type="number" value={itemData.qty} style={{width:"80%"}}/>
                        </div>
                    </div>
                    <div className="col-2">
                        <button onClick={removeFromCartF}>
                            Remove from cart
                        </button>
                    </div>
                </div>
        )
}


const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => {
            dispatch(removeFromCart(id))
        },
        adjustQty: (id, value) => {
            dispatch(adjustQty(id, value))
        }
    }
}

export default connect(null, mapDispatchToProps)(CartItem)
