import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react";
const StudentReg = () => {

    const navigate = useNavigate();

    const [studCred, setStud] = useState({
        studEmail: "",
        studPass: "",
        studFirstName: "",
        studLastName: ""
    })

    const { studEmail, studPass, studFirstName, studLastName } = studCred

    const onInputChange = (e) => {
        setStud({ ...studCred, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8080/studCred", studCred)
        navigate('/studentLogin')
    }

    useEffect(() => {

    }, [])

    return (
        <div className="container mt-5 py-5">
            <h2 className="text-center">Student Sign up. </h2>
            <form class="row g-3" onSubmit={(e) => onSubmit(e)}>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Firstname</label>
                    <input type={"text"} name="studFirstName" value={studFirstName}
                        class="form-control" onChange={(e) => onInputChange(e)} />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Lastname</label>
                    <input type={"text"} name="studLastName" value={studLastName} onChange={(e) => onInputChange(e)} class="form-control" id="inputPassword4" />
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Email</label>
                    <input type={"email"} name="studEmail" value={studEmail} onChange={(e) => onInputChange(e)} class="form-control" id="inputAddress" />
                </div>
                <div class="col-md-6">
                    <label for="inputAddress2" class="form-label">Password</label>
                    <input type={"password"} name="studPass" value={studPass} onChange={(e) => onInputChange(e)} class="form-control" id="inputAddress2" />
                </div>
                <div class="col-12">
                    <Link to="/studentLogin" type="submit" class="btn btn-primary">Create Account</Link>
                </div>
            </form>
        </div>
    );
}

export default StudentReg;