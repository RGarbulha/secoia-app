"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const StudentReducer_1 = require("./StudentReducer");
const RootReducer = redux_1.combineReducers({
    students: StudentReducer_1.default,
});
exports.default = RootReducer;
//# sourceMappingURL=RootReducer.js.map