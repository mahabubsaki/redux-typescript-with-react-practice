import React from 'react';
import './App.css';
import { AiFillHome } from 'react-icons/ai'
import { FaMoneyBill, FaUserAlt, FaRegListAlt } from 'react-icons/fa'
import { RiDashboardFill } from 'react-icons/ri'
import { MdSettings, MdOutlineProductionQuantityLimits, MdAddCircleOutline, MdOutlineManageSearch, MdOutlineManageAccounts, MdOutlinePreview } from 'react-icons/md'
import { GiHelp } from 'react-icons/gi'
import { RiRefund2Line } from 'react-icons/ri'
import { FiShoppingCart } from 'react-icons/fi'
import { CgPlayListCheck } from 'react-icons/cg'

function App() {
  return (
    <div className="flex relative App">
      <section className="w-[12%] sm:w-[30%] h-screen fixed">
        <div className="overflow-auto h-[100%] p-[20px] bg-[#F7F5F2]">
          <div className="border bg-[#393e46] rounded-xl flex flex-col p-2 h-full relative">
            <p className="text-2xl text-center mt-2 mb-10 font-bold">Unnamed Dashboard</p>
            <div className="p-[10px] bg-[#277BC0] text-white flex gap-3 text-xl items-center rounded-xl">
              <AiFillHome /> <span>Home</span>
            </div>

            {/* admin route start here */}
            <div className="p-[10px] bg-[transparent] text-white flex gap-3 text-xl items-center rounded-xl">
              <RiDashboardFill /> <span>Dashboard</span>
            </div>
            <div className="p-[10px] bg-[transparent] text-white flex gap-3 text-xl items-center rounded-xl">
              <MdOutlineManageSearch /> <span>Manager Products</span>
            </div>
            <div className="p-[10px] bg-[transparent] text-white flex gap-3 text-xl items-center rounded-xl">
              <MdOutlineManageAccounts /> <span>Manage Users</span>
            </div>
            <div className="p-[10px] bg-[transparent] text-white flex gap-3 text-xl items-center rounded-xl">
              <MdOutlinePreview /> <span>Review Products</span>
            </div>
            <div className="p-[10px] bg-[transparent] text-white flex gap-3 text-xl items-center rounded-xl">
              <FaRegListAlt /> <span>Manage Orders</span>
            </div>
            {/* admin route ends here */}
            {/* user route start here */}
            <div className="p-[10px] bg-[transparent] text-white flex gap-3 text-xl items-center rounded-xl">
              <MdOutlineProductionQuantityLimits /> <span>All Products</span>
            </div>
            <div className="p-[10px] bg-[transparent] text-white flex gap-3 text-xl items-center rounded-xl">
              <MdAddCircleOutline /> <span>Add Product</span>
            </div>
            <div className="p-[10px] bg-[transparent] text-white flex gap-3 text-xl items-center rounded-xl">
              <FaUserAlt /> <span>My Profile</span>
            </div>
            <div className="p-[10px] bg-[transparent] text-white flex gap-3 text-xl items-center rounded-xl">
              <FiShoppingCart /> <span>My Cart</span>
            </div>
            <div className="p-[10px] bg-[transparent] text-white flex gap-3 text-xl items-center rounded-xl">
              <CgPlayListCheck /> <span>My Orders</span>
            </div>
            <div className="p-[10px] bg-[transparent] text-white flex gap-3 text-xl items-center rounded-xl">
              <RiRefund2Line /> <span>My Refunds</span>
            </div>
            <div className="p-[10px] bg-[transparent] text-white flex gap-3 text-xl items-center rounded-xl">
              <FaMoneyBill /> <span>My Transactions</span>
            </div>
            <div className="p-[10px] bg-[transparent] text-white flex gap-3 text-xl items-center rounded-xl">
              <MdSettings /> <span>Settings</span>
            </div>
            <div className="p-[10px] bg-[transparent] text-white flex gap-3 text-xl items-center rounded-xl">
              <GiHelp /> <span>Help And Support</span>
            </div>
            {/* user route ends here */}
            <button className="absolute bottom-0 rounded-xl p-[10px] w-full left-0 bg-[red]">
              Logout
            </button>
          </div>
        </div>
      </section>
      <section className="w-[88%] ml-[12%] sm:ml-[30%] sm:w-[70%]">
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>


        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>



      </section>
    </div>
  );
}

export default App;
