export default (state = [], action) => {

    switch (action.type) {
        case 'FETCH_USER':
            return [...state, action.payload]; // insert the payload into the state table
        default:
            return state
    }
};