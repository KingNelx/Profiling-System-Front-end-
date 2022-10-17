const PersonalBG = () => {
    return (
        <div className="container">
            <form class="row g-2 mt-5">
                <p> Student's Name:</p>
                <div class="col-md-3">
                    <label for="inputEmail4" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-3">
                    <label for="inputEmail4" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-3">
                    <label for="inputEmail4" class="form-label">Middle Name/Initial</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-6">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip"/>
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    );
}

export default PersonalBG;