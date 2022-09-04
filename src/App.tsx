import React, { Dispatch } from 'react';
import './App.css';
import Navbar from './components/shared/Navbar';
import { TiThMenu } from 'react-icons/ti'
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import { useDispatch } from 'react-redux';
import { toggleLarge, toggleSmall } from './reducers/navSlice';
import { AnyAction } from '@reduxjs/toolkit';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Home from './components/pages/common/Home';
import NavBackdrop from './components/shared/NavBackdrop';
import { useDishes } from './hooks/useDishes';

function App() {
  useDishes()
  const isLargeOpen: boolean = useAppSelector(state => state.navSlice.isLargeDevice)
  const isSmallOpen: boolean = useAppSelector(state => state.navSlice.isSmallDevice)
  const dispatch: Dispatch<AnyAction> = useDispatch()
  return (
    <>
      <div className="flex relative App">
        <section className={`w-[85px] ${!isLargeOpen ? 'my-xl:w-[32%]' : 'my-xl:w-[12%]'} duration-100 h-screen fixed`}>
          <div className="h-[100%] px-[10px] pt-[35px] bg-[#F7F5F2]">
            {isLargeOpen ? <TiThMenu className="absolute hidden my-xl:block right-[2px] text-3xl top-0 cursor-pointer" onClick={() => dispatch(toggleLarge(!isLargeOpen))} /> : <AiOutlineCloseCircle className="absolute hidden my-xl:block right-[2px] text-3xl top-0 cursor-pointer" onClick={() => dispatch(toggleLarge(!isLargeOpen))} />}
            <TiThMenu className="absolute block my-xl:hidden right-[2px] text-3xl top-0 cursor-pointer" onClick={() => dispatch(toggleSmall(!isSmallOpen))} />
            <Navbar />
          </div>
        </section>
        <section className={`w-[88%] duration-100 ml-[85px] ${!isLargeOpen ? 'my-xl:ml-[32%] my-xl:w-[68%]' : 'my-xl:ml-[12%] my-xl:w-[88%]'}`}>
          <Routes>
            {/* {routeArray.map(route => <Route path={route.path} element={route.elements} />)} */}
            <Route path='/' element={<Home />} />
          </Routes>
        </section>
      </div>
      {isSmallOpen && <NavBackdrop />}
    </>
  );
}

export default App;
