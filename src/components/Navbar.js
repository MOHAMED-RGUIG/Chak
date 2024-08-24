import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userActions';

function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
    <div className="container-fluid bg-light p-0">
    <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                <small className="fa fa-map-marker-alt text-primary me-2"></small>
                <small>123 Avenu, Maarif, Maroc</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
                <small className="far fa-clock text-primary me-2"></small>
                <small>Lun - Ven: 09:00 - 18:00 GMT+1</small>
            </div>
    


      
        </div>
        <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                <small className="fa fa-phone-alt text-primary me-2"></small>
                <small>+212 06 61333013</small>
                
            </div>
    
            <div className="h-100 d-inline-flex align-items-center">
                <a className="btn btn-sm-square text-primary me-1" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-sm-square text-primary me-1" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-sm-square text-primary me-1" href=""><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-sm-square text-primary me-0" href=""><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
</div>

<nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
    <a href="/" className="navbar-brand d-flex  pt-3 px-lg-5">
 <img src='/logobureauetude.png' style={{width:'180px',height:'45px'}}/>
    </a>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a href="/" className="nav-item nav-link active">Accueil</a>

            <a href="/services" className="nav-item nav-link">Services</a>
            <a href="/projects" className="nav-item nav-link">Projects</a>
            <a href="/about" className="nav-item nav-link">About !</a>
           {/*        <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu fade-up m-0">
            
                    <a href="#" className="dropdown-item">About</a>
                </div>
            </div>*/}
     
            <a href="/login" className="nav-item nav-link">Contact</a>
        </div>
        <a href="#" className="btn btn-primary py-4 d-none d-lg-block">Demander un devis<i className="fa fa-arrow-right ms-3"></i></a>
    </div>
</nav></>
  );
}

export default Navbar;
