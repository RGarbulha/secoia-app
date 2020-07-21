import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../store';
import { GetStudents } from '../../actions/StudentActions';
import {
    Student
} from "../../actions/StudentActionsTypes";

export default function Posts() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetStudents());
    }, []);

    const studentState = useSelector((state: RootStore) => state.students)


    return (
        <div>
            <h1>Students:</h1>
            {studentState.students && studentState.students.map((student: Student) => (
                <div key={student._id}><h3>{student.firstName}</h3></div>
            ))}
        </div>
    )
}
