import React from 'react';
import './App.css';
import Navbar from './components/shared/Navbar';
import { TiThMenu } from 'react-icons/ti'
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/common/Home';
import Dashboard from './components/pages/admin/Dashboard';
import ManageProducts from './components/pages/admin/ManageProducts';
import { AllProductsRoute, CartRoute, DashboardRoute, HelpAndSupportRoute, HomeRoute, ManageOrdersRoute, ManageProductsRoute, ManageUsersRoute, OrderRoute, ProfileRoute, RefundRoute, ReviewProductsRoute, SettingsRoute, TransactionsRoute } from './routes/routes';
import ManageUsers from './components/pages/admin/ManageUsers';
import ReviewProducts from './components/pages/admin/ReviewProducts';
import ManageOrders from './components/pages/admin/ManageOrders';
import AllProducts from './components/pages/common/AllProducts';
import Profile from './components/pages/common/Profile';
import Cart from './components/pages/common/Cart';
import Orders from './components/pages/common/Orders';
import Refunds from './components/pages/common/Refunds';
import Transactions from './components/pages/common/Transactions';
import Settings from './components/pages/common/Settings';
import HelpSupport from './components/pages/common/HelpSupport';
function App() {
  return (
    <div className="flex relative App">
      <section className="w-[12%] sm:w-[32%] h-screen fixed">
        <div className="h-[100%] px-[10px] pt-[35px] bg-[#F7F5F2]">
          <TiThMenu className="absolute right-[2px] text-3xl top-0 cursor-pointer" />
          <Navbar />
        </div>
      </section>
      <section className="w-[88%] ml-[12%] sm:ml-[32%] sm:w-[68%]">
        <Routes>
          <Route path={HomeRoute} element={<Home />} />
          <Route path={DashboardRoute} element={<Dashboard />} />
          <Route path={ManageProductsRoute} element={<ManageProducts />} />
          <Route path={ManageUsersRoute} element={<ManageUsers />} />
          <Route path={ReviewProductsRoute} element={<ReviewProducts />} />
          <Route path={ManageOrdersRoute} element={<ManageOrders />} />
          <Route path={AllProductsRoute} element={<AllProducts />} />
          <Route path={ProfileRoute} element={<Profile />} />
          <Route path={CartRoute} element={<Cart />} />
          <Route path={OrderRoute} element={<Orders />} />
          <Route path={RefundRoute} element={<Refunds />} />
          <Route path={TransactionsRoute} element={<Transactions />} />
          <Route path={SettingsRoute} element={<Settings />} />
          <Route path={HelpAndSupportRoute} element={<HelpSupport />} />

        </Routes>

      </section>
    </div>
  );
}

export default App;
