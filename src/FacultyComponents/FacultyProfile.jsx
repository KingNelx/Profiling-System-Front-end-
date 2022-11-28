const FacultyProfile = () => {
    return (
      <div className="container">
        <div class="container text-center">
          <div class="row">
            <div class="col fac-1">
             <img src="https://i0.wp.com/nofiredrills.com/wp-content/uploads/2016/10/myavatar.png?fit=400%2C400&ssl=1" alt="" />
            </div>
            <div class="col">
              {/* AXIOS REMOVE (DATA WILL BE MAP HERE) */}
              <table class="table">
    <thead>
      <tr>
        {/* Axios count disabled */}
  
        {/* <th scope="col">#</th> */}
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        {/* <th scope="row">1</th> */}
        {/* Password is hashed */}
        <td>Admin</td>
        <td>Admin</td>
        <td>Admin</td>
        <td>Admin12</td>
      </tr>
    </tbody>
  </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default FacultyProfile;