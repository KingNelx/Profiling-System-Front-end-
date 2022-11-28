import { Link } from "react-router-dom"
import MedicalReports from "../ReportsTable/MedicalReports";

const MedicalConditions = () => {
    return (
        <div>
            <nav class="navbar bg-light shadow-lg">
                <div class="container-fluid">
                    <a class="navbar-brand">Students with Medical Conditions</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link to = "/admintopNav" class="btn btn-outline-success" type="submit">Back</Link>
                    </form>
                </div>
            </nav>
            <MedicalReports />
        </div>
    );
}

export default MedicalConditions;