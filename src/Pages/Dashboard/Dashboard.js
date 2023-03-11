import React from "react";
import card1 from "../../Assects/Group 40258.png";
import over from "../../Assects/Group.png";
import over2 from "../../Assects/over.png";
import logo1 from "../../Assects/logo.png";
import logo2 from "../../Assects/logo1.png";
import Gear from "../Gear/Gear";

const Dashboard = () => {
  return (
    <div className="bg-[#F4F8FF]">
      <div className="flex space-x-96 ">
      <h1 className="font-bold text-2xl global	 py-5 pl-6  ">Global Ship Report</h1>
      <img className="h-4 mt-6 pl-96" src={over2} alt="" />
      </div>

      <div className=" grid lg:grid-cols-4 sm:grid-cols-1 md:grid gap-4 pl-6  pr-6">


   <div className="card w-60 h-36 bg-base-100 border relative ">
          <div >
            
            <div className="flex space-x-32 mt-2">
              <img className="pl-4 mt-2 " src={card1} alt="pp" />
              <h1 className="card-title text-2xl font-bold ">12</h1>
            </div>
            <p className="text-left ml-4 mt-4 text-[#757575] font-[12]">
              Renewal/Abnormality
            </p>
            <div className="card-actions ml-4  font-bold">
              <h2>Cargo Gear</h2>
            </div>
            <img className="absolute  bottom-0 left-0 " src={over} alt="" />

          </div>
        </div>
   <div className="card w-60 h-36 bg-base-100 border relative ">
          <div >
            
            <div className="flex space-x-16 mt-2">
              <img className="pl-4  " src={logo1} alt="pp" />
              <span className=" text-sm mt-2 text-[#393939] ">MON 05-02-23</span>
            </div>
           <div className="flex mt-5 ">
           <p className="text-left font-bold ml-4 text-[#373B45] ">
            Daily Excess <br /> Consumption
            </p>
              <p className="text-xs text-[#393939] pl-6">VLSFO: 10 MT <br />LSMGO: 30 MT <br />MDO: 12 MT</p>
           </div>
            
            <img className="absolute  bottom-0 left-0 " src={over} alt="" />

          </div>
        </div>
   <div className="card w-60 h-36 bg-base-100 border relative ">
          <div >
            
            <div className="flex space-x-32 mt-2">
              <img className="pl-4 mt-2" src={logo2} alt="pp" />
              <h1 className="card-title text-2xl font-bold ">5</h1>
            </div>
            <p className="text-left ml-4 mt-4 text-[#757575] font-[12]">
              Renewal/Abnormality
            </p>
            <div className="card-actions ml-4  font-bold">
              <h2>Cargo Gear</h2>
            </div>
            <img className="absolute  bottom-0 left-0 " src={over} alt="" />

          </div>
        </div>
   <div className="card w-60 h-36 bg-base-100 border relative ">
          <div >
            
            <div className="flex space-x-32 mt-2">
              <img className="pl-4 mt-2" src={card1} alt="pp" />
              <h1 className="card-title text-2xl font-bold ">12</h1>
            </div>
            <p className="text-left ml-4 mt-4 text-[#757575] font-[12]">
              Renewal/Abnormality
            </p>
            <div className="card-actions ml-4  font-bold">
              <h2>Cargo Gear</h2>
            </div>
            <img className="absolute  bottom-0 left-0 " src={over} alt="" />

          </div>
        </div>
   <div className="card w-60 h-36 bg-base-100 border relative ">
          <div >
            
            <div className="flex space-x-36 mt-2">
              <img className="pl-4 mt-2" src={card1} alt="pp" />
              <h1 className="card-title text-2xl font-bold ">4</h1>
            </div>
            <p className="text-left ml-4 mt-4 text-[#757575] font-[12]">
              Renewal/Abnormality
            </p>
            <div className="card-actions ml-4  font-bold">
              <h2>Cargo Gear</h2>
            </div>
            <img className="absolute  bottom-0 left-0 " src={over} alt="" />

          </div>
        </div>
   <div className="card w-60 h-36 bg-base-100 border relative ">
          <div >
            
            <div className="flex space-x-32 mt-2">
              <img className="pl-4 mt-2" src={card1} alt="pp" />
              <h1 className="card-title text-2xl font-bold ">11</h1>
            </div>
            <p className="text-left ml-4 mt-4 text-[#757575] font-[12]">
              Renewal/Abnormality
            </p>
            <div className="card-actions ml-4  font-bold">
              <h2>Cargo Gear</h2>
            </div>
            <img className="absolute  bottom-0 left-0 " src={over} alt="" />

          </div>
        </div>
   <div className="card w-60 h-36 bg-base-100 border relative ">
          <div >
            
            <div className="flex space-x-36 mt-2">
              <img className="pl-4 mt-2" src={card1} alt="pp" />
              <h1 className="card-title text-2xl font-bold ">7</h1>
            </div>
            <p className="text-left ml-4 mt-4 text-[#757575] font-[12]">
              Renewal/Abnormality
            </p>
            <div className="card-actions ml-4  font-bold">
              <h2>Cargo Gear</h2>
            </div>
            <img className="absolute  bottom-0 left-0 " src={over} alt="" />

          </div>
        </div>
   <div className="card w-60 h-36 bg-base-100 border relative ">
          <div >
            
            <div className="flex space-x-32 mt-2">
              <img className="pl-4 mt-2" src={card1} alt="pp" />
              <h1 className="card-title text-2xl font-bold ">12</h1>
            </div>
            <p className="text-left ml-4 mt-4 text-[#757575] font-[12]">
              Renewal/Abnormality
            </p>
            <div className="card-actions ml-4  font-bold">
              <h2>Cargo Gear</h2>
            </div>
            <img className="absolute  bottom-0 left-0 " src={over} alt="" />

          </div>
        </div>

 
      </div>
      
            <Gear></Gear>
    </div>
  );
};

export default Dashboard;
