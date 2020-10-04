
const setUser = (user,token) => {    
    return {
        type: 'SET_USER',
        user,
        token
    }
}
function loadUser(user) {
    return dispatch => {        
        dispatch(setUser(user))
    }
}
const updateUser = (user) => {
    
    return {
        type: 'UPDATE_USER',
        payload: {
            user:user
          }
    }
}
const updateUserAdministratorClients = (type) => {
    
    return {
        type: 'UPDATE_USER_ADMINISTRATOR_CLIENTS',
        payload: {            
            type:type
          }
    }
}
export { setUser,loadUser,updateUser, updateUserAdministratorClients };
