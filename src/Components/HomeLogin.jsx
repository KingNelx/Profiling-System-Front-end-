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
<<<<<<< HEAD
            <nav className=" bg-warning text-dark text-center py-4 shadow-lg ">
              <span className="text-uppercase fs-5">Student Profiling System</span>
=======
            <nav className="text-dark text-center py-4 shadow-lg ">
              <span className="text-uppercase fs-5">Decision Support System for Academic Advising System</span>
>>>>>>> 7f2c4a722218a455b74d70bb6649195aabe4ab2b
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
                            <img src="https://icon-library.com/images/admin-icon-png/admin-icon-png-8.jpg" class="card-img-top shadow-lg" alt="" style={{
                                height: "40vh"
                            }} />
                            <div class="card-body">
                                <h5 class="card-title">DEAN</h5>
                                <Link to="/adminLogin" class="btn btn-outline-primary">Log in</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow " style={
                            { width: "18rem" }
                        }>
                            <img src="https://www.nicepng.com/png/detail/156-1568058_student-transparent-book-png-reading-book-clipart.png" class="card-img-top shadow-lg" alt="student" style={{
                                height: "40vh"
                            }} />
                            <div class="card-body">
                                <h5 class="card-title">STUDENT</h5>
                                <Link to="/studentLogin" class="btn btn-outline-primary">Log in</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card shadow " style={
                            { width: "18rem" }
                        }>
                            <img src="https://i0.wp.com/nofiredrills.com/wp-content/uploads/2016/10/myavatar.png?fit=400%2C400&ssl=1" class="card-img-top shadow-lg" alt="" style={{
                                height: "40vh"
                            }} />
                            <div class="card-body">
                                <h5 class="card-title">CLERK</h5>
                                <Link to="/facultyLogin" class="btn btn-outline-primary">Log in</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomeLogin;