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
                                <h5 class="card-title">BSIT</h5>
                                <p class="card-text">Bachelor of Science in Information Technology.</p>
                                <a href="#" class="btn btn-outline-primary">View</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card  mx-auto" style={
                            { width: "18rem" }
                        }>
                            <div class="card-body">
                                <h5 class="card-title">BSIS</h5>
                                <p class="card-text">Bachelor of Science in Information System.</p>
                                <Link to="/SexList" class="btn btn-outline-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card  mx-auto" style={
                            { width: "18rem" }
                        }>
                            <div class="card-body">
                                <h5 class="card-title">BSCS</h5>
                                <p class="card-text">Bachelor of Science in Computer Science.</p>
                                <a href="#" class="btn btn-outline-primary">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BySex;