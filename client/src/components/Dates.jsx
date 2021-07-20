import React, { useEffect, useState } from "react";
import { useHistory  , useParams} from "react-router-dom";
import axios from "axios";
import "./css/register.css";
import Nav from "./Nav";
import DatePicker from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import "./css/dates.css";
import Time from './Time';
import AOS from 'aos';
import "aos/dist/aos.css";

function Dates() {
  const history = useHistory();


  const [time, setTime] = useState("");
  const [date, setDate] = useState(new Date());
  const [dateString, setDateString] = useState("");
  const [issue, setIssue] = useState("");

  const {name,email,phone} = useParams()

  const selectedTime = (t) => {
    setTime(t);
  };
  useEffect(() => {
		AOS.init({
		  duration : 1000
		});
	  }, []);

  const postData = async (e) => {
    e.preventDefault();
    console.log("Submitted");
    try {
      if (!dateString.trim() || !time.trim() || !issue.trim()) {
        window.alert("✖️ Don't leave any field empty!");
      } else {
        await fetch('/api/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name,email,phone,date:dateString, time,issue}),
        })
        .then((response) =>{
          if(response.status===404){
            history.push('/error')
          }
          console.log(response.data)
          history.push('/payment-complete')
        }
        )
        .catch((error) => {
          history.push('/error')
        })
        // await axios.post('/api/user/register',{name,email,phone,date:dateString, time,issue},
        //    {
        //            headers: {
        //     'Content-Type': 'application/json'
        //   }
        //    })
        // history.push('/')
        // let data = await res.json();
        // console.log(data);
        // let name = data.data.username;
        // let phone = data.data.phone;
        // let email = data.data.email;
        // let id = data.data._id

        // console.log(data.data.email)
        // const dataPay = {
        //   buyer_name: name,
        //   email: email,
        //   phone: phone,
        //   id: id,
        //   date: dateString,
        //   time: time,
        //   problem: issue,
        //   // redirect_url: `http://localhost:5000/api/private/user/callback/?user_id=${id}`,
        //   redirect_url: `http://localhost:3000/payment-complete/?user_id=${id}`,
        //   webhook_url: '/webhook/',
        // };
      }}catch(e) {
        history.push('/error')
      }

  };

  const yesterday = moment().subtract(1, "day");
  const disablePastDt = (current) => {
    console.log("Past date!");
    return current.isAfter(yesterday);
  };

  return (
    <>
      <Nav />
      <div className="register hello d-flex align-items-center justify-content-center date-bg " >
        <div className="col-lg-6 form-body p-5  text-success date-body " data-aos={"fade-up"}>
          <h1 className="display-3 text-center text-success pb-4">
            <strong>Select Date and Time</strong>
          </h1>
          <select
            value={issue}
            onChange={(e) => {
              setIssue(e.target.value);
            }}
            className="form-select form-select-lg mb-3  p-2 m-2"
            aria-label=".form-select-lg example"
          >
            <option value="" selected disabled hidden>
              What kind of issue you are facing?
            </option>
            <option value="Relationship issues">Relationship issues</option>
            <option value="Stress, anxiety">Stress, anxiety</option>
            <option value="Financial stress">Financial stress</option>
            <option value="Fear of failure/ rejection">
              Fear of failure/ rejection
            </option>
            <option value="Body shaming">Body shaming</option>
            <option value="Peer pressure">Peer pressure</option>
            <option value="Addiction">Addiction</option>
          </select>
          <label
            htmlFor="inputAddress"
            className="form-label"
            style={{ fontSize: "1.4rem" }}
          >
            <strong>Date:</strong>
          </label>
          <DatePicker
            isValidDate={disablePastDt}
            selected={date}
            onChange={(e) => {
              setDate(e);
              setDateString(e.toString().substr(0, 15).trim());
            }}
            timeFormat={false}
            className="form-control p-2 m-2"
            id="inputAddress"
          />
          <label
            htmlFor="inputAddress"
            className="form-label"
            style={{ fontSize: "1.4rem" }}
          >
            <strong>Time: {time ? time : ""}</strong>
          </label>
          <div className="times text-center mt-4">
            <Time getTime={selectedTime}/>
            
            
          </div>
          <button
            type="submit"
            className="btn btn-success d-block py-2 px-2 my-4"
            style={{ fontSize: "1.4rem" }}
            onClick={postData}
          >
            Register
          </button>

        </div>
      </div>
    </>
  );
}

export default Dates;