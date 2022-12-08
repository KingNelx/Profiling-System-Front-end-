import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react"

const PersonalBG = () => {

    return (
        <div>
            <nav class="navbar bg-light shadow-lg py-3 sticky-sm-top">
                <div class="container-fluid">
                    <a class="navbar-brand">Personal Background</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link to="/studentTopNav" class="btn btn-outline-success" type="submit">Back</Link>
                    </form>
                </div>
            </nav>
            <section className="container mt-3">
                <form class="row g-4 needs-validation">
                    <div class="col-md-3">
                        <label class="form-label">Last name</label>
                        <input type="text" class="form-control" required placeholder="Last name" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">First name</label>
                        <input type="text" class="form-control" required placeholder="First name" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Middle name</label>
                        <input type="text" class="form-control" required placeholder="Middle name" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Student ID</label>
                        <input type="text" class="form-control" required placeholder="2022-12345" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Year Level</label>
                        <input type="text" class="form-control" required placeholder="[1/2/3/4]" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Block</label>
                        <input type="text" class="form-control" required placeholder="[A/B/C/D/...]" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Course</label>
                        <input type="text" class="form-control" required placeholder="Course" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Email Address</label>
                        <input type="text" class="form-control" required placeholder="Email@" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Facebook Account</label>
                        <input type="text" class="form-control" required placeholder="Facebook User" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Mobile Number</label>
                        <input type="text" class="form-control" required placeholder="091234****" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Permanent Address</label>
                        <input type="text" class="form-control" required placeholder="Permanent Address" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Temporary Address</label>
                        <input type="text" class="form-control" required placeholder="Temporary Address" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Gender</label>
                        <input type="text" class="form-control" required placeholder="[Male/Female/Others]" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Date of Birth</label>
                        <input type="text" class="form-control" required placeholder="[DD/MM/YYY]" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Place of Birth</label>
                        <input type="text" class="form-control" required placeholder="Place of Birth" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Citizenship</label>
                        <input type="text" class="form-control" required placeholder="Citizenship" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Civil Status</label>
                        <input type="text" class="form-control" required placeholder="[Singe/Married/Widowed/Divorce]" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">With Scholarship</label>
                        <input type="text" class="form-control" required placeholder="Indicate your scholarship" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Gadgets using for study</label>
                        <input type="text" class="form-control" required placeholder="[Tablet/Mobile/etc ..]" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Status of Internet</label>
                        <input type="text" class="form-control" required placeholder="[Poor/Good/Very Good]" />
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default PersonalBG;