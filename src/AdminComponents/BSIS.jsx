import { Link } from "react-router-dom"

const BSIS = () => {
    return (
        <div className="container">
            <div class="text-center mt-5 py-5">
            <p> Bachelor of Science in Information Technology.</p>
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                Male
                            </div>
                            <div class="card-body">
                                <Link class="btn btn-primary">Go navigate</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                Female
                            </div>
                            <div class="card-body">
                                <Link class="btn btn-primary">Go navigate</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                Goback
                            </div>
                            <div class="card-body">
                            <Link to="/bsisyr" class="btn btn-primary">Go navigate</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID No.</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col"> Action </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>2022-1234</td>
                        <td>Joanne</td>
                        <td>Togueno</td>
                        <td>
                            <button class="btn btn-primary"> View Profile</button>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">1</th>
                        <td>2022-1234</td>
                        <td>Joanne</td>
                        <td>Togueno</td>
                        <td>
                            <button class="btn btn-primary"> View Profile</button>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">1</th>
                        <td>2022-1234</td>
                        <td>Joanne</td>
                        <td>Togueno</td>
                        <td>
                            <button class="btn btn-primary"> View Profile</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default BSIS;