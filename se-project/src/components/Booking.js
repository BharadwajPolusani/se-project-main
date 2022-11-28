import { useState, useEffect, useRef } from "react";
import React from "react";
import { BrowserRouter, useNavigate, Link, Router, Route, Routes} from "react-router-dom";
//write an api to fetch locations on page reload 
import '../../src/components/Booking.css';
import logo from './../images/logo.png';

const Booking = () => {

    const [selected, setSelected] = React.useState("");
    const [selectedDate, setSelectedDate] = React.useState("");
    const [selectService, setSelectService] = React.useState("");
    const [spinner, setSpinner] = useState(false); 
     
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
        setSpinner(true);
        fetch(`http://localhost:8080/appointment`, {
          method:"POST",
          headers:{
            "Content-Type" : "application/json",
            token : localStorage.getItem('token'),
          },
          body: JSON.stringify(newAccount)
        })
        .then(res=>{
            setSpinner(false);
            if (res.status === 201 || res.status === 200){
              alert("Booking successful! Please check email for details.")
              return res.json();
            } else{
               alert('Try again!! Something went wrong.');
            }
          })
          .then((res) => {
            console.log(res)
        if(res!==null){
          //navigate("/");
        }else{
          alert('fails');
        }
          });

          e.target.reset();
          serviceRef.current.value = '';
          locationRef.current.value = '';
          dateRef.current.value = '';
          slotRef.current.value = '';
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
        }
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
        });
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
    locs = locations && locations.map((el) => <option key={el.cityState}>{el.cityState}</option>);
  }

  const navigate=useNavigate()
  
return (
    <div className="class">
        <form className="add-form" onSubmit={onSubmit}>
       {spinner && (
        <alert>Booking your slot .....</alert>
        )}
        <div style = {{width: '100%',
          height: '100px',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'space-between',
          position: 'relative'}}>
          <div  style={{width:'30%'}}>
            <img src={logo} style={{height: 100, width:100, float:'left' , marginTop: 10, margin:40}} alt="logo" />        
          </div>
          <div style={{width:'60%'}}>
          <h1 className='Title'
          style={{marginLeft:70, marginTop: 10}}
          >Book Your Slot</h1>
          </div>
          <div style={{width:'10%'}}>
          <button 
          style={{cursor:'pointer',width:100, height:40, marginTop: 10,textAlign:'center',color: 'white',backgroundColor:'black',borderColor: 'black'}}
          onClick={() => {
              navigate("/");
              }}>
            Log Out
          </button>
          </div>
        </div>
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
        

    </div>
        )
  //        }
}
export default Booking;