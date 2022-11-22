import FacultyDashB from "./FacultyDashB";

const FacultyTopNav = () => {
    return (
        <div>
            <nav class="navbar bg-light shadow-lg">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">
                        <img src="https://i0.wp.com/nofiredrills.com/wp-content/uploads/2016/10/myavatar.png?fit=400%2C400&ssl=1" alt="Logo" width="50" height="40" class="d-inline-block align-text-top" />
                        FACULTY Dashboard
                    </a>
                </div>
            </nav>
            <FacultyDashB />
        </div>
    );
}

export default FacultyTopNav;