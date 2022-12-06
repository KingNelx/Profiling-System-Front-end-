const FinancialReports = () => {
    return (
        <div className="container mt-5 py-5">
            <table class="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Course</th>
                        <th scope="col">Year Level</th>
                        <th scope="col">Income</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">2022-12345</th>
                        <td>Kevin</td>
                        <td>Rojas</td>
                        <td>BSIT</td>
                        <td>1st Year</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <th scope="row">2022-12345</th>
                        <td>Mark</td>
                        <td>Teves</td>
                        <td>BSIS</td>
                        <td>2nd Year</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <th scope="row">2022-12345</th>
                        <td>Shane</td>
                        <td>Angeles</td>
                        <td>BSCS</td>
                        <td>3rd Year</td>
                        <td>10000</td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    );
}

export default FinancialReports;