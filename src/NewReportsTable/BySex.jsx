import { Link } from "react-router-dom"

const BySex = () => {
    return (
        <div>
            <div class="container text-center mt-5 px-5 py-5">
                <div class="row">
                    <div class="col">
                        <div class="card mx-auto" style={
                            { width: "18rem" }
                        }>
                            <div class="card-body">
                                <h5 class="card-title">Others</h5>
                                <Link to="/SexList" class="btn btn-outline-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card  mx-auto" style={
                            { width: "18rem" }
                        }>
                            <div class="card-body">
                                <h5 class="card-title">All Females</h5>
                                <Link to="/SexList" class="btn btn-outline-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card  mx-auto" style={
                            { width: "18rem" }
                        }>
                            <div class="card-body">
                                <h5 class="card-title">AllMales</h5>
                                <Link to="/allMales" class="btn btn-outline-primary">View</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BySex;