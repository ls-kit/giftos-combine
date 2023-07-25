import { Link, useNavigate } from "react-router-dom";
import "../../index.css";
import { useState } from "react";
import { useEffect } from "react";


export default function Header() {
  const [userData, setUserData] = useState();
  const navigate = useNavigate()

 useEffect(()=>{
  const userDataString = localStorage.getItem("userData");
  setUserData(JSON.parse(userDataString));
 },[])

  const handleLogout = ()=>{
    localStorage.setItem("userData", null)
    navigate("/login")
    location.reload()
  }

  return (
    <div>
      {/* <!-- header section strats --> */}
      <header className="header_section">
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <a className="navbar-brand" href="">
            <span>Giftos</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active mx-auto">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-auto">
                <Link to={"/shop"} className="nav-link">
                  Shop
                </Link>
              </li>
              <li className="nav-item mx-auto">
                <Link to={"/why"} className="nav-link">
                  Why Us
                </Link>
              </li>
              <li className="nav-item mx-auto">
                <Link to={"/testimonial"} className="nav-link">
                  Testimonial
                </Link>
              </li>
              <li className="nav-item mx-auto">
                <Link to={"/contact"} className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="user_option">
              {userData ? (
                <button  type="button" className="btn btn-secondary mx-3" onClick={handleLogout}>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span className="ms-2">Logout</span>
                </button>
              ) : (
                <Link to={"/login"}>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>Login</span>
                </Link>
              )}
              <Link to={"/cart"}>
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              </Link>
              <form className="form-inline ">
                <button className="btn nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- end header section --> */}
    </div>
  );
}
