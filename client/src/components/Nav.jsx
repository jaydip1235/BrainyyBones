import React from 'react'
import {NavLink, useHistory} from 'react-router-dom';
import './css/nav.css';
import Logo1 from './assets/pngs/bblogo.png';

function Nav() {
    const history=useHistory();
    return (
        <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand mx-auto" exact to='/'><img src={Logo1} alt="Logo1" style={{width:"120px"}}/></NavLink>
                    </div>
                </nav>
        </div>
    )
}

export default Nav
