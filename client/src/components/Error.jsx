import React from 'react';
import './css/error.css';
import Nav from './Nav';
import {NavLink} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
// import axios from 'axios';

function Error() {

    return (
        <>
            <Nav />
            <div className="error d-flex align-items-center justify-content-center">
                <div className="col-lg-10 error-body p-5 mt-4 text-success border border-success rounded">
                    <h1 className="display-1 text-center text-danger mt-4 mb-4"><strong>Something went wrong! 😢</strong></h1>
                    <NavLink exact to='/' className="home-link"><h1 className="display-6 text-center bg-success text-white w-50 mx-auto p-2 mt-2"><strong>Go to home page <HomeIcon style={{fontSize:"60px"}}/></strong></h1></NavLink>
                </div>
            </div></>
    )
}

export default Error