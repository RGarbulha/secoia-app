import { Dispatch } from "redux";
import {
  StudentDispatchTypes,
  FETCH_STUDENTS,
  STUDENTS_FAIL,
  STUDENTS_SUCCESS,
} from "./StudentActionsTypes";
import axios from "axios";

const URL_PATH = "https://secoia-api-rest.herokuapp.com/";

export const GetStudents = () => async (
  dispatch: Dispatch<StudentDispatchTypes>
) => {
  try {
    dispatch({
      type: FETCH_STUDENTS,
    });

    const res = await axios.get(URL_PATH + "/students/list/");

    dispatch({
      type: STUDENTS_SUCCESS,
      payload: res.data.data,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: STUDENTS_FAIL,
    });
  }
};
