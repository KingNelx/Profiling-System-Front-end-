import { Link } from "react-router-dom"

const MyTest = () => {
    return (
        <div className="container">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><Link to="/" class="page-link" >Previous</Link></li>
                    <li class="page-item"><Link to="/bsit1" class="page-link" >1</Link></li>
                    <li class="page-item"><Link class="page-link" href="#">2</Link></li>
                    <li class="page-item"><Link class="page-link" href="#">3</Link></li>
                    <li class="page-item"><Link class="page-link" href="#">Next</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default MyTest;