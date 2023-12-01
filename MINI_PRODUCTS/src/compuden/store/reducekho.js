
import { combineReducers, createStore } from "redux"
import { reduxcer } from "./reduce/reduce.js"
import { reducx_products } from "./reduce/reducx_products.js"
const store = combineReducers({
    reduxcer,
    reducx_products,
}
)
export const storeADD = createStore(store)
