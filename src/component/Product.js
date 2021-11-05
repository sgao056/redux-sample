import React, {Component} from 'react'
import { connect } from 'react-redux'

class Product extends Component {
    handleAdd = ()=>{
        this.props.addToCart()
    }
    render(){
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
                    <img src={this.props.productData.image} alt="" style={{height:'100%', width:'100%'}}/>    
                </div>
                <div className="col-2">
                    name: {this.props.productData.name}
                </div>
                <div className="col-3">
                    storage: 
                    <input type="text" value={this.props.productData.count} readOnly="readOnly"/>
                </div>
                <div className="col-2">
                    color: {this.props.productData.color}
                </div>
                <div className="col-3 row">
                    <div className="col-6">
                        <button onClick={this.handleAdd}>Add to Cart</button>
                    </div>
                    <div className="col-6">
                        <button>???</button>
                    </div>
                </div>
            </div>
        )
    }
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