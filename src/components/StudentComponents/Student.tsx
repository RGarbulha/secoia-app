import React, { useEffect } from 'react'
import './Students.css';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps, Link, useHistory } from "react-router-dom";

import { RootStore } from '../../store';
import { GetStudents } from '../../actions/StudentActions';

import Moment from "react-moment";

type TParams = { id: string };

export default function Posts({ match }: RouteComponentProps<TParams>) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetStudents());
    }, []);

    const studentState = useSelector((state: RootStore) => state.students)

    const student = studentState.students && (studentState.students.filter(student => student._id === match.params.id))[0];

    return (
        <div>
            <div className="subtitle">
                <h3 className="my-4 text-center  py-2">Student Information</h3>
            </div>


            {student &&
                <div className="container text-left student-container">
                    <div className="row my-2">
                        <div className="column mr-5">
                            <span className="student-fields mr-1">Segoia Student ID Number: </span><br />
                            <span className="student-values">{student.studentId}</span><br />
                        </div>
                    </div>
                    <div className="row my-2 text-justify">
                        <div className="column mr-5">
                            <span className="student-fields  mr-1">Gender: </span>
                            <span className="student-values">{student.gender}</span>
                        </div>
                        <div className="column mr-5 ">
                            <span className="student-fields  mr-1">Nationality: </span>
                            <span className="student-values">{student.nationality}</span>
                        </div>
                        <div className="column mr-5">
                            <span className="student-fields  mr-1">Idiom: </span>
                            <span className="student-values">{student.motherTongue}</span>
                        </div>
                        <div className="column mr-5">
                            <span className="student-fields  mr-1">Passport #: </span>
                            <span className="student-values">{student.passportNumber}</span>
                        </div>

                    </div>
                    <div className="row my-2 text-justify">
                        <div className="column mr-5">
                            <span className="student-fields  mr-1">Last Name: </span>
                            <span className="student-values">{student.lastName}</span>
                        </div>
                        <div className="column mr-5 ">
                            <span className="student-fields  mr-1">First Name: </span>
                            <span className="student-values">{student.firstName}</span>
                        </div>
                        <div className="column mr-5">
                            <span className="student-fields  mr-1">Date of Birth: </span>
                            <span className="student-values"><Moment format="YYYY/MM/DD">{student.dateOfBirth}</Moment></span>
                        </div>
                    </div>
                    <div className="row my-2 text-justify">
                        <div className="column mr-5">
                            <span className="student-fields  mr-1">Home Address: </span>
                            <span className="student-values">{student.address}</span>
                        </div>
                        <div className="column mr-5 ">
                            <span className="student-fields  mr-1">City: </span>
                            <span className="student-values">{student.city}</span>
                        </div>
                        <div className="column mr-5">
                            <span className="student-fields  mr-1">State: </span>
                            <span className="student-values">{student.state}</span>
                        </div>
                        <div className="column mr-5">
                            <span className="student-fields  mr-1">Postal Code: </span>
                            <span className="student-values">{student.postalCode}</span>
                        </div>
                        <div className="column mr-5">
                            <span className="student-fields  mr-1">Country: </span>
                            <span className="student-values">{student.country}</span>
                        </div>
                    </div>
                    <div className="row my-2 text-justify">
                        <div className="column mr-5">
                            <span className="student-fields  mr-1">Email: </span>
                            <span className="student-values">{student.address}</span>
                        </div>
                        <div className="column mr-5 ">
                            <span className="student-fields  mr-1">Telephone: </span>
                            <span className="student-values">{student.city}</span>
                        </div>
                    </div>
                    <div className="row my-2 text-justify">
                        <div className="column mr-5">
                            <span className="student-fields  mr-1">Emergency Contact Person: </span>
                            <span className="student-values">{student.emergencyContact.emergencyName}</span>
                        </div>
                        <div className="column mr-5 ">
                            <span className="student-fields  mr-1">Emergency Contact Telephone: </span>
                            <span className="student-values">{student.emergencyContact.emergencyPhone}</span>
                        </div>
                    </div>
                    <div className="subtitle">
                        <h4 className="my-4 text-center  py-2">Program Details</h4>
                    </div>
                    <div className="row my-2 text-justify">
                        <div className="column mr-5">
                            <span className="student-fields  mr-1">Location: </span>
                            <span className="student-values">{student.programDetail.location}</span>
                        </div>
                        <div className="column mr-5 ">
                            <span className="student-fields  mr-1">School: </span>
                            <span className="student-values">{student.programDetail.school}</span>
                        </div>
                    </div>
                    <div className="subtitle">
                        <h4 className="my-4 text-center  py-2">Course Information</h4>
                    </div>
                    <div className="row my-2 text-justify">
                        <div className="column mr-5">
                            <span className="student-fields  mr-1">Course: </span>
                            <span className="student-values">{student.courseInformation.name}</span>
                        </div>
                    </div>
                    <div className="row my-2 text-justify">
                        <div className="column mr-5">
                            <span className="student-fields  mr-1">Start Date: </span>
                            <span className="student-values"><Moment format="YYYY/MM/DD">{student.courseInformation.startDate}</Moment></span>
                        </div>
                        <div className="column mr-5 ">
                            <span className="student-fields  mr-1">Weeks of Study: </span>
                            <span className="student-values">{student.courseInformation.weeksOfStudy}</span>
                        </div>
                    </div>



                </div>
            }
        </div >
    )
}
