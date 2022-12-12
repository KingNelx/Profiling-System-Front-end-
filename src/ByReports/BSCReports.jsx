import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const BSCSReports = () => {

    const getBSIT = async() => {
        const getAllBSIT = await axios.get()
    }

    const [bsit, setBSIT] = useState([])

    useEffect(() => {

    }, [])

    return (
        <div className="container mt-5">
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
                    {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <button type="button" class="btn btn-outline-primary">EDIT</button>
                            <button type="button" class="btn btn-outline-primary">UPDATE</button>
                            <button type="button" class="btn btn-outline-primary">DELETE</button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
            <Link to="/byCourse">Go Back</Link>
        </div>
    );
}

export default BSCSReports;