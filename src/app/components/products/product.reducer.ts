export function Reducer(state, action) {

    switch(action.type){

        case 'PRODUCT-DISCRIPTION':

        return {
            state,
            showProductCode: action.payload
        };

        default:
         return state;
    }

}