const MedicalReports = () => {
    return (
        <div>
            <div className="container mt-5 py-5">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Course</th>
                            <th scope="col">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Kevin</td>
                            <td>Rojas</td>
                            <td>BSIT-1</td>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>Teves</td>
                            <td>BSIS-3</td>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Shane</td>
                            <td>Angeles</td>
                            <td>BSCS-2</td>
                            <td>Female</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MedicalReports;