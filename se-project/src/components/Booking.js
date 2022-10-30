import { useState } from "react";
import React from "react";
import { BrowserRouter, useNavigate, Link, Router, Route, Routes} from "react-router-dom";

const Booking = () => {

    const [selected, setSelected] = React.useState("");
    const locationWiseHospitals = {
        'Overland Park': ['OP Hospital', 'OP Hospital 2'],
        'Kansas City': ['KC Hospital', 'KC Hospital 2'],
        'Lees Summit': ['LS Hospital', 'LS Hospital 2'],
        'Corbin Park': ['CP Hospital', 'CP Hospital 2'],
    }

    let location = 'Overland Park';

    const changeCity = (event) => {
        setSelected(event.target.value);
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

return (
    <div>
        <form>
            <select>
            <option value="Bank">Bank</option>
            <option selected value="Hospital">Hospital</option>
            <option value="Saloon">Saloon</option>
            </select>
            <br/>
            <br/>
            <select onChange={changeCity}>
            <option selected value="Overland Park">Overland Park</option>
            <option value="Kansas City">Kansas City</option>
            <option value="Lees Summit">Lee's Summit</option>
            <option value="Corbin Park">Corbin Park</option>
            </select>
            <br/>
            <br/>
            <select>
            {
              options
            }
            {/* <option value="OP Hospital">OP Hospital</option> */}
            {/* <option selected value="KC Hospital">KC Hospital</option>
            <option value="LS Hosital">LS Hosital</option>
            <option value="CP Hospital">CP Hospital</option> */}
            </select>
        </form>
    </div>
        )
}
export default Booking;