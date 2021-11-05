
const fakeData = [{id:1, count:1000, image:'https://www.roots.com/dw/image/v2/AACG_PRD/on/demandware.static/-/Sites-roots_master_catalog/default/dw74f4f39b/39050010_008_a.jpg?sw=962&sh=1202&sm=fit',name:'clothing_1', color:'gray'},
                  {id:2, count:10, image:'https://www.roots.com/dw/image/v2/AACG_PRD/on/demandware.static/-/Sites-roots_master_catalog/default/dwd12c3ca5/39040538_001_a.jpg?sw=962&sh=1202&sm=fit', name:'clothing_2', color:'black'},
                  {id:3, count:100, image:'https://www.roots.com/dw/image/v2/AACG_PRD/on/demandware.static/-/Sites-roots_master_catalog/default/dw2a5b32a5/39040517_F80_a.jpg?sw=962&sh=1202&sm=fit', name:'clothing_3', color:'yellow'}]

const INITIAL_STATE = {
    products: fakeData, //{id, title, description, price, img}
    cart: [],
    currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            const item = state.products.find((product) => product.id === action.payload.id)
            const inCart = state.cart.find((product) => product.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart 
                ? state.cart.map(item => 
                    item.id === action.payload.id 
                    ? {...item, qty: item.qty+1} 
                    : item)
                :[...state.cart, {...item, qty:1}],     
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
            }
        case 'ADJUST_QTY':
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
            }
        case 'LOAD_CURRENT_ITEM':
            return {
                ...state,
                currentItem: action.payload,
            }
        default:
            console.log("100")
            return state
    }
}

export default shopReducer
