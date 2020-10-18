import { iterateUsersData }  from './Usersdatatype';

const initialState = {
    loading: true,
    error: false,
    events: []
}

 const usersDataEventReducer = (state = initialState, action) => {
    switch (action.type) {
        case iterateUsersData:
            return { ...state, ...action.payload };
        default: return state
    }
}

export default usersDataEventReducer