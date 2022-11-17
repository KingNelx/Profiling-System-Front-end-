import { Link } from "react-router-dom";
import AdminDashB from "./AdminDashB";

const AdminTopNav = () => {
    return (
        <div>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://www.shareicon.net/data/2015/05/04/33366_administrator_256x256.png" alt="Logo" width="50" height="40" class="d-inline-block align-text-top" />
                        ADMIN
                    </a>
                    <div class="btn-group dropend">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            COURSES
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">BSIT</a></li>
                            <li><a class="dropdown-item" href="#">BSIS</a></li>
                            <li><a class="dropdown-item" href="#">BSCS</a></li>
                        </ul>
                    </div>
                    <div class="btn-group me-5 pe-5">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            HOME
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><button class="dropdown-item" type="button">Profile</button></li>
                            <li><Link to ="/" class="dropdown-item" type="button">Sign out</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="mt-5">
                <AdminDashB />
            </div>
        </div>
    );
}

export default AdminTopNav;