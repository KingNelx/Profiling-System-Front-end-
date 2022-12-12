import { Link } from "react-router-dom"

const StudentReg = () => {
    return (
        <div className="container mt-5 py-5">
            <h2 className="text-center">Student Sign up. </h2> 
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Firstname</label>
                    <input type="text" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Lastname</label>
                    <input type="text" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Email</label>
                    <input type="text" class="form-control" id="inputAddress"  />
                </div>
                <div class="col-md-6">
                    <label for="inputAddress2" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputAddress2"  />
                </div>
                <div class="col-12">
                    <Link to="/studentLogin" type="submit" class="btn btn-primary">Create Account</Link>
                </div>
            </form>
        </div>
    );
}

export default StudentReg;