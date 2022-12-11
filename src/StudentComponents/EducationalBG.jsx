import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const EducationalBG = () => {

    let navigate = useNavigate();

    const [educationBG, setEducationBG] = useState({
        elementarySchool: "",
        juniorHighSchool: "",
        seniorHighSchool: "",
        college: "",
        elementaryDegree: "",
        elementaryStartDate: "",
        elementaryHonorsReceived: "",
        juniorDegree: "",
        juniorStartDate: "",
        juniorHonorsReceived: "",
        seniorHighDegree: "",
        seniorHighStartDate: "",
        seniorHighHonorsReceived: "",
        collegeDegree: "",
        collegeStartDate: "",
        collegeHonorsReceived: ""
    })

    const { elementarySchool, juniorHighSchool, seniorHighSchool, college, elementaryDegree, elementaryStartDate,
        elementaryHonorsReceived, juniorDegree, juniorStartDate, juniorHonorsReceived, seniorHighDegree, seniorHighStartDate,
        seniorHighHonorsReceived, collegeDegree, collegeStartDate, collegeHonorsReceived } = educationBG

    const onInputChange = (e) => {
        setEducationBG({ ...educationBG, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8080/student/addStudent", educationBG)
        navigate('/studentTopNav')
    }

    return (
        <div>
            <nav class="navbar bg-light shadow-lg py-3 sticky-sm-top">
                <div class="container-fluid">
                    <a class="navbar-brand">Educational Background</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link to="/studentTopNav" class="btn btn-outline-success" type="submit">Back</Link>
                    </form>
                </div>
            </nav>
            <section className="container mt-3">
                <form class="row g-4  mt-2" onSubmit={(e) => onSubmit(e)}>
                    <div class="col-md-3">
                        <label class="form-label">Elementary</label>
                        <input type={"text"} name="elementarySchool" value={elementarySchool}
                            class="form-control" placeholder="School name" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Degree Recieved</label>
                        <input type={"text"} name="elementaryDegree" value={elementaryDegree}
                            class="form-control" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Inclusive Dates</label>
                        <input type={"text"} name="elementaryStartDate" value={elementaryStartDate}
                            class="form-control" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Honors Received</label>
                        <input type={"text"} name="elementaryHonorsReceived" value={elementaryHonorsReceived}
                            class="form-control" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Junior High School</label>
                        <input type={"text"} name="juniorHighSchool" value={juniorHighSchool}
                            class="form-control" placeholder="School name" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Degree Recieved</label>
                        <input type={"text"} name="juniorDegree" value={juniorDegree}
                            class="form-control" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Inclusive Dates</label>
                        <input type={"text"} name="juniorStartDate" value={juniorStartDate}
                            class="form-control" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Honors Received</label>
                        <input type={"text"} name="juniorHonorsReceived" value={juniorHonorsReceived}
                            class="form-control" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Senior High School</label>
                        <input type={"text"} name="seniorHighSchool" value={seniorHighSchool}
                            class="form-control" placeholder="School name" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Degree Recieved</label>
                        <input type={"text"} name="seniorHighDegree" value={seniorHighDegree}
                            class="form-control" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Inclusive Dates</label>
                        <input type={"text"} name="seniorHighStartDate" value={seniorHighStartDate}
                            class="form-control" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Honors Received</label>
                        <input type={"text"} name="seniorHighHonorsReceived" value={seniorHighHonorsReceived}
                            class="form-control" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">College</label>
                        <input type={"text"} name="college" value={college}
                            class="form-control" placeholder="School name" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Degree Recieved</label>
                        <input type={"text"} name="collegeHonorsReceived" value={collegeDegree}
                            class="form-control" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Inclusive Dates</label>
                        <input type={"text"} name="collegeStartDate" value={collegeStartDate}
                            class="form-control" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Honors Received</label>
                        <input type={"text"} name="collegeHonorsReceived" value={collegeHonorsReceived} 
                        class="form-control" />
                    </div>

                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default EducationalBG;