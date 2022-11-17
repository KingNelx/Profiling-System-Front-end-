import { Link } from "react-router-dom"
const BSCS4 = () => {
    return (
        <div>
            <div class="container text-center mx-auto py-auto mt-5 ">
                <h2> Bachelor of Science in Computer Science - 4</h2>
                <div class="row">
                    <div class="col ">
                        <Link> <p> Male </p></Link>
                    </div>
                    <div class="col">
                        <Link> <p> Female </p></Link>
                    </div>
                </div>
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID No.</th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>2022-1234</td>
                            <td>Angeleen</td>
                            <td>Abay</td>
                            <td>
                                <button className="btn btn-outline-primary"> View </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>2022-4321</td>
                            <td>Andrea</td>
                            <td>Anata</td>
                            <td>
                                <button className="btn btn-outline-primary"> View </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>2022-5678</td>
                            <td>Joanne</td>
                            <td>Bueno</td>
                            <td>
                                <button className="btn btn-outline-primary"> View </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>2022-8765</td>
                            <td>Jesser</td>
                            <td>Togueno</td>
                            <td>
                                <button className="btn btn-outline-primary"> View </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>2022-9101</td>
                            <td>Clara</td>
                            <td>Tasarra</td>
                            <td>
                                <button className="btn btn-outline-primary"> View </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <footer className="text-center">
                <Link to="/bscsDashB"> Go Back </Link>
            </footer> */}
        </div>
    );
}

export default BSCS4;