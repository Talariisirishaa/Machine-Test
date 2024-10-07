import { Link } from "react-router-dom";

export function Navbar() {
    return(

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/employees">Employee-List</Link>
        </li>
        
      </ul>
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Admin
          </Link>
          
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">LOGOUT</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    )
}