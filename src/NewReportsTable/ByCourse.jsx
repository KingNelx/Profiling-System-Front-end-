const ByCourse = () => {
    return (
        // <div className="container mt-5">
        //     <table class="table table-striped text-center">
        //         <thead>
        //             <tr>
        //                 <th scope="col">#</th>
        //                 <th scope="col">First name</th>
        //                 <th scope="col">Last name</th>
        //                 <th scope="col">Gender</th>
        //                 <th scope="col">Course</th>
        //                 <th scope="col">Action</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr>
        //                 <th scope="row">1</th>
        //                 <td>Test</td>
        //                 <td>Test</td>
        //                 <td>Test</td>
        //                 <td>Test</td>
        //                 <td>
        //                 <button type="button" class="btn btn-outline-primary">Update</button>
        //                 <button type="button" class="btn btn-outline-success mx-2">View</button>
        //                 <button type="button" class="btn btn-outline-danger">Delete</button>
        //                 </td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>
        <div>
            <div class="container text-center mt-5 px-5 py-5">
                <div class="row">
                    <div class="col">
                        <div class="card mx-auto" style={
                            { width: "18rem" }
                        }>
                            <div class="card-body">
                                <h5 class="card-title">BSIT</h5>
                                <p class="card-text">Bachelor of Science in Information Technology.</p>
                                <a href="#" class="btn btn-outline-primary">View</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card  mx-auto" style={
                            { width: "18rem" }
                        }>
                            <div class="card-body">
                                <h5 class="card-title">BSIS</h5>
                                <p class="card-text">Bachelor of Science in Information System.</p>
                                <a href="#" class="btn btn-outline-primary">View</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card  mx-auto" style={
                            { width: "18rem" }
                        }>
                            <div class="card-body">
                                <h5 class="card-title">BSCS</h5>
                                <p class="card-text">Bachelor of Science in Computer Science.</p>
                                <a href="#" class="btn btn-outline-primary">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ByCourse;