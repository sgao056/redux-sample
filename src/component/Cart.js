import React from 'react'

function Cart() {
    return (
        <div className="container" style={{borderRadius:"10px", border:'3px solid black'}}>
            <div className="col-3 container" style={{alignItems:"center"}}><h6>Cart</h6></div>
            <div className="row container" style={{ padding:"20px"}}>
                <div className="col-6">Total: 0 items</div>
                <div className="col-6">Total Price: $0</div>
                <div className="col-12"><button>Proceed To Checkout</button></div>
            </div>
        </div>
    )
}

export default Cart


