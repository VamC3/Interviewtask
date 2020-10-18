import { combineReducers } from 'redux';
import  usersDataEventReducer  from '../Allcrud/Usersdata/Usersdatareducer';


 const rootReducer = combineReducers({
    events: usersDataEventReducer
})

export default rootReducer

