import { Link } from "react-router-dom";
import StudentDashB from "./StudentDashB";

const StudentTpoNav = () => {
    return (
        <div>
            <nav class="navbar bg-light shadow-lg ">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#">
                        {/* <img src="https://laconcordia.edu.ph/assets/icon/stu.png" alt="Logo" width="50" height="40" class="d-inline-block align-text-top" /> */}
                        STUDENT Dashboard
                    </a>
                    <div class="btn-group ms-auto px-2">
                        <Link to="/" type="button" class="btn btn-outline-primary" >
                            HOME
                        </Link>
                        {/* <ul class="dropdown-menu dropdown-menu-end">
                            <li><Link to="#" class="dropdown-item" type="button">Profile</Link></li>
                            <li><Link to="/" class="dropdown-item" type="button">Sign out</Link></li>
                        </ul> */}
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            EDIT INFORMATION
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><Link to="/personalBG" class="dropdown-item" type="button">User Background</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="mt-5">
                <StudentDashB />
            </div>
        </div>
    );
}

export default StudentTpoNav;