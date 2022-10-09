import { Link } from "react-router-dom"

const AdminTopNav = () => {
    return (
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
                        <li class="nav-item dropdown pr-5">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">REPORT</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Students Financial Status</a></li>
                                <li><a class="dropdown-item" href="#">Students on Scholarship
                                </a></li>
                                <li><a class="dropdown-item " href="#">Students W/ Medical Conditions
                                </a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Lactating Women
                                </a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default AdminTopNav;