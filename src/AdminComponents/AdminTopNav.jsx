import { Link } from "react-router-dom";
import AdminDashB from "./AdminDashB";
import AdminProfile from "./AdminProfile";

const AdminTopNav = () => {
    return (
        <div>
            <nav class="navbar bg-light bg-info shadow-lg py-3">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        {/* <img src="https://www.shareicon.net/data/2015/05/04/33366_administrator_256x256.png" alt="Logo" width="50" height="40" class="d-inline-block align-text-top" /> */}
                        ADMIN Dashboard
                    </a>
                    <div class="btn-group px-1 ms-auto">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            COURSES
                        </button>
                        <ul class="dropdown-menu">
                            <li><Link to="/bsitDashB" class="dropdown-item" href="#">BSIT</Link></li>
                            <li><Link to="/bsisDashB" class="dropdown-item" href="#">BSIS</Link></li>
                            <li><Link to="/bscsDashB" class="dropdown-item" href="#">BSCS</Link></li>
                        </ul>
                    </div>
                    <div class="btn-group px-1 ">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            REPORTS
                        </button>
                        <ul class="dropdown-menu">
                            <li><Link to="/byCourse" class="dropdown-item" href="#">List of Students by Course</Link></li>
                            <li><Link to="/byYearLvl" class="dropdown-item" href="#">List of Students by Year Level</Link></li>
                            <li><Link to="/bySex" class="dropdown-item" href="#">List of Students by Sex</Link></li>
                            <li><Link to="/byMunicipality" class="dropdown-item" href="#">List of Students by Municipality</Link></li>
                            <li><Link to="/bySchoolar" class="dropdown-item" href="#">List of Students by Schoolarship</Link></li>
                            <li><Link to="/withGadgets" class="dropdown-item" href="#">List of Students with Gadgets</Link></li>
                        </ul>
                    </div>
                    <div class="btn-group ">
                        <Link to="/" type="button" class="btn btn-outline-primary " aria-expanded="false">
                            HOME
                        </Link>
                        <button type="button" class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Profile
                        </button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Admin Profile</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <AdminProfile />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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