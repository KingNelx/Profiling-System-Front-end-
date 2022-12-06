const MedicalReports = () => {
    return (
        <div>
            <div className="container mt-5 py-5">
                <table class="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Course</th>
                            <th scope="col">Year Level</th>
                            <th scope="col">Type of disease</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">2022-12345</th>
                            <td>Kevin</td>
                            <td>Rojas</td>
                            <td>BSIT</td>
                            <td>3rd Year</td>
                            <td>Asthma</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MedicalReports;