import React, {useEffect} from 'react';
import axios from 'axios';
import './css/error.css';
import { NavLink, useHistory } from 'react-router-dom';
import Nav from './Nav';
import './css/error.css';
import HomeIcon from '@material-ui/icons/Home';
import AOS from 'aos';
import "aos/dist/aos.css";


function PaymentComplete() {
    let history = useHistory()

    useEffect(() => {
		AOS.init({
		  duration : 1000
		});
	  }, []);
    return (
        <>
            <Nav />
            <div className="error d-flex align-items-center justify-content-center">
                <div className="col-lg-6 error-body p-5 mt-4 text-success border border-success rounded">
                <h1 className="display-1 text-center text-danger mt-4 mb-4 pcom" data-aos={"fade-right"}><strong>Registration Successful ✅</strong></h1>
                    <NavLink exact to='/' className="home-link"><h1 className="display-6 text-center bg-success text-white w-50 mx-auto p-2 mt-2" data-aos={"fade-left"}><strong>Go to home page <HomeIcon style={{fontSize:"60px"}}/></strong></h1></NavLink>
                </div>
            </div></>
    )
}

export default PaymentComplete