import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const BSITReports = () => {

    const getBSIT = async() => {
        const getAllBSIT = await axios.get("http://localhost:8080/student")
    }

    const [bsit, setBSIT] = useState([])

    useEffect(() => {

    }, [])

    return (
        <div className="container mt-5">
             <h2 className="text-center mb-5">Bachelor of Science in Information Technology</h2>
            <table class="table table-striped text-center">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Year Level</th>
                            <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jared</td>
                        <td>Mendoza</td>
                        <td>Male</td>
                        <td>1</td>
                        <td>
                            <button type="button" class="btn btn-outline-success">UPDATE</button>
                            <button type="button" class="btn btn-outline-danger mx-2">DELETE</button>
                            <Link to="/viewStudents" class="btn btn-outline-primary">View</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link to="/byCourse">Go Back</Link>
        </div>
    );
}

export default BSITReports;