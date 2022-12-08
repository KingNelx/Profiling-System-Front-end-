import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

const EducationalBG = () => {
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
                <form class="row g-4 needs-validation mt-2">
                    <div class="col-md-3">
                        <label class="form-label">Elementary</label>
                        <input type="text" class="form-control" required placeholder="School name" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Degree Recieved</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Inclusive Dates</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Honors Received</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Junior High School</label>
                        <input type="text" class="form-control" required placeholder="School name" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Degree Recieved</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Inclusive Dates</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Honors Received</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Senior High School</label>
                        <input type="text" class="form-control" required placeholder="School name" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Degree Recieved</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Inclusive Dates</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Honors Received</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">College</label>
                        <input type="text" class="form-control" required placeholder="School name" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Degree Recieved</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Inclusive Dates</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Honors Received</label>
                        <input type="text" class="form-control" required />
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