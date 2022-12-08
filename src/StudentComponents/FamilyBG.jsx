import { Link } from "react-router-dom"

const FamilyBG = () => {
    return (
        <div>
            <nav class="navbar bg-light shadow-lg py-3 sticky-sm-top">
                <div class="container-fluid">
                    <a class="navbar-brand">Family Background</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link to="/studentTopNav" class="btn btn-outline-success" type="submit">Back</Link>
                    </form>
                </div>
            </nav>
            <section className="container mt-3">
                <form class="row g-4 needs-validation mt-2">
                    <div class="col-md-3">
                        <label class="form-label">Father's Surname</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Father's Given name</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Father's Middle name</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Father's address</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Father's Highest Educational</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Father's Occupation</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Father's Company</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Father's Mobile No.</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Father's Monthly Income</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Father's Email Address</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Mother's Surname</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Mother's Given name</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Mother's Middle name</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Mother's address</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Mother's Highest Educational</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Mother's Occupation</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Mother's Company</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Mother's Mobile No.</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Mother's Monthly Income</label>
                        <input type="text" class="form-control" required />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">Mother's Email Address</label>
                        <input type="text" class="form-control" required />
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default FamilyBG;