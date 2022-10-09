import { Link } from "react-router-dom"

const LoginStudent = () => {
    return (
        <div>
            <div className="container col-md-4 py-5 mt-5">
                <h3 className="text-center">Student Log in </h3>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Validate</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Log in</button>
                    <Link to="/" class="btn btn-primary mx-2">Go Back</Link>
                    <Link to="/AdminCreate" className="px-2"> No Account? Sign up now. </Link>
                </form>
            </div>
        </div>
    );
}

export default LoginStudent;