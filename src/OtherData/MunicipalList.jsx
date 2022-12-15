import { Link } from "react-router-dom"

const MunicipalList = () => {
    return (
        <div className="container mt-5">
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">Bato</th>
                        <th scope="col">San Miguel</th>
                        <th scope="col">Caramoran</th>
                        <th scope="col">San Andress</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/byYearLvl"> Go Back </Link>
        </div>
    );
}

export default MunicipalList;