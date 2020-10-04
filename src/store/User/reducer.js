

const initialState = null;

export default (state = initialState, action) => {  
    if (action.type === 'SET_USER') {
        action.user["Token"] = action.token;
        return action.user;
    }
    if (action.type === 'UPDATE_USER') {
        return action.payload.user
    }
    else if (action.type === 'UPDATE_USER_ADMINISTRATOR_CLIENTS') {
        return {
            ...state
        }
    }
    return state;
};

export const getUser = state => state.user.user;
