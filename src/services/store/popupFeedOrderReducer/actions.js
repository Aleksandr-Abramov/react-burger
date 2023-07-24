import { ADD_FEED_ORDER_DATA, CLEAR_FEED_ORDER_DATA } from "./reducer"
export const addFeedOrder = (payload) => ({ type: ADD_FEED_ORDER_DATA, payload})
export const clearFeedOrder = () => ({ type: CLEAR_FEED_ORDER_DATA })