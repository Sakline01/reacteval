const ProductDetail = (state = {}, action) => {
    switch (action.type) {
        case "ADD":
            if (!(action.payload in state)) {
                state[`${action.payload}`] = 1;
            }
            else {
                state[`${action.payload}`] = state[`${action.payload}`] + 1;
            }
            return state;
        case "DELETE":
            state[`${action.payload}`] = state[`${action.payload}`] - 1;
            return state;
        default:
            return state;
    }
}

export default ProductDetail;
