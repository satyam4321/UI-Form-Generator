import React from 'react';

import logo from './logo.svg';

import './App.css';

import MyForm from './containers/form/form';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';

import Sample from './components/Sample';


import Home from './components/Home';

import ReactApp from './components/ReactApp';

function App(props) {


  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/ReactApp" element={<ReactApp />} />
          <Route path="/Sample" element={<Sample />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;