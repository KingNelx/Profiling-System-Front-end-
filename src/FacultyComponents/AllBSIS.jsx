import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const AllBSIS = () => {

    const [bsisAll, setBSISAll] = useState([])

    const loadAllBSIS = async () => {
        const getAll = await axios.get("http://localhost:8080/student/getAllStudents")
        setBSISAll(getAll.data)
    }
    useEffect(() => {
        loadAllBSIS()
    }, [])

    return (
        <div>
            <div>
                <div class="container text-center mx-auto py-auto mt-5 ">
                    <h2> Bachelor of Science in Information System</h2>
                    <div class="row">
                        <div class="col ">
                            <Link> <p> Male </p></Link>
                        </div>
                        <div class="col">
                            <Link> <p> Female </p></Link>
                        </div>
                    </div>
                    <table className="table table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Firstname</th>
                                <th scope="col">Lastname</th>
                                <th scope="col">Middlename</th>
                                <th scope="col">Block</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bsisAll.map((bsis, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index+1}</th>
                                        <td>{bsis.firstName}</td>
                                        <td>{bsis.lastName}</td>
                                        <td>{bsis.middleName}</td>
                                        <td>{bsis.block}</td>
                                        <td>
                                            <button className="btn btn-outline-primary"> View </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <footer className="text-center">
                    <Link to="/faultyTopnav"> Go Back </Link>
                </footer>
            </div>
        </div>
    );
}

export default AllBSIS;