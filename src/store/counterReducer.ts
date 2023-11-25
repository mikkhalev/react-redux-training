


const defaultState = {
    num: 0,
    input: 5,
};
export const counterReducer = (state = defaultState, action:any) => {
    switch (action.type) {
        case "PLUS":
            return {...state, num: state.num + action.payload}
        case "MINUS":
            return {...state, num: state.num - action.payload}
        case "SET_VALUE":
            return {...state, input: action.payload}
        default:
            return state;
    }
}