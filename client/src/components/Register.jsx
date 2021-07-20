import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useHistory } from 'react-router-dom';
import './css/register.css';
import Nav from './Nav';
import AOS from 'aos';
import "aos/dist/aos.css";



function Register() {
    const history=useHistory();

    useEffect(() => {
		AOS.init({
		  duration : 1000
		});
	  }, []);

	const [name,setName]=useState("");
	const [email,setEmail]=useState("");
	const [phone,setPhone]=useState("");

	const postData=async(e)=>{
		e.preventDefault();
        console.log("Submitted");
		try{
			if(!name.trim() || !phone.trim() || !email.trim()){
                window.alert("✖️ Don't leave any field empty!");
			}
			else{
				
                history.push(`/date/${name}/${email}/${phone}`);
			}
		}catch(error){
			console.log(error);
				window.alert('✖️ Something went wrong!')
			}
	}

    return (
        <>
            <Nav />
            <form className="register d-flex align-items-center justify-content-center" onSubmit={postData}>
                <div className="col-lg-6 form-body p-5 mt-4 text-success" data-aos={"fade-up"}>
                    <h1 className="display-3 text-center text-success"><strong>Join us</strong></h1>
                    <label htmlFor="inputAddress" className="form-label"><strong>Full name:</strong></label>
                    <input type="text" className="form-control p-2 m-2" id="inputAddress" placeholder="Enter your full name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <label htmlFor="inputAddress" className="form-label"><strong>Email:</strong></label>
                    <input type="email" className="form-control p-2 m-2" id="inputAddress" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <label htmlFor="inputAddress" className="form-label"><strong>Phone:</strong></label>
                    <input type="text" className="form-control p-2 m-2" id="inputAddress" placeholder="Enter your mobile number" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
					<input type="submit" className="btn btn-success p-2 mx-2 my-4 " id="inputAddress" value="Next"/>
                    </div>
            </form>
			
			</>
			
    )
}

export default Register
