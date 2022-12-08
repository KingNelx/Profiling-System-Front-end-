import axios from "axios"
import { useState, useEffect } from "react"


const FacultyProfile = () => {

  const loadFacultyData = async () => {
    const facultyData = await axios.get("http://localhost:8080/faculty/getFaculty")
    setFaculty(facultyData.data);
  }

  const [faculty, setFaculty] = useState([])

  useEffect(() => {
    loadFacultyData();
  }, [])

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

                
                  <th scope="col">First name</th>
                  <th scope="col">Last name</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>

                {/* <th scope="row">1</th> */}
                {/* Password is hashed */}
                {
                  faculty.map((faculty, index) => (
                    <tr>
                      
                      <td>{faculty.firstName}</td>
                      <td>{faculty.lastName}</td>
                      <td>{faculty.email}</td>
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

export default FacultyProfile;