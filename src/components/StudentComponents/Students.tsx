import React, { useEffect, useState } from 'react'
import './Students.css';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps, Link, useHistory } from "react-router-dom";

import { RootStore } from '../../store';
import { GetStudents } from '../../actions/StudentActions';
import {
    Student
} from "../../actions/StudentActionsTypes";

type TParams = { page: string };

export default function Students({ match }: RouteComponentProps<TParams>) {

    const dispatch = useDispatch();

    const history = useHistory();

    const [studentsPerRow, setPerRows] = useState(10);
    const [filter, setFilter] = useState({ firstName: "", lastName: "", email: "", partner: "", school: "" });

    const changeQty = (e: React.ChangeEvent<HTMLSelectElement>) => setPerRows(Number(e.target.value));

    let page: number = Number(match.params.page) || 1;


    const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        history.push("/students/");

        setFilter({
            ...filter,
            [e.target.name]: e.target.value
        })
    };

    const resetFilters = (e: React.MouseEvent<HTMLButtonElement>) => setFilter({ firstName: "", lastName: "", email: "", partner: "", school: "" });

    useEffect(() => {
        dispatch(GetStudents());
    }, [setPerRows, setFilter]);

    const MAX_STUDENTS_NUMBER: number = studentsPerRow;

    const studentState = useSelector((state: RootStore) => state.students)

    //Filters here

    const filtered = () => {
        let students = studentState.students && studentState.students;

        if (students && filter.firstName !== "") {
            students = studentState.students && studentState.students.filter(student => student.firstName && student.firstName.toLowerCase().includes(filter.firstName.toLowerCase()))
        }

        if (students && filter.lastName !== "") {
            students = students && students.filter(student => student.lastName && student.lastName.toLowerCase().includes(filter.lastName.toLowerCase()))
        }

        if (students && filter.email !== "") {
            students = students.filter(student => student.email && student.email.toLowerCase().includes(filter.email.toLowerCase()))
        }

        if (students && filter.partner !== "") {
            try {
                students = students.filter(student => student.partner && student.partner.toLowerCase().includes(filter.partner.toLowerCase()))
            } catch (e) {

            }
        }

        if (students && filter.school !== "") {
            students = students.filter(student => student.programDetail.school && student.programDetail.school.toLowerCase().includes(filter.school.toLowerCase()))
        }

        return students;

    }

    // const students = studentState.students && studentState.students.slice(((page * MAX_STUDENTS_NUMBER) - MAX_STUDENTS_NUMBER), (MAX_STUDENTS_NUMBER * page));
    // const students = filtered();
    const studentsFiltered = filtered();

    let STUDENTS_LENGTH: number = studentsFiltered && studentsFiltered.length || 0;

    const students = studentsFiltered && studentsFiltered.slice(((page * MAX_STUDENTS_NUMBER) - MAX_STUDENTS_NUMBER), (MAX_STUDENTS_NUMBER * page));


    const LAST_PAGE = studentState.students && Math.ceil(STUDENTS_LENGTH / MAX_STUDENTS_NUMBER)

    const HAS_NEXT = studentState.students && LAST_PAGE == page ? false : true;




    const redirect = (e: any) => {
        const id = e.target.parentNode.id;
        history.push("/student/" + id);;
    };


    return (
        <div className="students-main">
            <h1>Students</h1>

            <div className="tool-bar my-3">
                <div className="tool-column">
                    <label htmlFor="firstName" className="mr-2">First Name: </label>
                    <input type="text" name="firstName" id="firstName" value={filter.firstName} onChange={changeFilter} className="mr-2" />
                </div>
                <div className="tool-column">
                    <label htmlFor="lastName" className="mr-2">Last Name: </label>
                    <input type="text" name="lastName" id="lastName" value={filter.lastName} onChange={changeFilter} className="mr-2" />
                </div>
                <div className="tool-column">
                    <label htmlFor="email" className="mr-2">Email: </label>
                    <input type="text" name="email" id="email" value={filter.email} onChange={changeFilter} className="mr-2" />
                </div>
                <div className="tool-column">
                    <label htmlFor="partner" className="mr-2">Partner: </label>
                    <input type="text" name="partner" id="partner" className="mr-2" value={filter.partner} onChange={changeFilter} />
                </div>
                <div className="tool-column">
                    <label htmlFor="school" className="mr-2">School: </label>
                    <input type="text" name="school" id="school" className="mr-2" value={filter.school} onChange={changeFilter} />
                </div>
                <div className="tool-column">
                    <label htmlFor="rows" className="mr-2">Rows: </label>
                    <select name="rows" id="rows" className="mr-2" onChange={changeQty}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="40">40</option>
                        <option value="60">60</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <div className="tool-column">
                    <button onClick={resetFilters}>Reset</button>
                </div>
            </div>
            <div className="students-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Partner</th>
                            <th scope="col">School</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students && students.map((student: Student) => (
                            <tr key={student._id} id={student._id} className="students-row" onClick={redirect}>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.email}</td>
                                <td>{student.partner}</td>
                                <td>{student.programDetail.school}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <div className="container">
                <nav aria-label="Page navigation ">
                    <ul className="pagination justify-content-center">
                        {page > 1 &&
                            <>
                                <li className="page-item">
                                    <Link className="page-link" to="/students/" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to={"/students/" + (page - 1)} aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </Link>
                                </li>
                                <li className="page-item"><Link className="page-link" to={"/students/" + (page - 1)}>{(page - 1)}</Link></li>
                            </>
                        }
                        <li className="page-item disabled"><Link className="page-link" to="#">{page}</Link></li>
                        {HAS_NEXT &&
                            <>
                                <li className="page-item"><Link className="page-link" to={"/students/" + (page + 1)}>{page + 1}</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to={"/students/" + (page + 1)} aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to={"/students/" + (LAST_PAGE)} aria-label="Next">
                                        <span aria-hidden="true">&raquo;&raquo;</span>
                                    </Link>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
                <div className="students-quantity"><span><b>Total Results: </b>{STUDENTS_LENGTH}</span></div>
            </div>
        </div >
    )
}
