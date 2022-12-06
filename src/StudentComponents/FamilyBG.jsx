import { Link } from "react-router-dom"

const FamilyBG = () => {
    return (
        <div className="container">
            <div className="container mt-5">
                <h2>Family Background </h2>
                <form className="row">
                    <div class="col-md-4 mb-3">
                        <label for="exampleInputEmail1" class="form-label">Father's name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="exampleInputEmail1" class="form-label">Occupation</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="exampleInputEmail1" class="form-label">Religion</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="exampleInputEmail1" class="form-label">Age</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="exampleInputEmail1" class="form-label">Educational Attainment</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="exampleInputEmail1" class="form-label">Monthly Income</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="exampleInputEmail1" class="form-label">Mother's name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="exampleInputEmail1" class="form-label">Occupation</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="exampleInputEmail1" class="form-label">Religion</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="exampleInputEmail1" class="form-label">Age</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="exampleInputEmail1" class="form-label">Educational Attainment</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="exampleInputEmail1" class="form-label">Monthly Income</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="exampleInputEmail1" class="form-label">Marital Status of Parents</label>
                        <input type="text" class="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="[Married, Civil, Live in, Separated]" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="exampleInputEmail1" class="form-label">Student is living with</label>
                        <input type="text" class="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="[W/Parents, W/Mother, W/Father, W/Guardian]" />
                    </div>
                    <div class="col-12">
                        {/* <button class="btn btn-primary" type="submit">Submit form</button> */}
                        <Link to="/studentTopNav" class="btn btn-primary" type="submit">Submit form</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FamilyBG;