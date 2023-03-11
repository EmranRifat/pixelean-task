import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../Assects/Group 40278.png";
import img2 from "../../Assects/lady.jpg";
import { AiOutlineDown } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div>
      <img src={img1} alt="" />

      <p className="text-left mt-4">Individual Ship</p>

      <div>
        <div className="dropdown  mt-4 ">
          <label tabIndex={0} className="btn mt-2">
           <div className="flex">
           <div className="avatar">
              <div className="w-8 rounded-full">
                <img src={img2} alt=" nope" />
              </div>
            </div>
          <button className="  ml-4 text-md"> Ansarul Hoque </button>
          <span className="mt-2.5 mx-2"> <AiOutlineDown/></span>
      
           </div>
          </label>
          <ul
            tabIndex={1}
            className="dropdown-content menu p-2 shadow bg-[#2E3A54] ml-6 mt-2 rounded w-52"
          >
            <li>
              <Link>Jahan Brother 2 </Link>

            </li>
            <li>
              <Link>Jahan Brother 2</Link>
            </li>
            <li>
              <Link>Jahan Brother 2</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="dropdown  mt-4 ">
          <label tabIndex={0} className="btn mt-2">
           <div className="flex">
           <div className="avatar">
              <div className="w-8 rounded-full">
                <img src={img2} alt=" nope" />
              </div>
            </div>
          <button className="  ml-4 text-md"> Ansarul Hoque </button>
          <span className="mt-2.5 mx-2"> <AiOutlineDown/></span>
      
           </div>
          </label>
          <ul
            tabIndex={1}
            className="dropdown-content menu p-2 shadow ml-6 bg-[#2E3A54] mt-2 rounded w-52"
          >
            <li>
              <Link>Jahan Brother 2 </Link>

            </li>
            <li>
              <Link>Jahan Brother 2</Link>
            </li>
            <li>
              <Link>Jahan Brother 2</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="dropdown mt-4 ">
          <label tabIndex={0} className="btn mt-2">
           <div className="flex">
           <div className="avatar">
              <div className="w-8 rounded-full">
                <img src={img2} alt=" nope" />
              </div>
            </div>
          <button className="  ml-4 text-md text-[#F0F2F6]"> Ansarul Hoque </button>
          <span className="mt-2.5 mx-2"> <AiOutlineDown/></span>
      
           </div>
          </label>
          <ul
            tabIndex={1}
            className="dropdown-content menu ml-6 p-2 shadow bg-[#2E3A54] mt-2 rounded w-52"
          >
            <li>
              <Link>Jahan Brother 2 </Link>

            </li>
            <li>
              <Link>Jahan Brother 2</Link>
            </li>
            <li>
              <Link>Jahan Brother 2</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="dropdown mt-4  ">
          <label tabIndex={0} className="btn mt-2">
           <div className="flex">
           <div className="avatar">
              <div className="w-8 rounded-full">
                <img src={img2} alt=" nope" />
              </div>
            </div>
          <button className="  ml-4 text-md"> Ansarul Hoque </button>
          <span className="mt-2.5 mx-2"> <AiOutlineDown/></span>
      
           </div>
          </label>
          <ul
            tabIndex={1}
            className="dropdown-content menu p-2 shadow ml-6 bg-[#2E3A54] mt-2 rounded w-52"
          >
            <li>
              <Link>Jahan Brother 2 </Link>

            </li>
            <li>
              <Link>Jahan Brother 2</Link>
            </li>
            <li>
              <Link>Jahan Brother 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
