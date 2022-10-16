import { Link } from "react-router-dom"
const BSIT1 = () => {
    return (
        <div>
            <div class="container text-center mx-auto py-auto mt-5 ">
                <div class="row">
                    <div class="col ">
                        <Link> <p> Male </p></Link>
                    </div>
                    <div class="col">
                        <p> Female </p>
                    </div>
                </div>
                <table class="table ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BSIT1;