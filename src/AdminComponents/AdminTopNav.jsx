const AdminTopNav = () => {
    return (
        <div>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://www.shareicon.net/data/2015/05/04/33366_administrator_256x256.png" alt="Logo" width="50" height="40" class="d-inline-block align-text-top" />
                        ADMIN
                    </a>
                    <div class="btn-group">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            HOME
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><button class="dropdown-item" type="button">Profile</button></li>
                            <li><button class="dropdown-item" type="button">Sign out</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default AdminTopNav;