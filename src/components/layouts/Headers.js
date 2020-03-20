import React from 'react';
import Logo from '../../FrontendAssets/logo.svg';
import Profile from '../../FrontendAssets/profile.svg';


 const Headers = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
            <div className="container">
              <a className="navbar-brand" href="#" style={{marginLeft:'-100px'}}>
              <img src={Logo} alt="logo" height="50"/>
              <span>Intugine</span>
             </a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarResponsive" style={{marginRight:'-100px'}}>
             <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                <a className="nav-link" href="#">Home
                    <span className="sr-only">(current)</span>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Brands</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Transporters</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" style={{background:'#e6e6e6',borderRadius:'100%',height:'40px',width:'40px',textAlign:'center'}}>
                <img src={Profile} alt="profile" height="20" width="20" style={{marginBottom:'5px'}} />  
                </a>
                </li>
            </ul>
            </div>  
            </div>
            </nav>
        </div>
    )
}

export default Headers;
