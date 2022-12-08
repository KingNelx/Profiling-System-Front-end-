import { Link } from "react-router-dom"
import ByGadgets from "../NewReportsTable/ByGadgets";

const StudentsWithGadgets = () => {
    return (
        <div>
            <div>
                <nav class="navbar bg-light shadow-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand">List of Students with Gadgets</a>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <Link to="/admintopNav" class="btn btn-outline-success" type="submit">Back</Link>
                        </form>
                    </div>
                </nav>
                <ByGadgets />
            </div>
        </div>
    );
}

export default StudentsWithGadgets;