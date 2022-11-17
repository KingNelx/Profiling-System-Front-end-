import DisplayDate from "../Components/DisplayDate";
import DisplayTime from "../Components/DisplayTime";

const AdminDashB = () => {
    return (
        <div>
            <div class="container text-center shadow-lg py-4 bg-warning">
                <div class="row ">
                    <div class="col ">
                        <div class="card mx-auto mt-5 shadow-lg" style={
                            { width: "18rem" }
                        }>
                            <i class="fa-solid fa-user-tie fa-2xl"></i>
                            <div class="card-body">
                                <h5 class="card-title mb-4">Total Student</h5>
                                <p class="card-text">There are 246 total students.</p>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-auto mt-5 shadow-lg" style={
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
                        <div class="card mx-auto mt-5 shadow-lg" style={
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

            <div class="container text-center mt-5 py-3 shadow-lg">
                <h2> CICT PROFILE </h2>
                <hr />
                <div class="row">
                    <div class="col">
                        <div class="card shadow-lg" style={
                            { wwidth: "18rem" }
                        }>
                            <div class="card-body">
                                <h5 class="card-title">Mission</h5>
                                <h6 class="card-subtitle mb-2 text-muted">-CICT Mission</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-lg" style={
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
                        <div class="card shadow-lg" style={
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

export default AdminDashB;