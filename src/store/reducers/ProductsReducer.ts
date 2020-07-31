import produce from 'immer';
import { ApplicationAction } from 'store/types';
import { LOAD_PRODUCTS_REQUEST, ProductsState, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_ERROR } from 'store/types/ProductTypes';


export const initialState: ProductsState = {
    loading: {
        product_failed: false,
        product_loading: false
    },
    products:[]
};

const reducer = (state = initialState, action: ApplicationAction) => {
    switch (action.type) {
        case LOAD_PRODUCTS_REQUEST:
            return produce(state, (draft) => {
                draft.loading.product_failed = false;
                draft.loading.product_loading = true;
            });
        
            case LOAD_PRODUCTS_SUCCESS:
                return produce(state, (draft) => {
                    draft.loading.product_failed = false;
                    draft.loading.product_loading = false;
                    draft.products=action.products
                });
                case LOAD_PRODUCTS_ERROR:
                    return produce(state, (draft) => {
                        draft.loading.product_failed = false;
                        draft.loading.product_loading = false;
                    });
        default:
            return state;
    }
};

export default reducer;
