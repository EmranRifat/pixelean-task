import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-[#0F141F] text-[#97A4C1]">
       
         <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
      
      
        <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>



      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl text-left text-[#FFFFFF]">SMK LTD.</Link>
      </div>
<ul className=" nav">

<li  className="btn btn-ghost normal-case  " ><Link to="/">Dashboard</Link></li>  
<li  className="btn btn-ghost normal-case  " ><Link to=" ">Cargo Gear</Link></li>  
<li  className="btn btn-ghost normal-case  " ><Link to=" ">Breakdown</Link></li>  
<li  className="btn btn-ghost normal-case  " ><Link to=" ">Daily Report</Link></li>  
<li  className="btn btn-ghost normal-case  " ><Link to=" ">Cargo Operation</Link></li>  
<li  className="btn btn-ghost normal-case  " ><Link to=" ">Bunker</Link></li>  
<li  className="btn btn-ghost normal-case  " ><Link to=" ">Time Loss</Link></li>  
<li  className="btn btn-ghost normal-case  " ><Link to=" ">Port Time Out</Link></li>  
{/* <li  className="btn btn-ghost normal-case  " ><Link to=" ">Ballast </Link></li>   */}
 <li  className="btn btn-ghost normal-case  " ><Link to=" ">Demarrage & Despatch</Link></li>   
{/* <li  className="btn btn-ghost normal-case  " ><Link to=" ">Voyage summary</Link></li>    */}
</ul>


      <div className="flex-none gap-2 ">
        {/* <div className="form-control ">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div> */}
        <div className="dropdown dropdown-end">
          {/* <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="jjj" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
           */}
        </div>
       
      </div>
   
    </div>
  );
};

export default Header;
