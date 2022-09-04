import React, { Dispatch, useEffect } from 'react';
import './App.css';
import Navbar from './components/shared/Navbar';
import { TiThMenu } from 'react-icons/ti'
import { Route, Routes } from 'react-router-dom';
import { routeArray } from './constant/variables';
import { useAppSelector } from './app/hooks';
import { useDispatch } from 'react-redux';
import { toggleLarge } from './reducers/navSlice';
import { AnyAction } from '@reduxjs/toolkit';

function App() {
  const isLargeOpen: boolean = useAppSelector(state => state.navSlice.isLargeDevice)
  const dispatch: Dispatch<AnyAction> = useDispatch()
  return (
    <div className="flex relative App">
      <section className={`w-[12%] ${!isLargeOpen ? 'sm:w-[32%]' : 'sm:w-[12%]'} duration-500 h-screen fixed`}>
        <div className="h-[100%] px-[10px] pt-[35px] bg-[#F7F5F2]">
          <TiThMenu className="absolute right-[2px] text-3xl top-0 cursor-pointer" onClick={() => dispatch(toggleLarge(!isLargeOpen))} />
          <Navbar />
        </div>
      </section>
      <section className="w-[88%] ml-[12%] sm:ml-[32%] sm:w-[68%]">
        <Routes>
          {routeArray.map(route => <Route path={route.path} element={route.elements} />)}
        </Routes>
      </section>
    </div>
  );
}

export default App;
