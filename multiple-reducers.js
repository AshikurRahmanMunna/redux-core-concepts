const { createStore, combineReducers } = require('redux');

const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCTS';

const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEM = 'ADD_CART_ITEM';

const initialProductState = {
    products: ['sugar', 'salt'],
    numberOfProducts: 2
}

const initialCartState = {
    products: [],
    numberOfProducts: 0
}

const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product
    }
}

const getCart = () => {
    return {
        type: GET_CART_ITEMS
    }
}

const addCart = (product) => {
    return {
        type: ADD_CART_ITEM,
        payload: product
    }
}

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
        case ADD_PRODUCTS:
            return {
                ...state,
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state;
    }
}

// cart reducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            }
        case ADD_CART_ITEM:
            return {
                ...state,
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state
    }
}



const rootReducer = combineReducers({ productR: productReducer, cartR: cartReducer });

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProduct('rice'));
store.dispatch(getCart());
store.dispatch(addCart('rice'));