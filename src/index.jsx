import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import { ContextProvider } from './Components/utils/global.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='home' index element={<Home/>}/>
          <Route path='contacto' element={<Contact/>}/>
          <Route path='favs' element={<Favs/>}/>
          <Route path='dentist/:id' element={<Detail/>}/>
        </Route>
      </Routes>  
    </Router>
  </ContextProvider>
);


