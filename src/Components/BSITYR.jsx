import AdminTopNav from "../Admin/AdminTopNav";
import {Link} from "react-router-dom"

const BSITYR = () => {
  return (
    <div>
      <AdminTopNav />
      <div class="container text-center mx-auto mt-5">
        <div class="row justify-content-center">
          <div class="col">
            <div class="card" style={
              { width: "auto" }
            }>

              <div class="card-body">
                <h5 class="card-title">BSIT 1st Year</h5>
                <p class="card-text">Bachelor of Science in Information Technology.</p>
                <Link to="/bsit" class="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={
              { width: "auto" }
            }>

              <div class="card-body">
                <h5 class="card-title">BSIT 2nd Year</h5>
                <p class="card-text">Bachelor of Science in Information Technology.</p>
                <Link to="/bsit" class="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container text-center mt-5">
        <div class="row">
          <div class="col">
            <div class="card" style={
              { width: "auto" }
            }>
             
              <div class="card-body">
                <h5 class="card-title">BSIT 3rd Year</h5>
                <p class="card-text">Bachelor of Science in Information Technology.</p>
              <Link to="/bsit" class="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={
              { width: "auto" }
            }>
             
              <div class="card-body">
                <h5 class="card-title">BSIT 4th Year</h5>
                <p class="card-text">Bachelor of Science in Information Technology.</p>
              <Link to="/bsit" class="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BSITYR;