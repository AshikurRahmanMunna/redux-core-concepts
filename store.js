const { createStore } = require("redux")

// constant
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

// state
const initialCounterState = {
    count: 0,
}

const initialUsersState = {
    users: [
        { name: 'munna' }
    ]
}

// action
// INCREMENT COUNTER
const incrementCounterAction = () => {
    return {
        type: INCREMENT
    }
}

// DECREMENT COUNTER
const decrementCounterAction = () => {
    return {
        type: DECREMENT
    }
}

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            state;
    }
}

