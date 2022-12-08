import axios from "axios"
import { useState, useEffect } from "react"

const AdminProfile = () => {

  const getAdmin = async () => {
    const loadAdmin = await axios.get("http://localhost:8080/admin/getAllAdmins")
    setAdmin(loadAdmin.data);
  }

  const [admin, setAdmin] = useState([])

  useEffect(() => {
    getAdmin()
  }, [])

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
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {
                  admin.map((admin, index) => (
                    <tr>
                      <td>{admin.userName}</td>
                      <td>{admin.email}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;