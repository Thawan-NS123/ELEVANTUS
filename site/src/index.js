import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
        <Routes>
            <Route path='/' element={ <LandingPage /> }/>
            <Route path='/login' element={ <Login /> }/>
            <Route path='/menu' element={ <Menu /> }/>
            <Route path='/cadastro' element={ < Cadastro /> }/>
            <Route path='/consulta' element={ <Consulta /> }/>       
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


