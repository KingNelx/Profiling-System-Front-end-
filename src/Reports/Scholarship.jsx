import { Link } from "react-router-dom"
import ScholarReports from "../ReportsTable/ScholarshipReports";

const Scholarship = () => {
    return (
        <div>
            <nav class="navbar bg-light shadow-lg">
                <div class="container-fluid">
                    <a class="navbar-brand">Students with Scholarship</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link to = "/admintopNav" class="btn btn-outline-success" type="submit">Back</Link>
                    </form>
                </div>
            </nav>
           <ScholarReports />
        </div>
    );
}

export default Scholarship;