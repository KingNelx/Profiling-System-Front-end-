import { Link } from "react-router-dom"

const HomeLogin = () => {
    return (
        <div>
            {/* <nav class="navbar bg-warning text-dark">
                <div class="container my-3">
                    <a class="navbar-brand text-center" href="#">
                        <img src="https://www.catanduanesstateu.edu.ph/image/cict-logo.png" alt="Bootstrap" width="50" height="50" />
                        <span className="text-uppercase">College of Information and Communications Technology</span>
                    </a>
                </div>
            </nav> */}
            <nav className=" bg-warning text-dark text-center py-4 shadow-lg ">
            <img src="https://www.catanduanesstateu.edu.ph/image/cict-logo.png" alt="Bootstrap" width="50" height="50" className="rounded mx-2 shadow "/>
                <span className="text-uppercase fs-5">Profiling System</span>
            </nav>
            {/* <p className="text-center mt-3"> Welcome to Profiling System. </p> */}
            <section>
           
{/* <button type="button" class="btn btn-primary mx-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Click me First
</button> */}

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Reminder</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        1. Back end is disabled for the moment <br />
        2. Admin REPORTS are disabled for the moment. <br />
        3. Since the hosting is free i can not connect the front end to back end to this moment. <br />
        4. The System is already at 76% <br />
        5. CRUD's already finished <br />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>
            </section>
            <div class="container text-center mt-3 py-5 d-flex justify-content-center bg-primary shadow-lg">
                <div class="row">
                    <div class="col">
                        <div class="card shadow " style={
                            { width: "18rem" }
                        }>
                            <img src="https://icon-library.com/images/admin-icon-png/admin-icon-png-8.jpg" class="card-img-top" alt="" style={{
                                height: "40vh"
                            }} />
                            <div class="card-body">
                                <h5 class="card-title">ADMIN</h5>
                                <Link to="/adminLogin" class="btn btn-outline-primary">Log in</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow " style={
                            { width: "18rem" }
                        }>
                            <img src="https://www.nicepng.com/png/detail/156-1568058_student-transparent-book-png-reading-book-clipart.png" class="card-img-top" alt="student" style={{
                                height: "40vh"
                            }} />
                            <div class="card-body">
                                <h5 class="card-title">STUDENT</h5>
                                <Link to="/studentLogin" class="btn btn-outline-primary">Log in</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomeLogin;