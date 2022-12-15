import { Link } from "react-router-dom"

const ViewStudent2 = () => {
    return (
        <div>
            <nav class="navbar bg-light shadow-lg py-3 sticky-sm-top">
                <div class="container-fluid">
                    <a class="navbar-brand">Personal Background</a>
                    <div class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link to="/byReportsBSIT" class="btn btn-outline-success" type="submit">Back</Link>
                    </div>
                </div>
            </nav>
            <section className="container text-center mt-5">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Middle name</th>
                            <th scope="col">Student ID</th>
                            <th scope="col">Year Level</th>
                            <th scope="col">Block</th>
                            <th scope="col">Course</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Civil Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jared</td>
                            <td>Mendoza</td>
                            <td>T</td>
                            <td>2022-01747</td>
                            <td>1</td>
                            <td>A</td>
                            <td>BSIT</td>
                            <td>Male</td>
                            <td>Single</td>
                        </tr>

                    </tbody>
                </table>
            </section>

            <section className="container text-center mt-5">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Elementary</th>
                            <th scope="col">JUNIOR HIGH SCHOOL</th>
                            <th scope="col">SENIOR HIGH SCHOOL</th>
                            <th scope="col">COLLEGE</th>
                            <th scope="col">Gadgets</th>
                            <th scope="col">Internet Status</th>
                            <th scope="col">W/Scholarship</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bato Central</td>
                            <td>Bato Rural Rural</td>
                            <td>Bato Rural Rural</td>
                            <td>Catanduanes State University</td>
                            <td>Cellphone</td>
                            <td>Good</td>
                            <td>No</td>
                        </tr>

                    </tbody>
                </table>
            </section>

            <div>

            </div>
        </div>
    );
}

export default ViewStudent2;