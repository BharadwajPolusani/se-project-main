import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter, useNavigate, Link, Router, Route, Routes} from "react-router-dom";
//write an api to fetch locations on page reload 
import '../../src/components/Booking.css';

const Booking = () => {

    const [selected, setSelected] = React.useState("");
    const [selectedDate, setSelectedDate] = React.useState("");
    const locationWiseHospitals = {
        'Overland Park': ['OP Hospital', 'OP Hospital 2'],
        'Kansas City': ['KC Hospital', 'KC Hospital 2'],
        'Lees Summit': ['LS Hospital', 'LS Hospital 2'],
        'Corbin Park': ['CP Hospital', 'CP Hospital 2'],
    }
  
    //const BookingDetails = () => {
      const [newAccount, updatenewacc] = useState({
        service: "",
        location: "",
        //nameofservice: "",
        date: "",
        slot: ""
      });

      const onSubmit = (e) => {
        e.preventDefault();
        console.log(newAccount)
        let a = {
          // service: e.target.service.value,
          // city: e.target.city.value,
          // hospital: e.target.hospital.value,
          // date: e.target.date.value,
          // slot: e.target.slot.value
        };
        updatenewacc(a);
        console.log(newAccount);
        console.log(JSON.stringify(newAccount));
        //testing(e);
      };
      let [bookingTimes, setBookingTimes] = useState([]);
      // setBookingTimes(["Choose Slot"]);
    //let location = 'Overland Park';
    const changeCity = (event) => {
        setSelected(event.target.value);
        //console.log('222')
    }

    const changeDate = (event) => {
      // bookingTimes=api response
      fetch(`http://localhost:8080/slots/${event.target.value}`, {
        method:"GET",
        headers:{
          "Content-Type" : "application/json",
          token : localStorage.getItem('token'),
        },
      })
      .then(res=>{
          if (res.status === 201 || res.status === 200){
            return res.json();
          } else{
            // alert('Something went wrong!!');
          }
        })
        .then((data) => {
          data.unshift("Choose Slot");
          setBookingTimes(data);
          setSelectedDate(event.target.value);
          console.log(event.target.value, data);
        })
  }

  let type = null;

  
  /** This will be used to create set of options that user will see */
  let options = null;
  
  /** Setting Type variable according to dropdown */
  type = locationWiseHospitals[selected];
  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  let bTs;
  if (selectedDate) {
    bTs = bookingTimes && bookingTimes.map((el) => <option key={el}>{el}</option>);
  }

return (
    <div>
        <form className="add-form" onSubmit={onSubmit}>
            <select class="form-field"
             required={true}
             onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, service: e.target.value });
              //console.log(value);
            }}>
            <option selected>Choose Service</option>
            <option value="Bank">Bank</option>
            {/* <option value="Hospital">Hospital</option>
            <option value="Saloon">Saloon</option> */}
            </select>
            <br/>
            <br/>
 
            <select class="form-field" 
             onChange={(e) => {
              changeCity(e);
              const value = e.target.value;
              updatenewacc({ ...newAccount, location: e.target.value });
              //console.log(value);
            }}>   //city,state should be populated with the results'response' from /location api call
            <option>Choose City</option>
            <option value="Overland Park">Overland Park</option>
            <option value="Kansas City">Kansas City</option>
            <option value="Lees Summit">Lee's Summit</option>
            <option value="Corbin Park">Corbin Park</option>
            </select>
            <br/>
            {/* <select class="form-field" 
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, nameofservice: e.target.value });
              //console.log(value);
            }}>
            {
              options
            }
            </select> */}
            <br/>
            <input
            class="form-field"
            onChange={(e) => {
              changeDate(e);
              const value = e.target.value;
              updatenewacc({ ...newAccount, date: e.target.value });
              //console.log(value);
            }}
            name="BookingDate"
            required={true}
            type="date"
            placeholder=""
            //onChange={changeDate}
            
            
          />
          <br/>
          <br/>
          <select class="form-field" onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, slot: e.target.value });
              //console.log(value);
            }}>{bTs}</select>
          <br/>
          <br/>
          <input class="form-field" type="submit" value="Submit" className="btn" 
           //onClick={testing} 
           style={{width:400, height:40, marginTop:10,textAlign:'center'}} />
          
        </form>

    </div>
        )
  //        }
}
export default Booking;