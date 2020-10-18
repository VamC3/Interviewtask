import { iterateUsersData } from './Usersdatatype';

const getDataAction = (response) => {
    return {
        type: iterateUsersData,
        payload: response
    }
}

export default getDataAction
