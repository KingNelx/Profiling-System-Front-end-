import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

const Males = () => {

    const [bsisAll, setBSISAll] = useState([])
    const { id } = useParams()
    const loadAllBSIS = async () => {
        const getAll = await axios.get("http://localhost:8080/allMale")
        setBSISAll(getAll.data)
    }
    useEffect(() => {
        loadAllBSIS()
    }, [])


    return (

        <div className="container mt-5">
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Address</th>
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

            <Link to="/bySex"> Go Back </Link>
        </div>
        
        );

}

export default Males;