import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
const ViewStudents = () => {
    const [student, setStudent] = useState(
        {
            firstName: "",
            lastName: "",
            middleName: "",
            studentID: "",
            yearLevel: "",
            block: "",
            course: "",
            gender: "",
            civilStatus: "",
            elementarySchool: "",
            juniorHighSchool: "",
            seniorHighSchool: "",
            college: "",
            elementaryDegree: "",
            juniorDegree: "",
            seniorHighDegree: "",
            collegeDegree: ""
        }
    )

    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/students/${id}`)
        setStudent(result.data)
    }
    return (
        <div>
            <nav class="navbar bg-light shadow-lg py-3 sticky-sm-top">
                <div class="container-fluid">
                    <a class="navbar-brand">Personal Background</a>
                    <div class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link to="/byReportsBSIS" class="btn btn-outline-success" type="submit">Back</Link>
                    </div>
                </div>
            </nav>
            <section className="container text-center mt-5">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Middle name</th>
                            <th scope="col">Student ID</th>
                            <th scope="col">Year Level</th>
                            <th scope="col">Block</th>
                            <th scope="col">Course</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Civil Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.middleName}</td>
                            <td>{student.studentID}</td>
                            <td>{student.yearLevel}</td>
                            <td>{student.block}</td>
                            <td>{student.course}</td>
                            <td>{student.gender}</td>
                            <td>{student.civilStatus}</td>
                        </tr>
                    </tbody>
                </table>
            </section>


            <section className="container text-center mt-5">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Elementary School</th>
                            <th scope="col">Junior High School</th>
                            <th scope="col">Senior High School</th>
                            <th scope="col">College</th>
                            <th scope="col">Elementary Degree</th>
                            <th scope="col">High School Degree</th>
                            <th scope="col">Senior High Degree</th>
                            <th scope="col">College Degree</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{student.elementarySchool}</td>
                            <td>{student.juniorHighSchool}</td>
                            <td>{student.seniorHighSchool}</td>
                            <td>{student.college}</td>
                            <td>{student.elementaryDegree}</td>
                            <td>{student.juniorDegree}</td>
                            <td>{student.seniorHighDegree}</td>
                            <td>{student.college}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <Link to="/allBSIS">Faculty go back</Link>
            <div>

            </div>
        </div>
    );
}

export default ViewStudents;