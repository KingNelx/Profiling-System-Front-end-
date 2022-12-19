import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

const AllBSIT = () => {

    const [bsisAll, setBSISAll] = useState([])
    const { id } = useParams()
    const loadAllBSIS = async () => {
        const getAll = await axios.get("http://localhost:8080/allBSIT")
        setBSISAll(getAll.data)
    }
    useEffect(() => {
        loadAllBSIS()
    }, [])


    return (
        <div>
        <div>
            <div class="container text-center mx-auto py-auto mt-5 ">
                <h2> Bachelor of Science in Information Technology</h2>
                <div class="row">
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
                                    <Link to={`/viewStudent/${bsis.id}`} class="btn btn-outline-primary">View</Link>
                                    <Link to={`/editBG/${bsis.id}`} class="btn btn-outline-success mx-2">UPDATE</Link>
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

export default AllBSIT;