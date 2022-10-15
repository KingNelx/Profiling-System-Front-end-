import { Link } from "react-router-dom"

const HomeLogin = () => {
    return (
        <div>
            <div class="container text-center mt-5 py-5 d-flex justify-content-center">
                <div class="row">
                    <div class="col">
                        <div class="card" style={
                            { width: "18rem" }
                        }>
                            <img src="https://icon-library.com/images/admin-icon-png/admin-icon-png-8.jpg" class="card-img-top" alt="" style={{
                                height: "40vh"
                            }} />
                            <div class="card-body">
                                <h5 class="card-title">ADMIN</h5>
                                <Link to="/adminLogin" class="btn btn-primary">Log in</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={
                            { width: "18rem" }
                        }>
                            <img src="https://www.nicepng.com/png/detail/156-1568058_student-transparent-book-png-reading-book-clipart.png" class="card-img-top" alt="student" style={{
                                height: "40vh"
                            }} />
                            <div class="card-body">
                                <h5 class="card-title">STUDENT</h5>
                                <Link to="/login" class="btn btn-primary">Log in</Link>
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