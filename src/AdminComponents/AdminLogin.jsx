import { Link } from "react-router-dom"
const AdminLogin = () => {
    return (
        <div>
            <form>
                <div className="container col-md-4 py-5 mt-5">
                    <h2 className="mb-3"> Sign in </h2>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    {/* <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div> */}
                  
                    <Link to="/admintopNav" class="btn btn-primary mx-2">Submit</Link>
                    <Link to="/" class="btn btn-outline-success">Go Back</Link>
                 
                </div>
            </form>
        </div>
    );
}

export default AdminLogin;