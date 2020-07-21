import {
  Student,
  StudentDispatchTypes,
  STUDENTS_FAIL,
  STUDENTS_SUCCESS,
  FETCH_STUDENTS,
} from "../actions/StudentActionsTypes";

interface InitialStateI {
  loading: boolean;
  students?: Student[];
}

const initialState: InitialStateI = {
  loading: false,
};

const StudentReducer = (
  state: InitialStateI = initialState,
  action: StudentDispatchTypes
): InitialStateI => {
  switch (action.type) {
    case STUDENTS_FAIL:
      return {
        loading: false,
      };
    case FETCH_STUDENTS:
      return {
        loading: true,
      };
    case STUDENTS_SUCCESS:
      return {
        loading: false,
        students: action.payload,
      };
    default:
      return state;
  }
};

export default StudentReducer;
