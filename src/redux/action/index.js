export const increment = () => {
    return {
        type: "INCREMENT"
    }
};
export const decrement = () => {
    return {
        type: "DECREMENT"
    }
};
export const adds = (id) => {
    return {
        type: "ADD",
        payload: id
    }
};
export const deletes = (id) => {
    return {
        type: "DELETE",
        payload: id
    }
};