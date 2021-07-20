import React from 'react';
import './css/logo.css';

function Logo({link,text}) {
    return (
        <>
            <div className="col-lg-2 col-md-2 col-sm-6 col-6 m-4 logo">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 bg-white d-flex align-items-center justify-content-center shadow" style={{height:"160px",width:"160px",borderRadius:"10%"}}>
                    {link?<img src={link} alt="logo" style={{height:"80px",width:"80px"}}/>:<></>}
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 my-2 d-flex align-items-center justify-content-center" style={{height:"60px",width:"160px"}}>
                    {text?<div className="h5">{text}</div>:<></>}
                </div>
            </div>
        </>
    )
}

export default Logo
