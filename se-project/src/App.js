import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Registration from './components/Registration';
import Booking from './components/Booking';
//import Samplebooking from './components/Samplebooking';
//export default function App()

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
