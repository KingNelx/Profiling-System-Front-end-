import { Link } from "react-router-dom";
import StudentDashB from "./StudentDashB";


const StudentTpoNav = () => {
    return (
        <div>
            <nav class="navbar bg-primary bg-info bg-gradient">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://laconcordia.edu.ph/assets/icon/stu.png" alt="Logo" width="50" height="40" class="d-inline-block align-text-top" />
                        STUDENT
                    </a>
                    <div class="btn-group me-5 pe-5">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            HOME
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><Link to="#" class="dropdown-item" type="button">Profile</Link></li>
                            <li><Link to="/" class="dropdown-item" type="button">Sign out</Link></li>
                        </ul>
                    </div>
                    <div class="btn-group me-5 pe-5">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                           EDIT INFORMATION
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><Link to="/personalBG" class="dropdown-item" type="button">Personal Background</Link></li>
                            <li><Link to="#" class="dropdown-item" type="button">Educational Background</Link></li>
                            <li><Link to="#" class="dropdown-item" type="button">Family Background</Link></li>
                            <li><Link to="#" class="dropdown-item" type="button">Other Information</Link></li>
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