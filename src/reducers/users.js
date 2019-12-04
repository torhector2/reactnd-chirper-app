import { RECEIVE_USERS } from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            //nota: I want to see how is this object
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}