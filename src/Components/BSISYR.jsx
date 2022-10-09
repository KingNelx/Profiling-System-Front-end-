import AdminTopNav from "../Admin/AdminTopNav";
import { Link } from "react-router-dom"

const BSISYR = () => {
    return (
        <div>
            <AdminTopNav />
            <div class="container text-center mx-auto mt-5">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="card" style={
                            { width: "auto" }
                        }>

                            <div class="card-body">
                                <h5 class="card-title">BSIS 1st Year</h5>
                                <p class="card-text">Bachelor of Science in Information System.</p>
                                <Link to="/bsis" class="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={
                            { width: "auto" }
                        }>

                            <div class="card-body">
                                <h5 class="card-title">BSIS 2nd Year</h5>
                                <p class="card-text">Bachelor of Science in Information System.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container text-center mt-5">
                <div class="row">
                    <div class="col">
                        <div class="card" style={
                            { width: "auto" }
                        }>

                            <div class="card-body">
                                <h5 class="card-title">BSIS 3rd Year</h5>
                                <p class="card-text">Bachelor of Science in Information System.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={
                            { width: "auto" }
                        }>

                            <div class="card-body">
                                <h5 class="card-title">BSIS 4th Year</h5>
                                <p class="card-text">Bachelor of Science in Information System.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BSISYR;