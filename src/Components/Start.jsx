import { Link } from "react-router-dom"

const Start = () => {
    return (
        <div className="container mt-5 py-5 text-center">
            <h1> Profiling System </h1>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">ADMIN</h5>
                            <img src="https://jagluck.org/resources/image/person-man.png" alt="" style={
                                { height: "50vh", width: "50%" }
                            } />
                            <Link to="/Login" class="btn btn-primary">Log in</Link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">STUDENT</h5>
                            <img src="https://laconcordia.edu.ph/assets/icon/stu.png" alt="" style={
                                { height: "50vh", width: "50%" }
                            } />
                            <Link to="/LoginStudent" class="btn btn-primary">Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Start;