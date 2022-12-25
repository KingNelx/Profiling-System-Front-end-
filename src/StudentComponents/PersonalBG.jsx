import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import axios from "axios"

const PersonalBG = () => {

    let navigate = useNavigate();

    const [personalBG, setPersonalBG] = useState({
        lastName: "",
        firstName: "",
        middleName: "",
        studentID: "",
        yearLevel: "",
        block: "",
        course: "",
        emailAddress: "",
        facebookAccount: "",
        mobileNumber: "",
        permanentAddress: "",
        temporaryAddress: "",
        gender: "",
        dateOfBirth: "",
        placeOfBirth: "",
        citizenship: "",
        civilStatus: "",
        scholarship: "",
        gadgetsUsingForStudy: "",
        statusOfInternet: "",
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
        collegeHonorsReceived: "",
        fathersSurname: "",
        fathersGivenName: "",
        fathersMiddleName: "",
        fathersAddress: "",
        fathersHighestEducation: "",
        fathersOccupation: "",
        fathersCompany: "",
        fathersMobileNumber: "",
        fathersMonthlyIncome: "",
        fathersEmailAddress: "",
        mothersSurname: "",
        mothersGivenName: "",
        mothersMiddleName: "",
        mothersAddress: "",
        mothersHighestEducation: "",
        mothersOccupation: "",
        mothersCompany: "",
        mothersMobileNumber: "",
        mothersMonthlyIncome: "",
        mothersEmailAddress: "",


    })

    const { lastName, firstName, middleName, studentID, yearLevel, block, course, emailAddress, facebookAccount, mobileNumber,
        permanentAddress, temporaryAddress, gender, dateOfBirth, placeOfBirth, citizenship, civilStatus, scholarship, gadgetsUsingForStudy,
        statusOfInternet, elementarySchool, juniorHighSchool, seniorHighSchool, college, elementaryDegree, elementaryStartDate,
        elementaryHonorsReceived, juniorDegree, juniorStartDate, juniorHonorsReceived, seniorHighDegree, seniorHighStartDate,
        seniorHighHonorsReceived, collegeDegree, collegeStartDate, collegeHonorsReceived, fathersSurname, fathersGivenName, fathersMiddleName,
        fathersAddress, fathersHighestEducation, fathersOccupation, fathersCompany, fathersMobileNumber, fathersMonthlyIncome,
        fathersEmailAddress, mothersSurname, mothersGivenName, mothersMiddleName, mothersAddress, mothersHighestEducation, mothersOccupation,
        mothersCompany, mothersMobileNumber, mothersMonthlyIncome, mothersEmailAddress } = personalBG;

    const onInputChange = (e) => {
        setPersonalBG({ ...personalBG, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8080/addStudent", personalBG)
        navigate('/studentTopNav')
    }
    
    return (
        <div>
            <nav class="navbar bg-light shadow-lg py-3 sticky-sm-top">
                <div class="container-fluid">
                    <a class="navbar-brand">Personal Background</a>
                    <div class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link to="/studentTopNav" class="btn btn-outline-success" type="submit">Back</Link>
                    </div>
                </div>
            </nav>
            <section className="container mt-3">
                <form class="row g-4" onSubmit={(e) => onSubmit(e)}>
                    <div class="col-md-3">
                        <label class="form-label">Last name</label>
                        <input type={"text"} name="lastName" value={lastName}
                            class="form-control" placeholder="Last name" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">First name</label>
                        <input type={"text"} name="firstName" value={firstName}
                            class="form-control" placeholder="First name" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Middle name</label>
                        <input type={"text"} name="middleName" value={middleName}
                            class="form-control" placeholder="Middle name" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Student ID</label>
                        <input type={"text"} name="studentID" value={studentID}
                            class="form-control" placeholder="2022-12345" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Year Level</label>
                        <input type={"text"} name="yearLevel" value={yearLevel}
                            class="form-control" placeholder="[1/2/3/4]" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Block</label>
                        <input type={"text"} name="block" value={block}
                            class="form-control" placeholder="[A/B/C/D/...]" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Course</label>
                        <input type={"text"} name="course" value={course}
                            class="form-control" placeholder="Course" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Email Address</label>
                        <input type={"email"} name="emailAddress" value={emailAddress}
                            class="form-control" placeholder="Email@" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Facebook Account</label>
                        <input type={"text"} name="facebookAccount" value={facebookAccount}
                            class="form-control" placeholder="Facebook User" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Mobile Number</label>
                        <input type={"text"} name="mobileNumber" value={mobileNumber}
                            class="form-control" placeholder="091234****" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Permanent Address</label>
                        <input type={"text"} name="permanentAddress" value={permanentAddress}
                            class="form-control" placeholder="Permanent Address" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Units Enrolled</label>
                        <input type={"text"} name="temporaryAddress" value={temporaryAddress}
                            class="form-control" placeholder="Units Enrolled" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Gender</label>
                        <input type={"text"} name="gender" value={gender}
                            class="form-control" placeholder="[Male/Female/Others]" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Date of Birth</label>
                        <input type={"text"} name="dateOfBirth" value={dateOfBirth}
                            class="form-control" placeholder="[DD/MM/YYY]" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Place of Birth</label>
                        <input type={"text"} name="placeOfBirth" value={placeOfBirth}
                            class="form-control" placeholder="Place of Birth" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Citizenship</label>
                        <input type={"text"} name="citizenship" value={citizenship}
                            class="form-control" placeholder="Citizenship" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Civil Status</label>
                        <input type={"text"} name="civilStatus" value={civilStatus}
                            class="form-control" placeholder="[Singe/Married/Widowed/Divorce]" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">With Scholarship</label>
                        <input type={"text"} name="scholarship" value={scholarship}
                            class="form-control" placeholder="Indicate your scholarship" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Gadgets using for study</label>
                        <input type={"text"} name="gadgetsUsingForStudy" value={gadgetsUsingForStudy}
                            class="form-control" placeholder="[Tablet/Mobile/etc ..]" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Status of Internet</label>
                        <input type={"text"} name="statusOfInternet" value={statusOfInternet}
                            class="form-control" placeholder="[Poor/Good/Very Good]" onChange={(e) => onInputChange(e)} />
                    </div>
        <hr />
        <h3 className="shadow-lg mt-5">Educational Background</h3>
                    <div class="col-md-3">
                        <label class="form-label">Elementary</label>
                        <input type={"text"} name="elementarySchool" value={elementarySchool}
                            class="form-control" placeholder="School name" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Degree Recieved</label>
                        <input type={"text"} name="elementaryDegree" value={elementaryDegree}
                            class="form-control" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Inclusive Dates</label>
                        <input type={"text"} name="elementaryStartDate" value={elementaryStartDate}
                            class="form-control" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Honors Received</label>
                        <input type={"text"} name="elementaryHonorsReceived" value={elementaryHonorsReceived}
                            class="form-control" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Junior High School</label>
                        <input type={"text"} name="juniorHighSchool" value={juniorHighSchool}
                            class="form-control" placeholder="School name" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Degree Recieved</label>
                        <input type={"text"} name="juniorDegree" value={juniorDegree}
                            class="form-control" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Inclusive Dates</label>
                        <input type={"text"} name="juniorStartDate" value={juniorStartDate}
                            class="form-control" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Honors Received</label>
                        <input type={"text"} name="juniorHonorsReceived" value={juniorHonorsReceived}
                            class="form-control" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Senior High School</label>
                        <input type={"text"} name="seniorHighSchool" value={seniorHighSchool}
                            class="form-control" placeholder="School name" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Degree Recieved</label>
                        <input type={"text"} name="seniorHighDegree" value={seniorHighDegree}
                            class="form-control" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Inclusive Dates</label>
                        <input type={"text"} name="seniorHighStartDate" value={seniorHighStartDate}
                            class="form-control" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Honors Received</label>
                        <input type={"text"} name="seniorHighHonorsReceived" value={seniorHighHonorsReceived}
                            class="form-control" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">College</label>
                        <input type={"text"} name="college" value={college}
                            class="form-control" placeholder="School name" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Degree Recieved</label>
                        <input type={"text"} name="collegeDegree" value={collegeDegree}
                            class="form-control" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Inclusive Dates</label>
                        <input type={"text"} name="collegeStartDate" value={collegeStartDate}
                            class="form-control" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Honors Received</label>
                        <input type={"text"} name="collegeHonorsReceived" value={collegeHonorsReceived}
                            class="form-control" onChange={(e) => onInputChange(e)} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Father's Surname</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="fathersSurname" value={fathersSurname} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Father's Given name</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="fathersGivenName" value={fathersGivenName} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Father's Middle name</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="fathersMiddleName" value={fathersMiddleName} />
                    </div>

                    {/* <div class="col-md-3">
                        <label class="form-label">Father's address</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="fathersAddress" value={fathersAddress} />
                    </div> */}

                    <div class="col-md-3">
                        <label class="form-label">Father's Highest Educational</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="fathersHighestEducation" value={fathersHighestEducation} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Father's Occupation</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="fathersOccupation" value={fathersOccupation} />
                    </div>

                    {/* <div class="col-md-3">
                        <label class="form-label">Father's Company</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="fathersCompany" value={fathersCompany} />
                    </div> */}

                    {/* <div class="col-md-3">
                        <label class="form-label">Father's Mobile No.</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="fathersMobileNumber" value={fathersMobileNumber} />
                    </div> */}

                    {/* <div class="col-md-3">
                        <label class="form-label">Father's Monthly Income</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="fathersMonthlyIncome" value={fathersMonthlyIncome} />
                    </div> */}
{/* 
                    <div class="col-md-3">
                        <label class="form-label">Father's Email Address</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="fathersEmailAddress" value={fathersEmailAddress} />
                    </div> */}

                    <div class="col-md-3">
                        <label class="form-label">Mother's Surname</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="mothersSurname" value={mothersSurname} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Mother's Given name</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="mothersGivenName" value={mothersGivenName} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Mother's Middle name</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="mothersMiddleName" value={mothersMiddleName} />
                    </div>

                    {/* <div class="col-md-3">
                        <label class="form-label">Mother's address</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="mothersAddress" value={mothersAddress} />
                    </div> */}

                    <div class="col-md-3">
                        <label class="form-label">Mother's Highest Educational</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="mothersHighestEducation" value={mothersHighestEducation} />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Mother's Occupation</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="mothersOccupation" value={mothersOccupation} />
                    </div>

                    {/* <div class="col-md-3">
                        <label class="form-label">Mother's Company</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="mothersCompany" value={mothersCompany} />
                    </div> */}

                    {/* <div class="col-md-3">
                        <label class="form-label">Mother's Mobile No.</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="mothersMobileNumber" value={mothersMobileNumber} />
                    </div> */}
{/* 
                    <div class="col-md-3">
                        <label class="form-label">Mother's Monthly Income</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="mothersMonthlyIncome" value={mothersMonthlyIncome} />
                    </div> */}

                    {/* <div class="col-md-3">
                        <label class="form-label">Mother's Email Address</label>
                        <input type="text" class="form-control"
                            onChange={(e) => onInputChange(e)} name="mothersEmailAddress" value={mothersEmailAddress} />
                    </div> */}


                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default PersonalBG;

/*
elementarySchool, juniorHighSchool, seniorHighSchool, college, elementaryDegree, elementaryStartDate,
        elementaryHonorsReceived, juniorDegree, juniorStartDate, juniorHonorsReceived, seniorHighDegree, seniorHighStartDate,
        seniorHighHonorsReceived, collegeDegree, collegeStartDate, collegeHonorsReceived, fathersSurname, fathersGivenName, fathersMiddleName,
        fathersAddress, fathersHighestEducation, fathersOccupation, fathersCompany, fathersMobileNumber, fathersMonthlyIncome,
        fathersEmailAddress, mothersSurname, mothersGivenName, mothersMiddleName, mothersAddress, mothersHighestEducation, mothersOccupation,
        mothersCompany, mothersMobileNumber, mothersMonthlyIncome, mothersEmailAddress

            // educational background

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
        collegeHonorsReceived: "",

        // family background

        fathersSurname: "",
        fathersGivenName: "",
        fathersMiddleName: "",
        fathersAddress: "",
        fathersHighestEducation: "",
        fathersOccupation: "",
        fathersCompany: "",
        fathersMobileNumber: "",
        fathersMonthlyIncome: "",
        fathersEmailAddress: "",
        mothersSurname: "",
        mothersGivenName: "",
        mothersMiddleName: "",
        mothersAddress: "",
        mothersHighestEducation: "",
        mothersOccupation: "",
        mothersCompany: "",
        mothersMobileNumber: "",
        mothersMonthlyIncome: "",
        mothersEmailAddress: "",
*/