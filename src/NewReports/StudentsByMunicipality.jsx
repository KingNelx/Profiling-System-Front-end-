import { Link } from "react-router-dom"
import ByMunicipality from "../NewReportsTable/ByMunicipality";

const StudentsByMunicipality = () => {
    return (
        <div>
            <div>
                <nav class="navbar bg-light shadow-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand">List of Students by Municipality</a>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <Link to="/admintopNav" class="btn btn-outline-success" type="submit">Back</Link>
                        </form>
                    </div>
                </nav>
                <ByMunicipality />
            </div>
        </div>
    );
}

export default StudentsByMunicipality;