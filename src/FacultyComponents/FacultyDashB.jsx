import DisplayDate from "../Components/DisplayDate";
import DisplayTime from "../Components/DisplayTime";
import cict from "../Image/cict.jpg"
const FacultyDashB = () => {
    return (
        <div>
        <div class="container text-center mt-3  shadow-lg bg-warning px-5 py-2">
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

      
    </div>
    );
}

export default FacultyDashB;