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
                <span className="text-uppercase fs-5">College of Information and Communications Technology</span>
            </nav>
            <div class="container text-center mt-5 py-5 d-flex justify-content-center bg-primary shadow-lg">
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
            <p className="text-center"> Welcome to Profiling System. </p>
        </div>
    );
}

export default HomeLogin;