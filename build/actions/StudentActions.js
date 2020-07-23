"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const StudentActionsTypes_1 = require("./StudentActionsTypes");
const axios_1 = require("axios");
const URL_PATH = "https://secoia-api-rest.herokuapp.com";
exports.GetStudents = () => (dispatch) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        dispatch({
            type: StudentActionsTypes_1.FETCH_STUDENTS,
        });
        const res = yield axios_1.default.get(URL_PATH + "/students/list/");
        dispatch({
            type: StudentActionsTypes_1.STUDENTS_SUCCESS,
            payload: res.data.data,
        });
    }
    catch (e) {
        console.log(e);
        dispatch({
            type: StudentActionsTypes_1.STUDENTS_FAIL,
        });
    }
});
//# sourceMappingURL=StudentActions.js.map