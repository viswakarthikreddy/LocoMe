import {INCREMENT, DECREMENT} from '../Constants';
const initialState = {
    count: 0
}
export default function (state = initialState, action) {
    switch(action.type) {
        case INCREMENT: 
            return Object.assign({}, state, {count: ++state.count});
        case DECREMENT: 
            return Object.assign({}, state, {count: --state.count});
        default:
            return state;
    }
}