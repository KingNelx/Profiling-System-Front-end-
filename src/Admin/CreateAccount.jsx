import {Link} from "react-router-dom"

const CreateAccount = () => {
    return (
        <div className="container col-md-4 py-5 mt-5">
            <h3 className="text-center"> Create Account </h3>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Validate</label>
                </div>
                <Link to="/Login" class="btn btn-primary">Sign up</Link>
            </form>
        </div>
    );
}

export default CreateAccount;