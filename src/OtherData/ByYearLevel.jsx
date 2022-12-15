import { Link } from "react-router-dom"

const ByYearLevel = () => {
    return (
        <div className="container mt-5">
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">1st Year</th>
                        <th scope="col">2nd Year</th>
                        <th scope="col">3rd Year</th>
                        <th scope="col">4th Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2</td>
                        <td>1</td>
                        <td>0</td>
                        <td>4</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/byYearLvl"> Go Back </Link>
        </div>
    );
}

export default ByYearLevel;