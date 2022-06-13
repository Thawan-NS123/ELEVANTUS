import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToastContainer } from 'react-toastify';


import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom'


import LandingPage from './pages/landingPage';
import Login from './pages/login';
import Menu from './pages/menu';
import Cadastro from './pages/cadastro';
import Consulta from './pages/consulta';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer/>
        <Routes>
            <Route path='/'         element={ <LandingPage /> }/>
            <Route path='/login'    element={ <Login /> }/>
            <Route path='/menu'     element={ <Menu /> }/>

            <Route path='/cadastro' element={ < Cadastro /> }/>
            <Route path='/alterar/:idParam' element={ < Cadastro /> }/>

            <Route path='/consulta' element={ <Consulta /> }/>       
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


