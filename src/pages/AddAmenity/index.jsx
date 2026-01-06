import React, { useEffect } from "react";
import "../../js/homepage.js";

function AddAmenity() {

  // Call feather icons after component mounts
  useEffect(() => {
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  // Logout function
  const logout = () => {
    window.location.href = "/homepage.jsx";
  };

  return (
    <>
      {/* loader */}
      <div id="myloader" className="preloader">
        <img
          id="myloader"
          className="preloader-image"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSItLWFuaW1hdGlvbi1zdGF0ZTogcnVubmluZzsiPgo8c3R5bGU+CiAgICAgICAgOnJvb3QgewogICAgICAgICAgLS1hbmltYXRpb24tc3RhdGU6IHBhdXNlZDsKICAgICAgICB9CiAgICAgICAgPC9zdHlsZT4KPC9zdmc+"
          alt="Stape Community"
        />
      </div>

      {/* Main content */}
      <div id="main">
        {/* Header Section */}
        <header className="bg-light py-2 w-100">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <span className="navbar-toggler-icon" onClick={() => window.openNav?.()}></span>
              <a className="navbar-brand me-auto" href="./homepage.html">
                <img src="./assets/img/bookitlogo.png" alt="Bookit" height="40px" />
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
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><a className="nav-link" href="homepage.html">Main Page</a></li>
                  <li className="nav-item"><a className="nav-link" href="homepage.html#highlights">Highlights</a></li>
                  <li className="nav-item"><a className="nav-link" href="homepage.html#working">See Working</a></li>
                  <li className="nav-item"><a className="nav-link" href="homepage.html#features">Features</a></li>
                  <li className="nav-item">
                    <button className="btn btn-primary" onClick={logout}>Logout</button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        {/* Admin Dashboard Layout */}
        <div className="d-flex">
          {/* Sidebar */}
          <div id="sidebar" className="bg-dark text-light p-3">
            <h4>Admin Dashboard</h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <button
                  className="nav-link text-light"
                  onClick={() => window.location.href = 'admindashboard.html'}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Admin Dashboard"
                >
                  Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Main Content Area */}
          <div id="content" className="p-4 min-vh-100">
            <div className="container">
              <div className="mb-4">
                <h3>Add an amenity</h3>

                <div className="mb-3">
                  <label htmlFor="selectRoom" className="form-label">Add an Amenity</label>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Amenity Name" disabled />
                    <input type="text" value="" className="form-control" placeholder="Enter Amenity Name" required />
                  </div>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Credits" disabled />
                    <input type="number" value="0" min="0" className="form-control" placeholder="Enter Credits" required />
                  </div>
                </div>

                <button className="btn btn-primary" onClick={() => window.addAmenity?.()}>
                  Add Amenity
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light pt-2 position-fixed fixed-bottom">
        <div className="container text-center text-md-left">
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-left">
                © 2024 Bookit. All rights reserved.
                <a href="#" className="text-light" style={{ textDecoration: "none" }}>Terms & Conditions</a> |
                <a href="#" className="text-light" style={{ textDecoration: "none" }}>Privacy Policy</a> |
                <a href="#" className="text-light" style={{ textDecoration: "none" }}>Manage Cookies</a>
              </p>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                    <li key={social} className="list-inline-item">
                      <a href="#" className="btn btn-outline-light bg-light btn-floating btn-sm">
                        <img
                          src={`./assets/img/fontawesome-free-6.6.0-web/svgs/brands/${social}.svg`}
                          alt={social}
                          className="m-1"
                          width="15px"
                          height="20px"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AddAmenity;