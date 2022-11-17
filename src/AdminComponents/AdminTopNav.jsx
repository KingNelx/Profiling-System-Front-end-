import { Link } from "react-router-dom";
import AdminDashB from "./AdminDashB";

const AdminTopNav = () => {
    return (
        <div>
            <nav class="navbar bg-primary bg-info bg-gradient ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://www.shareicon.net/data/2015/05/04/33366_administrator_256x256.png" alt="Logo" width="50" height="40" class="d-inline-block align-text-top" />
                        ADMIN
                    </a>
                    <div class="btn-group me-5 pe-5">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            COURSES
                        </button>
                        <ul class="dropdown-menu">
                            <li><Link to="/bsitDashB" class="dropdown-item" href="#">BSIT</Link></li>
                            <li><Link to="/bsisDashB" class="dropdown-item" href="#">BSIS</Link></li>
                            <li><Link to="/bscsDashB" class="dropdown-item" href="#">BSCS</Link></li>
                        </ul>
                    </div>
                    <div class="btn-group me-5 pe-5">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            HOME
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><Link to="/adminProfile" class="dropdown-item" type="button">Edit Profile</Link></li>
                            <li><Link to="/" class="dropdown-item" type="button">Sign out</Link></li>
                        </ul>
                        <button type="button" class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                           Profile
                        </button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        HERE
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
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