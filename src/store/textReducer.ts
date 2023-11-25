const defaultState = {
    text: "Введите текст"
}

export const textReducer = (state = defaultState, action:any) => {
    switch (action.type) {
        case "SET_TEXT":
            return {...state, text: action.payload}
        default:
            return state
    }
}