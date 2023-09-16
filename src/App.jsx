
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import React from "react";



function App() {
  return (


      <div className="App">         
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>

  );
}

export default App;
