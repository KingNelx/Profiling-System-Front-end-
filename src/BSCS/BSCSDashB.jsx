import { Link } from "react-router-dom"
import BSCS1 from "./BSCS1";
import BSCS2 from "./BSCS2";
import BSCS3 from "./BSCS3";
import BSCS4 from "./BSCS4";
const BSCSDashB = () => {
    return (
        <div>
            <nav class="navbar bg-warning">
                <div class="container-fluid">
                    <Link to="/admintopNav" class="navbar-brand" href="#">
                        <img src="https://cdn-icons-png.flaticon.com/512/13/13964.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top mx-2" />
                        Go Back
                    </Link>
                </div>
            </nav>

            <div className="container mt-5 py-5 ">
                <h2 className="pb-5 text-center"> Bachelor of Science in Computer Science</h2>
                <div class="container text-center d-flex justify-content-center">
                    <div class="row">
                        <div class="col">
                            <div class="card" style={
                                { width: "18rem" }
                            }>
                                <i class="fa-sharp fa-solid fa-chalkboard-user fa-2xl"></i>
                                <div class="card-body">
                                    <h5 class="card-title">BSCS 1st Year</h5>
                                    <Link to="/bscs1"><button className="btn btn-primary">View</button></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={
                                { width: "18rem" }
                            }>
                                <i class="fa-sharp fa-solid fa-chalkboard-user fa-2xl"></i>
                                <div class="card-body">
                                    <h5 class="card-title">BSCS 2nd Year</h5>
                                    <Link to="/bscs2"><button className="btn btn-primary">View</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container text-center mt-2 py-2 d-flex justify-content-center">
                    <div class="row">
                        <div class="col">
                            <div class="card" style={
                                { width: "18rem" }
                            }>
                                <i class="fa-sharp fa-solid fa-chalkboard-user fa-2xl"></i>
                                <div class="card-body">
                                    <h5 class="card-title">BSCS 3rd Year</h5>
                                    <Link to="/bscs3"><button className="btn btn-primary">View</button></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={
                                { width: "18rem" }
                            }>
                                <i class="fa-sharp fa-solid fa-chalkboard-user fa-2xl"></i>
                                <div class="card-body">
                                    <h5 class="card-title">BSCS 4th Year</h5>
                                    <Link to="/bscs4"><button className="btn btn-primary">View</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BSCSDashB;