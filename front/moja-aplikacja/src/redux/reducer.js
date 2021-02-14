import { combineReducers } from "redux";
import booksReducer from "./books/booksReducer";
import headerReducer from "./header/headerReducer";
import basketReducer from "./basket/basketReducer";

const rootReducer = combineReducers({
    books: booksReducer,
    search: headerReducer,
    basket: basketReducer
  })

export default rootReducer