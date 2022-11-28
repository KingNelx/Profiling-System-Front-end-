import { Link } from "react-router-dom"

const LactatingWomen = () => {
    return (
        <div>
            <nav class="navbar bg-light shadow-lg">
                <div class="container-fluid">
                    <a class="navbar-brand">Lactating Women</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link to = "/admintopNav" class="btn btn-outline-success" type="submit">Back</Link>
                    </form>
                </div>
            </nav>
            {/* 
            <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
            <div class="container text-center mt-5 px-5 py-5">
                <div class="row">
                    <div class="col">
                        <div class="card" >
                            <i class="fa-sharp fa-solid fa-chalkboard-user fa-2xl"></i>
                            <div class="card-body shadow-lg">
                                <h5 class="card-title">First Year</h5>
                             
                                <a href="#" class="btn btn-outline-primary">View</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="col">
                            <div class="card">
                                <i class="fa-sharp fa-solid fa-chalkboard-user fa-2xl"></i>
                                <div class="card-body shadow-lg">
                                    <h5 class="card-title">Second Year</h5>
                                 
                                    <a href="#" class="btn btn-outline-primary">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="col">
                            <div class="card">
                                <i class="fa-sharp fa-solid fa-chalkboard-user fa-2xl"></i>
                                <div class="card-body shadow-lg">
                                    <h5 class="card-title">Third Year</h5>
                                  
                                    <a href="#" class="btn btn-outline-primary">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="col">
                            <div class="card">
                                <i class="fa-sharp fa-solid fa-chalkboard-user fa-2xl"></i>
                                <div class="card-body shadow-lg">
                                    <h5 class="card-title">Fourth Year</h5>
                                  
                                    <a href="#" class="btn btn-outline-primary">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LactatingWomen;