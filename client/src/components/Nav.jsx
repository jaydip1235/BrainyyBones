import React from 'react'
import {NavLink, useHistory} from 'react-router-dom';
import './css/nav.css';
import Logo1 from './assets/pngs/bblogo.png';

function Nav() {
    const history=useHistory();
    return (
        <div>
            {
                window.location.href!="https://brainyears.herokuapp.com/"?
                    <React.Fragment>
                    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand m-0 ms-2 mt-0" exact to='/'><img src={Logo1} alt="Logo1" style={{width:"120px"}}/></NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
                                <li className="nav-item m-2">
                                        {/* <NavLink className="nav-link btn btn-info shadow p text-white border border-info rounded mt-1 mb-1 p-2" exact to='/register'>Join us</NavLink> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </React.Fragment>
                :
                <React.Fragment>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand m-0 ms-2 mt-0" exact to='/'><img src={Logo1} alt="Logo1" style={{width:"120px"}}/></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
                            <li className="nav-item m-2">
                                    <NavLink className="nav-link btn btn-info shadow p text-white border border-info rounded mt-1 mb-1 p-2" exact to='/register'>Join us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
            }
        
        </div>
    )
}

export default Nav
