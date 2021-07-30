import { types } from '../types/types';



const initialState = {
    loading: false,
    msgEror: null
}

export const uiReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgEror: action.payload
            }
        case types.uiRemoveError:
            return {
                ...state,
                msgEror: null
            }
        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }
        case types.uiFinishLoadingbottom:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}
