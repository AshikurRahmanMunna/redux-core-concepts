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

const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: "Munna" }
    }
}