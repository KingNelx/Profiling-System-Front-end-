import {Link} from "react-router-dom"

const PersonalBG = () => {
    return (
        <div className="container mt-1 py-1">
            <h2> Personal Information </h2>
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="validationCustom01" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">First name</label>
                    <input type="text" class="form-control" id="validationCustom01" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Middle Name/Initial</label>
                    <input type="text" class="form-control" id="validationCustom02" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom02" class="form-label">Student's ID Number</label>
                    <input type="text" class="form-control" id="validationCustom02" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom02" class="form-label">Email Address </label>
                    <input type="email" class="form-control" id="validationCustom02" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom04" class="form-label">Year Level</label>
                    <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>1st year</option>
                        <option>2nd year</option>
                        <option>3rd year</option>
                        <option>4th year</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Block </label>
                    <input type="text" class="form-control" id="validationCustom02" required />
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Mobile Number </label>
                    <input type="text" class="form-control" id="validationCustom02" required />
                </div>

                <div class="col-md-4">
                    <label for="validationCustom04" class="form-label">Course</label>
                    <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>BSIT</option>
                        <option>BSIS</option>
                        <option>BSCS</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom04" class="form-label">Gender</label>
                    <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Prefer not to say</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Age </label>
                    <input type="text" class="form-control" id="validationCustom02" required />
                </div>
                <h3> Civil Status </h3>
                <div class="d-flex p-2 ">
                    <div class="form-check mx-2 ">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Single
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Married
                        </label>
                    </div>
                    <div class="form-check mx-2">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Separated
                        </label>
                    </div>
                    <div class="form-check mx-2">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Widowed
                        </label>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Religion </label>
                    <input type="email" class="form-control" id="validationCustom02" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom04" class="form-label">Language</label>
                    <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Date of Birth</label>
                    <input type="text" class="form-control" id="validationCustom01" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Place of Birth</label>
                    <input type="text" class="form-control" id="validationCustom01" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Permanent Address </label>
                    <input type="email" class="form-control" id="validationCustom02" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                {/* Current Address */}
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Current Address </label>
                    <input type="email" class="form-control" id="validationCustom02" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
              <div>
              <Link to ="/studentTopNav" className="btn btn-primary"> Submit </Link>
              </div>
            </form>
            
        </div>
    );
}

export default PersonalBG;