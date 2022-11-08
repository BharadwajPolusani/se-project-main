import { useState } from "react";
import React from "react";
import { BrowserRouter, useNavigate, Link, Router, Route, Routes} from "react-router-dom";

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
        nameofservice: "",
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
    //let location = 'Overland Park';
    let bookingTimes= [
      "9AM",
      "10AM",
      "11AM",
      "12AM",
      "1PM",
      "2PM",
      "3PM",
      "4PM",
      "5PM"
  ];

    const changeCity = (event) => {
        setSelected(event.target.value);
        //console.log('222')
    }

    const changeDate = (event) => {
      // bookingTimes=api response
      
      setSelectedDate(event.target.value);
      console.log(event.target.value);
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
    // bookingTimes=[""+Math.random()*10 +" AM"];
    
    //console.log(bookingTimes)
    //bTs = bookingTimes.map((el) => <div><input type="select" name={el} id={el} value={el}></input> {el}</div>);
    bTs = bookingTimes.map((el) => <option key={el}>{el}</option>);
  }

return (
    <div>
        <form className="add-form" onSubmit={onSubmit}>
            <select onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, service: e.target.value });
              //console.log(value);
            }}>
            <option value="Bank">Bank</option>
            <option selected value="Hospital">Hospital</option>
            <option value="Saloon">Saloon</option>
            </select>
            <br/>
            <br/>
            <select
             onChange={(e) => {
              changeCity(e);
              const value = e.target.value;
              updatenewacc({ ...newAccount, location: e.target.value });
              //console.log(value);
            }}>
            <option>Choose City</option>
            <option value="Overland Park">Overland Park</option>
            <option value="Kansas City">Kansas City</option>
            <option value="Lees Summit">Lee's Summit</option>
            <option value="Corbin Park">Corbin Park</option>
            </select>
            <br/>
            <br/>
            <select 
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, nameofservice: e.target.value });
              //console.log(value);
            }}>
            {
              options
            }
            </select>
            <br/>
            <br/>
            <input
            onChange={(e) => {
              changeDate(e);
              const value = e.target.value;
              updatenewacc({ ...newAccount, date: e.target.value });
              //console.log(value);
            }}
            name="BookingDate"
            required={true}
            type="date"
            style={{width:400, height:40, marginTop:10,textAlign:'center'}}
            placeholder=""
            //onChange={changeDate}
            
            
          />
          <br/>
          <br/>
          <select onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, slot: e.target.value });
              //console.log(value);
            }}>{bTs}</select>
          <br/>
          <br/>
          <input type="submit" value="Submit" className="btn" 
           //onClick={testing} 
           style={{width:100, height:40, marginTop:10,textAlign:'center',color: 'blue',borderColor: 'blue'}} />
          
        </form>

    </div>
        )
  //        }
}
export default Booking;