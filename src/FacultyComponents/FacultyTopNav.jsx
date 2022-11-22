import FacultyDashB from "./FacultyDashB";
import { Link } from "react-router-dom"

const FacultyTopNav = () => {
  return (
    <div>
      <nav class="navbar bg-light shadow-lg ">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            {/* <img src="https://i0.wp.com/nofiredrills.com/wp-content/uploads/2016/10/myavatar.png?fit=400%2C400&ssl=1" alt="Logo" width="50" height="40" class="d-inline-block align-text-top" /> */}
            FACULTY Dashboard
          </a>
          <div class="btn-group ms-auto ">
            <Link to="/" type="button" class="btn btn-outline-primary" >
              HOME
            </Link>


            <button type="button" class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Profile
            </button>


            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Faculty Profile</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <table class="table table-striped text-center">
                      <thead>
                        <tr>
                          <th scope="col">First name</th>
                          <th scope="col">Last name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Contact</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Admin</td>
                          <td>Admin</td>
                          <td>Admin@gmail.com</td>
                          <td>09123......</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

            <ul class="dropdown-menu dropdown-menu-end">
              <li><Link to="#" class="dropdown-item" type="button">Profile</Link></li>
              <li><Link to="/" class="dropdown-item" type="button">Sign out</Link></li>
            </ul>
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              List of Students
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><Link to="#" class="dropdown-item" type="button">BS Information Technology</Link></li>
              <li><Link to="#" class="dropdown-item" type="button">BS Information System</Link></li>
              <li><Link to="#" class="dropdown-item" type="button">BS Information Science</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <FacultyDashB />
    </div>
  );
}

export default FacultyTopNav;