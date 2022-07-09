// state - count:0
// action - increment, decrement, reset
// reducer

const { createStore } = require("redux")

// store
const ADD_USER = 'ADD_USER'

const initialState = {
    users: ['anisul'],
    count: 0
}


const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

// creating reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
                count: state.count + 1
            }
        default:
            return state
    }
}

// store
const store = createStore(userReducer);

store.subscribe(() => {
    console.log(store.getState());
})

// dispatch action
store.dispatch(addUser('hoque'));
store.dispatch(addUser('ashikur'));
store.dispatch(addUser('rahman'));
store.dispatch(addUser('munna'));