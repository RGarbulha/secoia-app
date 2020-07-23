"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const RootReducer_1 = require("./reducers/RootReducer");
const redux_devtools_extension_1 = require("redux-devtools-extension");
const redux_thunk_1 = require("redux-thunk");
const store = redux_1.createStore(RootReducer_1.default, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));
exports.default = store;
//# sourceMappingURL=store.js.map