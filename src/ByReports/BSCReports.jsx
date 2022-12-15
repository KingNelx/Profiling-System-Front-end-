import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const BSCSReports = () => {

    const getBSIT = async () => {
        const getAllBSIT = await axios.get()
    }

    const [bsit, setBSIT] = useState([])

    useEffect(() => {

    }, [])

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5">Bachelor of Science in Computer Science</h2>
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
                        <td>Kim</td>
                        <td>Venavidez</td>
                        <td>Female</td>
                        <td>1</td>
                        <td>
                            <button type="button" class="btn btn-outline-success">UPDATE</button>
                            <button type="button" class="btn btn-outline-danger mx-2">DELETE</button>
                            <button class="btn btn-outline-primary">View</button>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">1</th>
                        <td>Ryan</td>
                        <td>Rojas</td>
                        <td>Male</td>
                        <td>2</td>
                        <td>
                            <button type="button" class="btn btn-outline-success">UPDATE</button>
                            <button type="button" class="btn btn-outline-danger mx-2">DELETE</button>
                            <button class="btn btn-outline-primary">View</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link to="/byCourse">Go Back</Link>
        </div>
    );
}

export default BSCSReports;