import { createStore } from 'redux';
const initState = {
    id: 0,
    todos: [],
    complete: false
}

console.log(initState);

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const VISIBILITY_FILTER = 'VISIBILITY_FILTER';

const ACTIVE = 'ACTIVE';
const COMPLETE = 'COMPLETE';
const ALL = 'ALL';

function addTodo(text){
    return {
        type:ADD_TODO,
        text
    }
}

function toggleTodo(id){
    return {
        type: TOGGLE_TODO,
        id
    }
}

function removeTodo(id){
    return {
        type:REMOVE_TODO,
        id
    }
}

function visilityFilter(filter){
    return {
        type: VISIBILITY_FILTER,
        filter
    }
}

function myReducer(state = initState, action){
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, 
                todos: [...state.todos, {text: action.text, id: state.id++, complete: false}]
            }
        case TOGGLE_TODO:
            return {
                ...state, 
                todos: (state.todos.filter((el, index) => index !== action.id)).concat(
                    state.todos.filter((el, index) => index === action.id)
                    .map(elem => { return {...elem, complete: true }}))
            }
        case REMOVE_TODO:
            return {
                ...state, 
                todos: (state.todos.filter((el, index) => index !== action.id))
            }
        case VISIBILITY_FILTER:
            {
            const comlete = state.todos.filter(el => el.complete);
            const active = state.todos.filter(el => !el.complete)
            console.log(active);
            return;
            }
        default:
            break;
    }
}

const store = createStore(myReducer);

// store.subscribe(() => {console.log(store.getState().todos)});
const react = addTodo('learn react.js');
const redux = addTodo('learn redux');
const webpack = addTodo('learn webpack');
const graphQL = addTodo('learn basic graphQL');

store.dispatch(react);
store.dispatch(redux);
store.dispatch(webpack);
store.dispatch(graphQL);

// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
store.dispatch(toggleTodo(3));
store.dispatch(toggleTodo(2));

// store.dispatch(removeTodo(3));
// store.dispatch(removeTodo(2));
// store.dispatch(removeTodo(1));
// store.dispatch(removeTodo(0));


// store.dispatch(visilityFilter(ALL));
store.dispatch(visilityFilter(ACTIVE));
store.dispatch(visilityFilter(ALL));

const ul = document.createElement('ul');
document.body.appendChild(ul);

// store.getState().todos.map((datum) => {
//     const li = document.createElement('li');
//     li.textContent = `${datum.id}: ${datum.text}`;
//     document.body.appendChild(li);
// })
