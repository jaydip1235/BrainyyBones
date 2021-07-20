import React, { useEffect } from 'react';
import './css/home.css';
import png1 from './assets/pngs/png1.png';
import png2 from './assets/pngs/png2.png';
import png3 from './assets/pngs/png3.png';
import png4 from './assets/pngs/png4.png';
import Logo from './Logo';
import png5 from './assets/pngs/png5.png';
import png6 from './assets/pngs/png6.png';
import png7 from './assets/pngs/png7.png';
import png8 from './assets/pngs/png8.png';
import png9 from './assets/pngs/png9.png';
import png10 from './assets/pngs/png10.png';
import png11 from './assets/pngs/png11.png';
import png12 from './assets/pngs/png12.png';
import png13 from './assets/pngs/png13.png';
import png14 from './assets/pngs/png14.png';
import png15 from './assets/pngs/png15.png';
import png16 from './assets/pngs/png16.png';
import png17 from './assets/pngs/png17.png';
import Nav from './Nav';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useHistory } from 'react-router-dom';

function Home() {

    const history=useHistory();

    useEffect(() => {
		AOS.init({
		  duration : 1000
		});
	  }, []);

    const register=()=>{
        console.log("Join")
        history.push('/register');
    }

    return (
        <>
        <Nav/>
        <div className="container-fluid d-flex align-items-center justify-content-center flex-column main-div">
            <div className="comp1 mt-5" data-aos={"fade-up"}>
                <div className="card1 my-auto text-start" style={{ width: "400px", height: "300px" }} onClick={()=>{console.log("Card1")}}>
                    <div className="h3 text-success my-4 mx-5"><strong>Your 2:00 a.m. Lost Thoughts Now Got an EAR</strong></div>
                    <div className="text-success text-center my-4" style={{ fontSize: "1.2rem" }}>For Anyone, Anywhere, at Anytime.</div>
                    <button className="join btn btn-success ms-5 py-1 px-3" onClick={register}>Join Now</button>
                </div>
                <div className="card2 my-auto ms-5" style={{ width: "80%", height: "96%" }}>
                    <div className="card3 mx-auto m2-5">
                        <div className="text-white text-start my-4 mx-4" style={{ fontSize: "1.2rem" }}>We know how it feels to be awake all night, falling prey to overthinking & not able to speak up about it in the morning.</div>
                        <div className="h3 text-white my-4 mx-5 text-center"><strong>You Are Not Alone. We heard you</strong></div>

                    </div>
                </div>
            </div>
            <div className="comp2 d-flex flex-wrap justify-content-center align-items-center border text-center" data-aos={"fade-right"}>
                <Logo link={png1} text="Liberating Mindset" />
                <Logo link={png15} text="Freedom to your Caged Thoughts" />
                <Logo link={png16} text="Moving Forward Approach" />
                <Logo link={png2} text="Stress-relieving Attitude" />
                <Logo link={png3} text="A sense of Security" />
                <Logo link={png4} />
            </div>
            <div className="comp3 d-flex flex-column align-items-center justify-content-center" data-aos={"fade-left"}>
                <div className="h4 text-success text-center my-4">Our Team Of Psychologist Professionals & Students.</div>
                <button className="btn btn-success w-25 py-2 my-4 mx-auto" style={{ fontSize: "1.4rem" }} onClick={register}>Register for Brainy Ears</button>
                <div className="h3 text-success text-center my-4">Just One Click Away.</div>
                <div className="text-success text-center my-4" style={{ fontSize: "1.2rem" }}>If you want to vent without worrying about being the talk of the town.Then, we are your safety net.</div>
                <div className="h2 text-success text-center my-4">Take The First Step. Walk The Right Way.</div>
            </div>
            <div className="comp4 d-flex flex-wrap align-items-center justify-content-center border" data-aos={"fade-right"}>
                <div className="col-lg-4 col-md-4 col-sm-8 col-10 border">
                    <p className="text-center w-75 mx-auto my-4 h6" style={{ color: "#09371F" }}>We just need you to trust us and follow these steps to register for this platform:</p>
                    <div className="bg-dark mx-auto my-4" style={{ height: "160px", width: "260px" }}></div>
                    <div className="h3 text-success text-center my-4">Click on the register button</div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-8 col-10 d-flex flex-row flex-wrap align-items-center justify-content-center mx-auto" data-aos={"fade-left"}>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 my-4">
                        <img src={png5} alt="logo" className="ms-0" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-8 my-4">
                        <div className="h4 text-success text-start ms-4">Step 1</div>
                        <div className="text-success text-start mt-2 ms-4">Fill your detail.</div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 my-4">
                        <img src={png6} alt="logo" className="ms-0" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-8 my-4">
                        <div className="h4 text-success text-start ms-4">Step 2</div>
                        <div className="text-success text-start mt-2 ms-4">Choose your preferred date and time.</div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 my-4">
                        <img src={png7} alt="logo" className="ms-0" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-8 my-4">
                        <div className="h4 text-success text-start ms-4">Step 3</div>
                        <div className="text-success text-start mt-2 ms-4">Book and confirm your active listening session.</div>
                    </div>
                </div>
            </div>
            <div className="comp5 d-flex flex-column align-items-center justify-content-center" data-aos={"fade-left"}>
                <button className="btn btn-success w-25 py-2 my-5" style={{ fontSize: "1.4rem" }} onClick={register}>Register for Brainy Ears</button>
                <div className="h4 text-dark text-center my-4">Brainy Ears is Your Light at The End of The Tunnel.</div>
                <img src={png17} alt="logo" style={{width:"60vw"}}/>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-row flex-wrap align-items-center justify-content-center mx-auto" data-aos={"fade-right"}>
                
                <div className="text-dark text-center my-4" style={{ fontSize: "1.1rem" }}>An initiative by Brainy Bones, Brainy Ears is an active listening platform where you can vent out anything at any time, at any place.</div>
                <div className="h4 text-dark text-center my-4">Brainy Ears is the active listening platform in India.</div>
            </div>
            <div className="h4 text-center my-4" data-aos={"fade-right"}><strong>Brainy Ears is the </strong><strong className="bg-success text-white text-center px-2 pb-1 border border-success rounded">Safest and Secured</strong><strong> active listening platform in India.</strong></div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-row flex-wrap align-items-center justify-content-center mx-auto">
                <div className="h5 text-success text-center my-4" data-aos={"fade-right"}>Just think of us as a mirror to your thoughts.</div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-row flex-wrap align-items-center justify-content-center mx-auto" data-aos={"fade-left"}>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex flex-column align-items-center justify-content-center mx-auto my-4">
                        <img src={png11} alt="logo" style={{ width: "8rem" }} />
                        <div className="h4 text-success text-center my-4">We won’t LEAVE.</div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex flex-column align-items-center justify-content-center mx-auto my-4">
                        <img src={png12} alt="logo" style={{ width: "6rem" }} />
                        <div className="h4 text-success text-center my-4">We won’t JUDGE.</div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex flex-column align-items-center justify-content-center mx-auto my-4">
                        <img src={png13} alt="logo" style={{ width: "8rem" }} />
                        <div className="h4 text-success text-center my-4">We won’t INTERUPT.</div>
                    </div>
                </div>
            </div>
            <div className="comp6 d-flex flex-wrap justify-content-center border bg-success" data-aos={"fade-right"}>
                <div className="col-lg-5 col-md-5 col-sm-8 col-10 d-flex flex-column align-items-center justify-content-center mx-auto h-75">
                    <img src={png14} alt="logo" style={{ width: "8rem" }} className="my-4" />
                    <p className="text-center text-white w-75 mx-auto my-4 h6">According to Maslow, a great American psychologist,  the first and foremost need of a human is - ‘Security & Safety.’</p>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-8 col-10 border h-75 bg-white text-center">
                    <p className="text-center text-success w-75 mx-auto my-4 h5">You’re already carrying baggage from your past and complexities. Let us take your load off.</p>
                    <div className="bg-dark mx-auto my-4" style={{ height: "160px", width: "260px" }}></div>
                    <button className="btn btn-success w-75 py-2 mt-4" style={{ fontSize: "1.4rem" }} onClick={register}>Register for Brainy Ears</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
