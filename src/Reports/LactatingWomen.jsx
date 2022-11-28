import { Link } from "react-router-dom"
import LactatingReports from "../ReportsTable/LactatingReports";

const LactatingWomen = () => {
    return (
        <div>
            <nav class="navbar bg-light shadow-lg">
                <div class="container-fluid">
                    <a class="navbar-brand">Lactating Women</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link to = "/admintopNav" class="btn btn-outline-success" type="submit">Back</Link>
                    </form>
                </div>
            </nav>
            <LactatingReports />
        </div>
    );
}

export default LactatingWomen;