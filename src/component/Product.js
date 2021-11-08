import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addToCart, add10ToCart } from '../redux/Shopping/shopping-actions'


class Product extends Component {
    handleAdd = ()=>{
        this.props.addToCart(this.props.productData.id)
    }
    handleAdd10 = ()=>{
        this.props.add10ToCart(this.props.productData.id)
    }
    render(){
        console.log(this.props.productData.count)
        console.log(this.props.cart)
        // const rest = this.props.productData.count-this.props.cart.qty
        return(
            <div className="row" 
                style={{margin:'20px', 
                        backgroundColor:'black', 
                        color: '#eee',
                        padding:'5px',
                        height:'200px',
                        width:"80%",
                        fontSize:'20px',
                        alignItems:'center'}}>
                <div className="col-2" style={{height:'190px'}}>
                    <img src={this.props.productData.image} alt="" style={{height:'100%', width:'100%'}}/>    
                </div>
                <div className="col-2">
                    name: {this.props.productData.name}
                </div>
                <div className="col-2">
                    storage: 
                    <input type="text" value={this.props.productData.count} readOnly="readOnly" style={{width:"30%"}}/>
                </div>
                <div className="col-2">
                    color: {this.props.productData.color}
                </div>
                <div className="col-3 row">
                    <div className="col-6">
                        <button onClick={this.handleAdd}>Add 1 to Cart</button>
                    </div>
                    <div className="col-6">
                        <button onClick={this.handleAdd10}>Add 10 to Cart</button>
                    </div>
                </div>
                <div className="col-1">
                    price: {this.props.productData.price}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : (id) => {dispatch(
           addToCart(id))},
        add10ToCart : (id) => {dispatch(
           add10ToCart(id)
            )} 
        }
}

// const mapStateToProps = (state) => {
//     return {
//         item: state.shop.cart.find(productData.id)
//     }
// }


export default connect(null, mapDispatchToProps)(Product)