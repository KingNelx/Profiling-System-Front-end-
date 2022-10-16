import DisplayDate from "../Components/DisplayDate";
import DisplayTime from "../Components/DisplayTime";

const AdminDashB = () => {
    return (
        <div>
            <div class="container text-center">
                <div class="row ">
                    <div class="col ">
                        <div class="card mx-auto mt-5" style={
                            { width: "18rem" }
                        }>
                            <i class="fa-solid fa-user-tie fa-2xl"></i>
                            <div class="card-body">
                                <h5 class="card-title">Total Student</h5>
                                <p class="card-text">There are 246 total students.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-auto mt-5" style={
                            { width: "18rem" }
                        }>
                            {/* <img src="..." class="card-img-top" alt="..." /> */}
                            <div class="card-body">
                                <h5 class="card-title">Date</h5>
                                <p class="card-text">
                                    <DisplayDate />
                                </p>
                              
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-auto mt-5" style={
                            { width: "18rem" }
                        }>
                            {/* <img src="..." class="card-img-top" alt="..." /> */}
                            <div class="card-body">
                                <h5 class="card-title">Time</h5>
                                <p class="card-text"><DisplayTime /></p>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashB;