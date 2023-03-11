import React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import bar from "../../Assects/Frame 122.png"
import down from "../../Assects/Vector (3).png"
import round1 from"../../Assects/Ellipse 20.png"
import round2 from"../../Assects/Ellipse 20 (1).png"
import round3 from"../../Assects/Ellipse 20 (2).png"
import round4 from"../../Assects/Ellipse 20 (3).png"
import grp2 from"../../Assects/Group 40445.png"
import grp1 from"../../Assects/Group 40354.png"
import grp3 from"../../Assects/Group 40444.png"
import grp4 from"../../Assects/Group 40446.png"
import frame from "../../Assects/Frame 122.png"
import hill from "../../Assects/Vector 200.png"
// import styles from "./Gear.module.css";
import "./Gear.css";
const Gear = () => {
    const data = [
        {
          "name": "",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "",
          "uv": 2780,
          "pv": 3908,
          "amt":2000
        },
        {
          "name": "",
          "uv": 1890,
          "pv": 4800,
          "amt":2181
        },
        {
          "name": "",
          "uv": 2390,
          "pv": 3800,
          "amt": 200
        },
        {
          "name": "",
          "uv": 3490,
          "pv": 4300,
          "amt":2100
        }
      ]
    return (
        <div className="flex flex-col w-full border-opacity-50 pt-4">
        <div className="divider text-[#596B8D] text-xl font-bold">Cargo Gear</div>

 <div className=' flex lavel relative	'>
           
    <div className=' rounded mt-12 mb-10'>
<div className='flex '>
    <h2 className='font-bold  ml-16'>Abnormality Alerts</h2>
    <small className='ml-16 pl-2'>Mv Jawad </small>
    <small   className='mt-2 pl-1 ' ><img src={down} alt="" /></small>
 <span className=' ml-5'>   
 <img className='h-5' src={bar} alt="" />
 </span>
 </div>

 <div className='space-x-14 text-left ml-16 pt-1  text-[#393939ee]'>
<small>Luffing wires</small>
<small className='text-[#39393977]'>Hoisting wires</small>
<small className='text-[#39393977]'>Grab wires</small>
 </div>

 <div className='bg-[#FFFFFF]'>
<div className='flex  ml-28 py-2'>

<div className='flex '>
    <img  className='h-2.5 mt-1.5 px-2' src={round1} alt="" />
    <small>Crane 1</small>
</div>
<div className='flex '>
    <img  className='h-2.5 mt-1.5 px-2' src={round2} alt="" />
    <small>Crane 2</small>
</div>
<div className='flex '>
    <img  className='h-2.5 mt-1.5 px-2' src={round3} alt="" />
    <small>Crane 3</small>
</div>
<div className='flex '>
    <img  className='h-2.5 mt-1.5 px-2' src={round4} alt="" />
    <small>Crane 4</small>
</div>


</div>

<div className=''>
  
<AreaChart width={430} height={200} data={data}
  margin={{ top: 10, right: 30, left: 10, bottom: 0}}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis  />
  <CartesianGrid strokeDasharray="3 " />
  <new Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>

</div>
 </div>

<img style={{width:"40%"}} className='absolute   bottom-16 pl-20 pr-4 left-40% pt-2' src={hill} alt="ghg" />
            </div>
            <div>

            </div>

<div >
<div className='bg-[#FFFFFF] break rounded mt-6' >
 <div className='flex space-x-80 mx-4  pt-5 '>
   <h2 className='font-bold  static  '>Breakdown History</h2>
  <div className='flex'>
  <small>Total: 20 hrs</small>
      <img className='h-5 ml-4 ' src={frame} alt="" /> 

  </div>
 </div>

 <div  >
 <div className='flex'>
    <div className='text-start grid pl-6 space-y-6	mt-8'>
      <small>ne 1</small>
      <small>ne 2</small>
      <small>ne 3</small>
      <small>ne 4</small>
    </div>

<div className='mt-12 space-y-6 pl-10'>
  <img className='pipe' src={grp1} alt="" />
  <img className='ml-16 pipe' src={grp2} alt="" />
<div className='flex  space-x-8'>
<img  className='ml-24 pipe'src={grp3} alt="" />
<img className='extra' src={grp4} alt="" />
  </div>
  </div>
  </div>
<div className='space-x-3 mt-4 pl-10 text-[#757575] font pb-4 pr-4'>
  <span className='text-xs '>1</span>
  <span className='text-xs '>2</span>
  <span className='text-xs '>3</span>
  <span className='text-xs '>3</span>
  <span className='text-xs '>4</span>
  <span className='text-xs '>5</span>
  <span className='text-xs '>6</span>
  <span className='text-xs '>7</span>
  <span className='text-xs '>8</span>
  <span className='text-xs '>9</span>
  <span className='text-xs '>10</span>
  <span className='text-xs '>11</span>
  <span className='text-xs '>12</span>
  <span className='text-xs '>13</span>
  <span className='text-xs '>14</span>
  <span className='text-xs '>15</span>
  <span className='text-xs '>16</span>
  <span className='text-xs '>16</span>
  <span className='text-xs '>17</span>
  <span className='text-xs '>18</span>
  <span className='text-xs '>19</span>
  <span className='text-xs '>20</span>
  <span className='text-xs '>21</span>
  <span className='text-xs '>22</span>
  <span className='text-xs '>23</span>
</div>

 </div>
</div>
</div>



        </div>
      </div>
    );
};

export default Gear;