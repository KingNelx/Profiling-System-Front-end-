
import { Link } from "react-router-dom"
import Time from "./Time";
import DateToday from "./DateToday";
const Home = () => {

    return (
        <div>
            <div>
                <nav class="navbar bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src="https://jagluck.org/resources/image/person-man.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                            ADMIN
                        </a>
                        <ul class=" mx-5 px-5 nav nav-tabs">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">HOME</a>
                                <ul class="dropdown-menu">
                                    <Link to="/home" class="dropdown-item" href="#">HOME</Link>
                                    <Link to="/bsityr" class="dropdown-item" href="#">BSIT</Link>
                                    <Link to="/bsisyr" class="dropdown-item" href="#">BSIS</Link>
                                    <Link to="/bscsyr" class="dropdown-item" href="#">BSCS</Link>
                                    <li><hr class="dropdown-divider" /></li>
                                    <Link to="/" class="dropdown-item" href="#">Sign out</Link>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">REPORT</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="container text-center mx-auto mt-5">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title py-2 fa fa-address-book"> Total Students</h5>
                                <p class="card-text">There are 256 Total Students Enrolled.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title fa fa-calendar"> Date</h5>
                                <DateToday />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title fa fa-hourglass-start">Time</h5>
                                <Time />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container text-center mx-auto mt-5">
                <h1 className="text-center"> CICT PROFILE </h1>
                <hr></hr>
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title fa fa-clone"> Mission</h5>
                                <p class="card-text">Some Information</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title fa fa-clone"> Vision</h5>
                                <p class="card-text">Some Information</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title fa fa-clone"> Core Values</h5>
                                <p class="card-text">Some Information</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;