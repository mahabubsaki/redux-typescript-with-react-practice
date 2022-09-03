import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { TiThMenu } from 'react-icons/ti'
function App() {
  return (
    <div className="flex relative App">
      <section className="w-[12%] sm:w-[32%] h-screen fixed">
        <div className="h-[100%] p-[25px] bg-[#F7F5F2]">
          <TiThMenu className="absolute right-[2px] text-3xl top-0 cursor-pointer" />
          <Navbar />
        </div>
      </section>
      <section className="w-[88%] ml-[12%] sm:ml-[32%] sm:w-[68%]">


      </section>
    </div>
  );
}

export default App;
