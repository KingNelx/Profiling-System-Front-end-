import DisplayDate from "../Components/DisplayDate";
import DisplayTime from "../Components/DisplayTime";
import cict from "../Image/cict.jpg"
const StudentDashB = () => {
    return (
        <div>
            <div class="container text-center  shadow-lg bg-warning px-5 py-2">
                <div class="row">
                    <div class="col">
                        <div class="card mx-auto shadow-lg bg-primary" style={{
                            width: "18rem"
                        }}>
                            <img src={cict} class="card-img-top rounded" alt="..." style={
                                {height: "30vh", width: "100%"}
                            } />
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
                                <h3 class="card-title">Mission</h3>
                                <h6 class="card-subtitle mb-2 text-muted"></h6>
                                { <p class="card-text">
                                    Foster excellence, holistic outcome-based education
                                    compliant with the requirements of diverse world market and contribute to the development of productive and value-laden lives.
                                </p> }

                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card  " style={
                            { wwidth: "18rem" }
                        }>
                            <div class="card-body">
                                <h3 class="card-title">Vission</h3>
                                <h6 class="card-subtitle mb-2 text-muted"></h6>
                                { <p class="card-text">
                                    A green university globally engaged in island research and innovations for societal advancement
                                </p> }

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card " style={
                            { wwidth: "18rem" }
                        }>
                            <div class="card-body">
                                <h3 class="card-title">Core Values</h3>
                                <h6 class="card-subtitle mb-2 text-muted"></h6>
                                { <p class="card-text">
                                Respect, Integrity, Social Responsibility, Excellence, Commitment
                                </p> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashB;