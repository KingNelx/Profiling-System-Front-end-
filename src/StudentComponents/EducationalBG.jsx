import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

const EducationalBG = () => {
    return (
        <div className="container mt-5">
            <h2>Educational Background </h2>
            <form className="row">
                <p className="bold">ELEMENTARY</p>
                <div class="col-md-4 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name of School</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="col-md-4 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Year Graduated</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="col-md-4 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Academic Honors Recieved</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <p className="bold">JUNIOR HIGH SCHOOL</p>
                <div class="col-md-4 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name of School</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="col-md-4 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Year Graduated</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="col-md-4 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Academic Honors Recieved</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <p className="bold">SENIOR HIGH SCHOOL</p>
                <div class="col-md-4 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name of School</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="col-md-4 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Year Graduated</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="col-md-4 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Academic Honors Recieved</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <p className="bold">COLLEGE</p>
                <div class="col-md-4 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name of School</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="col-md-4 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Year Graduated</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="col-md-4 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Academic Honors Recieved</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="col-12">
                    {/* <button class="btn btn-primary" type="submit">Submit form</button> */}
                    <Link to="/studentTopNav" class="btn btn-primary" type="submit">Submit form</Link>
                </div>
            </form>
        </div>
    );
}

export default EducationalBG;