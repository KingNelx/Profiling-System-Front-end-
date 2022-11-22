import DisplayDate from "../Components/DisplayDate";
import DisplayTime from "../Components/DisplayTime";

const FacultyDashB = () => {
    return (
        <div>
        <div class="container text-center mt-5 py-3 shadow-lg bg-warning">
            <div class="row">
                <div class="col">
                    <div class="card mx-auto shadow-lg bg-primary" style={{
                        width: "18rem"
                    }}>
                        <img src="https://www.catanduanesstateu.edu.ph/image/cict-logo.png" class="card-img-top rounded" alt="..." />
                        {/* <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div> */}
                    </div>
                </div>
                <div class="col ">
                    <div class="card mx-auto mt-5 shadow-lg " style={
                        { width: "18rem" }
                    }>
                        <i class="fa-regular fa-calendar-days fa-2xl"></i>
                        <div class="card-body">
                            <h5 class="card-title">Date</h5>
                            <p class="card-text">
                                <DisplayDate />
                            </p>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mx-auto mt-5 shadow-lg " style={
                        { width: "18rem" }
                    }>
                        <i class="fa-solid fa-clock fa-2xl"></i>
                        <div class="card-body">
                            <h5 class="card-title">Time</h5>
                            <p class="card-text"><DisplayTime /></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container text-center mt-3 py-1 shadow-lg">
            <h2> CICT PROFILE </h2>
            <hr />
            <div class="row">
                <div class="col">
                    <div class="card " style={
                        { wwidth: "18rem" }
                    }>
                        <div class="card-body">
                            <h5 class="card-title">Mission</h5>
                            <h6 class="card-subtitle mb-2 text-muted">-CICT Mission</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>
                </div>
                <div class="col ">
                    <div class="card  " style={
                        { wwidth: "18rem" }
                    }>
                        <div class="card-body">
                            <h5 class="card-title">Vission</h5>
                            <h6 class="card-subtitle mb-2 text-muted">-CICT Vission</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card " style={
                        { wwidth: "18rem" }
                    }>
                        <div class="card-body">
                            <h5 class="card-title">Core Values</h5>
                            <h6 class="card-subtitle mb-2 text-muted">-CICT Core Values</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default FacultyDashB;