import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Sidebar/Sidebar';
import Header from '../Shared/Header/Header';


const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-base-200">
          {/* <!-- Page content here --> */}
          {/* <h4 className='text-primary text-2xl'>welcome to deshboard</h4> */}
          <Outlet></Outlet>
          {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        
        </div> 
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-60 bg-[#0F141F] text-[#97A4C1] ">
            {/* <!-- Sidebar content here --> */}
            <Sidebar></Sidebar>
        

            
          </ul>
        
        </div>
      </div>
        </div>
    );
};

export default DashboardLayout;