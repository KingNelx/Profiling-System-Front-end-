const AdminProfile = () => {
  return (
    <div className="container">
      <div class="container text-center">
        <div class="row">
          <div class="col">
           <img src="https://www.shareicon.net/data/2015/05/04/33366_administrator_256x256.png" alt="" />
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

export default AdminProfile;