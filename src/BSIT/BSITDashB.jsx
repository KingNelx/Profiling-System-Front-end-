import { Link } from "react-router-dom"
const BSITDashB = () => {
    return (
        <div>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <Link to="/admintopNav" class="navbar-brand" href="#">
                        <img src="https://cdn-icons-png.flaticon.com/512/13/13964.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top mx-2" />
                        Go Back
                    </Link>
                </div>
            </nav>

            <div className="container mt-5 py-5 ">
                <div class="container text-center d-flex justify-content-center">
                    <div class="row">
                        <div class="col">
                            <div class="card" style={
                                { width: "18rem" }
                            }>
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={
                                { width: "18rem" }
                            }>
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
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
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={
                                { width: "18rem" }
                            }>
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BSITDashB;