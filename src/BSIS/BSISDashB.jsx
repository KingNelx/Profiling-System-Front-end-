import { Link } from "react-router-dom"
import BSIS1 from "./BSIS1";
import BSIS2 from "./BSIS2";
import BSIS3 from "./BSIS3";
import BSIS4 from "./BSIS4";

const BSISDashB = () => {
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
                <h2 className="pb-5 text-center"> Bachelor of Science in Information System </h2>
                <div class="container text-center d-flex justify-content-center">
                    <div class="row">
                        <div class="col">
                            <div class="card" style={
                                { width: "18rem" }
                            }>
                                <i class="fa-sharp fa-solid fa-chalkboard-user fa-2xl"></i>
                                <div class="card-body">
                                    <h5 class="card-title">BSIS 1st Year</h5>
                                    <Link to="/bsis1"><button className="btn btn-primary">View</button></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={
                                { width: "18rem" }
                            }>
                                <i class="fa-sharp fa-solid fa-chalkboard-user fa-2xl"></i>
                                <div class="card-body">
                                    <h5 class="card-title">BSIS 2nd Year</h5>
                                    <Link to="/bsis2"><button className="btn btn-primary">View</button></Link>
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
                                    <h5 class="card-title">BSIS 3rd Year</h5>
                                    <Link to="/bsis3"><button className="btn btn-primary">View</button></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={
                                { width: "18rem" }
                            }>
                                <i class="fa-sharp fa-solid fa-chalkboard-user fa-2xl"></i>
                                <div class="card-body">
                                    <h5 class="card-title">BSIS 4th Year</h5>
                                    <Link to="/bsis4"><button className="btn btn-primary">View</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BSISDashB;