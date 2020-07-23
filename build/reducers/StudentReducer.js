"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StudentActionsTypes_1 = require("../actions/StudentActionsTypes");
const initialState = {
    loading: false,
};
const StudentReducer = (state = initialState, action) => {
    switch (action.type) {
        case StudentActionsTypes_1.STUDENTS_FAIL:
            return {
                loading: false,
            };
        case StudentActionsTypes_1.FETCH_STUDENTS:
            return {
                loading: true,
            };
        case StudentActionsTypes_1.STUDENTS_SUCCESS:
            return {
                loading: false,
                students: action.payload,
            };
        default:
            return state;
    }
};
exports.default = StudentReducer;
//# sourceMappingURL=StudentReducer.js.map