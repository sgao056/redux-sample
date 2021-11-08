import {connect} from 'react-redux'
import { adjustQty, removeFromCart } from '../redux/Shopping/shopping-actions'

import React, { Component } from 'react'

export class CartItemC extends Component {
    state = {
        input:""
    }
    
    removeFromCartF = () => {
        this.props.removeFromCart(this.props.itemData.id)
    }

    handleChange = (e) => {
        if(Object.keys(e.target.value).length !== 0){
            this.setState({
                input:parseInt(e.target.value)
            },()=>{
                adjustQty(this.props.itemData.id, parseInt(e.target.value))
            })
        }
        else{
            this.setState({
                input:0
            },()=>{
                adjustQty(this.props.itemData.id, 0)
            })
        }
    }
    render() {
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
                    <img src={this.props.itemData.image} alt="" style={{height:'100%', width:'100%'}}/>    
                </div>
                <div className="col-2">
                    name: {this.props.itemData.name}
                </div>
                <div className="col-2">
                    storage: 
                    <input type="text" value={this.props.itemData.count} readOnly="readOnly" style={{width:"80%"}}/>
                </div>
                <div className="col-2">
                    color: {this.props.itemData.color}
                </div>
                <div className="col-2 row">
                    <div>
                        quantity: 
                        <input onChange={this.props.handleChange} type="number" value={this.props.itemData.qty} style={{width:"80%"}}/>
                    </div>
                </div>
                <div className="col-2">
                    <button onClick={this.removeFromCartF}>
                        Remove from cart
                    </button>
                </div>
            </div>
    )
    }
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

export default connect(null, mapDispatchToProps)(CartItemC)
