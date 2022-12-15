import { Link } from "react-router-dom"

const SexList = () => {
    return (

        <div className="container mt-5">
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">1st Year(Males)</th>
                        <th scope="col">2nd Year(Males)</th>
                        <th scope="col">3rd Year(Males)</th>
                        <th scope="col">4th Year(Males)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>

            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">1st Year(Females)</th>
                        <th scope="col">2nd Year(Females)</th>
                        <th scope="col">3rd Year(Females)</th>
                        <th scope="col">4th Year(Females)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td></td>
                        <td>0</td>
                        <td>4</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/byYearLvl"> Go Back </Link>
        </div>
        
        );

}

export default SexList;