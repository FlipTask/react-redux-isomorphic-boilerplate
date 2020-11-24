/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookies from "universal-cookie";
import reducers from "../client/reducers";
import api from "./api";


const createAndGetStore = (__window = {}, env = {}, __cookies = {}, apiUrl = "") => {
    if (__window.document) {
        console.log("khgdkjhgdjksgdsjk");
    }
    const preloadedState = __window.__INITIAL_STATE__ || {};
    delete __window.__INITIAL_STATE__;
    const cookies = new Cookies(__cookies);

    // eslint-disable-next-line no-underscore-dangle
    const composeEnhancer = (typeof __window !== "undefined" && __window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    // eslint-disable-next-line no-unused-vars
    let enhancer = "";
    const __api = api({
        headers: {
            cookie: cookies.getAll()
        }
    }, apiUrl);
    if (env === "production") {
        enhancer = composeEnhancer(
            applyMiddleware(thunk.withExtraArgument({
                api: __api,
                cookies
            }))
        );
    } else {
        enhancer = composeEnhancer(
            applyMiddleware(thunk.withExtraArgument({
                api: __api,
                cookies
            }))
        );
    }
    return createStore(
        reducers, // reducers
        preloadedState,
        enhancer
    );
};
export default createAndGetStore;
