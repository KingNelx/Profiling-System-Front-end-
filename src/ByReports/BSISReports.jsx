import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const BSISReports = () => {

    const { id } = useParams()

    const getBSIS = async () => {
        const getData = await axios.get("http://localhost:8080/getAllStudents")
        setbsis(getData.data)
    }

    const [bsis, setbsis] = useState([])

    useEffect(() => {
        getBSIS();
    }, [])

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/students/${id}`)
        getBSIS()
    }


    return (
        <div>
            <div className="container mt-5">
                <h2 className="text-center mb-5">Bachelor of Science in Information Systems</h2>
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
                        {
                            bsis.map((bsisR, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{bsisR.firstName}</td>
                                    <td>{bsisR.lastName}</td>
                                    <td>{bsisR.gender}</td>
                                    <td>{bsisR.yearLevel}</td>
                                    <td>
                                        <Link to={`/editBG/${bsisR.id}`} class="btn btn-outline-success ">UPDATE</Link>
                                        <button type="button" class="btn btn-outline-danger mx-2" onClick={() => deleteUser(bsisR.id)}>DELETE</button>
                                        <Link to={`/viewStudent/${bsisR.id}`} class="btn btn-outline-primary">View</Link>
                                    </td>
                                </tr>
                            ))
                        }
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

                        {

                        }
                    </tbody>
                </table>
                <Link to="/byCourse">Go Back</Link>
            </div>
        </div>
    );
}

export default BSISReports;