import { useState, useEffect, useRef } from "react";
import React from "react";
import { BrowserRouter, useNavigate, Link, Router, Route, Routes} from "react-router-dom";
//write an api to fetch locations on page reload 
import '../../src/components/Booking.css';

const Booking = () => {

    const [selected, setSelected] = React.useState("");
    const [selectedDate, setSelectedDate] = React.useState("");
    const [selectService, setSelectService] = React.useState("");

     
    //const BookingDetails = () => {
      const [newAccount, updatenewacc] = useState({
        service: "",
        location: "",
        //nameofservice: "",
        date: "",
        slot: ""
      });
    
      const serviceRef = useRef(null);
      const locationRef = useRef(null);
      const dateRef = useRef(null);
      const slotRef = useRef(null);

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
        e.target.reset();
        serviceRef.current.value = '';
        locationRef.current.value = '';
        dateRef.current.value = '';
        slotRef.current.value = '';

        //testing(e);
      };
      let [bookingTimes, setBookingTimes] = useState([]);
      let [locations, setLocations] = useState([]);
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


  const getLocations = (event) => {
    fetch(`http://localhost:8080/location`, {
      method:"GET",
      headers:{
        "Content-Type" : "application/json"
        //token : localStorage.getItem('token'),
      },
    })
    .then(res=>{
      if (res.status === 201 || res.status === 200){
        return res.json();
      } else{
        alert('Something went wrong!!');
      }
    })
    .then(data => {
      setLocations(data);
          setSelectService(event.target.value);
          console.log(event.target.value, data);

        // res.map((k,v)=>
        // locs = [...locs,k.cityState]);
        // let slocs = locs.map((e1)=><option key={e1}>{e1}</option>);
        // return slocs;
        //    // console.log(locs);
         })
}

  let type = null;

  
  /** This will be used to create set of options that user will see */
  let options = null;
  
  /** Setting Type variable according to dropdown */
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
  let locs;
  if (selectService) {
    locs = locations && locations.map((el) => <option key={el.city}>{el.city}</option>);
  }

  const navigate=useNavigate()
  
return (
    <div className="class">
        <form className="add-form" onSubmit={onSubmit}>
          <h2 className='Title'
          style={{marginLeft:530}}
          >Book Your Slot</h2>
            <select class="form-field"
            ref={serviceRef}
             style={{width:400, height:40, marginTop:10,textAlign:'center'}}
             required={true}
             onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, service: e.target.value });
              getLocations(e);
              //console.log(value);
            }}>
            <option selected disabled = {true} value="">Choose Service ...</option>
            <option value="Bank">Bank</option>
            {/* <option value="Hospital">Hospital</option>
            <option value="Saloon">Saloon</option> */}
            </select>
            <br/>
            <br/>
 
            <select class="form-field" 
            ref={locationRef}
            style={{width:400, height:40, marginTop:10,textAlign:'center'}}
             onChange={(e) => {
              changeCity(e);
              const value = e.target.value;
              updatenewacc({ ...newAccount, location: e.target.value });
              //console.log(value);
            }}><option selected disabled = {true} value="">Choose Location ...</option>
            {locs}
                 
            {/* <option selected disabled = {true} value="">Choose City ...</option>
            {getLocations} */}
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
            ref={dateRef}
            style={{width:400, height:40, marginTop:10,textAlign:'center'}}
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
                       
            
          />
          <br/>
          <br/>
          <select 
          ref={slotRef}
          class="form-field" 
              style={{width:400, height:40, marginTop:10,textAlign:'center'}}
              onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, slot: e.target.value });
              //console.log(value);
            }}><option selected disabled = {true} value="">Choose Slots ...</option>
              {bTs}</select>
          <br/>
          <br/>
          <input class="form-field" type="submit" value="Submit" className="btn" 
           //onClick={testing} 
           style={{width:100, height:40, marginTop:50,textAlign:'center',color: 'black',backgroundColor:'lightBlue',borderColor: 'black'}} />
          
        </form>
        <div>
          <button 
          style={{cursor:'pointer'}}
          onClick={() => {
              navigate("/");
              }}>
            Log Out
          </button>
        </div>

    </div>
        )
  //        }
}
export default Booking;