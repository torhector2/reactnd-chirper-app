import { RECEIVE_TWEETS } from '../actions/tweets'

export default function tweets(state = {}, action) {
    switch (action.type) {
        case RECEIVE_TWEETS:
            //nota: I want to see how is this object
            return {
                ...state,
                ...action.tweets
            }
        default:
            return state
    }
}