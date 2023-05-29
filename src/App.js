import {useState} from "react"
import Modal from "./components/Modal";


function App() {
  const [open,setOpen]=useState(false);
  return (
    <>
    <div>
    {/* navbar */}
    
    <div className="flex text-lg justify-between px-10 py-5 flex-wrap shadow-lg shadow-slate-100">
      <div className="flex flex-col justify-center items-center px-2"><div><div className="flex">Educator <img src="arrow-down.png" className=" pt-1 pl-1 cursor-pointer h-1/2" alt="arrow" /></div><div className="text-xs text-slate-300">Arthshala</div></div></div>
      <div className="flex flex-wrap gap-20  p-2">
        <div className="flex justify-center items-center border-b-2 border-blue-500"><img className="h-2/4 mr-1" src="Category.png" alt="category"/><div>Planning</div></div>
        <div className="flex justify-center items-center"><img className="h-2/4 pr-1" src="edit-square.png" alt="category"/><div>Documentation</div></div>
        <div className="flex justify-center items-center"><img className="h-2/4 pr-1" src="Paper.png" alt="category"/><div>Housekeeping</div></div>
        
      </div>
      <div className="flex flex-wrap gap-5 h-3/4  p-2">
        <img src="Search.png" className="h-5/6 pt-3"  alt="search"/>
        <img src="notification.png" className="h-5/6 pt-3"  alt="notification"/>
        <img src="icon.png" className="h-3/4"  alt="icon"/>
      </div>
    </div>
    <div className="flex text-lg justify-between mx-10 py-3 mt-8 pl-10 border-b-2 border-slate-100 flex-wrap">
      <div className="flex flex-wrap gap-20 ">
        <div className="p-2 text-slate-400 font-light">Project planning</div>
        <div className="p-2 bg-blue-100 rounded">Weekly planning</div>
        <div className="p-2 text-slate-400 font-light">Planning insights</div>
      </div>
      <div className="">
       
<form>   
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full " placeholder="Search for projects" required/>
        </div>
</form>

      </div>
    </div>
    <div className="flex  justify-between px-10 pt-8  p-2 flex-wrap">
      <div className="flex  flex-wrap gap-4 ">
        <div className="text-2xl p-2 pr-0 font-bold">April 10-17</div>
        <div className="text-xl gap-2 pl-0 flex p-2">
          <img className="h-1/2 mt-2" alt="arrow" src="left-arrow.png"/>
          <p>Today</p>
          <img className="h-1/2 mt-2" alt="arrow" src="right-arrow.png"/>
          </div>
      </div>
      <button type="button" onClick={() => setOpen(true)} className="bg-blue-500 flex hover:bg-blue-600 text-white text-lg p-3 px-10 rounded-full">
        <img src="Plus.png" alt=".." className="mt-1 mr-2" />
        <p> Add period</p>
       
      </button>
    </div>

    {/* calender table */}
   
<div className="flex">
<div className=" py-10 pl-10 my-10">
  <div className="py-3 text-sm font-light text-slate-400">
  <p className="mt-[3.65rem] pt-4 border-t border-slate-300">08:00</p>
    <p className="mt-8">09:00</p>
    <p className="mt-10">10:00</p>
    <p className="mt-10">11:00</p>
    <p className="mt-10">12:00</p>
    <p className="mt-8">13:00</p>
    <p className="mt-10">14:00</p>
    <p className="mt-10">15:00</p>
    <p className="mt-8">16:00</p>
    <p className="mt-10">17:00</p>
    <p className="mt-10">18:00</p>
    <p className="mt-8">19:00</p>
    <p className="mt-8">20:00</p>
    
   
   
  </div>
    

  </div>
<div className="relative  overflow-x-auto py-5">
  
  <table className="table-auto px-10 w-screen border-none ">
     <thead>
  <tr>
    <th></th>
    <th className="pb-[0.55rem]">
        <div className="text-xs font-light text-blue-500">MON</div>
        <div className="flex justify-center">
          <p  className="bg-blue-500 rounded-full p-3 text-xl text-white font-bold">10</p>
        </div>
      </th>
    <th className="">
    <div className="text-xs font-light ">TUE</div>
        <div className="flex justify-center">
          <p  className=" p-3 text-xl font-bold">11</p>
        </div>
    </th>
    <th className="">
    <div className="text-xs font-light">WED</div>
        <div className="flex justify-center">
          <p  className=" p-3 text-xl font-bold">12</p>
        </div>
    </th>
    <th className="">
    <div className="text-xs font-light ">THU</div>
        <div className="flex justify-center">
          <p  className=" p-3 text-xl font-bold">13</p>
        </div>
    </th>
    <th className="">
    <div className="text-xs font-light ">FRI</div>
        <div className="flex justify-center">
          <p  className=" p-3 text-xl font-bold">14</p>
        </div>
    </th>
    <th className="">
    <div className="text-xs font-light ">SAT</div>
        <div className="flex justify-center">
          <p  className=" p-3 text-xl font-bold">15</p>
        </div>
    </th>
    <th className="">
    <div className="text-xs font-light ">SUN</div>
        <div className="flex justify-center">
          <p  className=" p-3 text-xl font-bold">16</p>
        </div>
    </th>
   
  </tr>
     </thead>
      <tbody>
<tr>

    <td className=" border-r border-slate-300"> &nbsp;</td>
    <td className=" border-r border-slate-300"> &nbsp;</td>
    <td className="border-r border-slate-300"> &nbsp;</td>
    <td className="border-r border-slate-300"> &nbsp;</td>
    <td className="border-r border-slate-300"> &nbsp;</td>
    <td className="border-r border-slate-300"> &nbsp;</td>
    <td className="border-l border-r border-slate-300"> &nbsp;</td>
    <td className="border-l border-r border-slate-300"> &nbsp;</td>


   
    
  </tr>
<tr>
  
    <td className="border-r border-slate-300"> &nbsp;</td>
    <td className="border-l border-r border-slate-300"> &nbsp;</td>
    <td className="border-l border-r border-slate-300"> &nbsp;</td>
    <td className="border-l border-r border-slate-300"> &nbsp;</td>
    <td className="border-l border-r border-slate-300"> &nbsp;</td>
    <td className="border-l border-r border-slate-300"> &nbsp;</td>
    <td className="border-l border-r border-slate-300"> &nbsp;</td>
    <td className="border-l border-r border-slate-300"> &nbsp;</td>
    
  </tr>
  <tr>
  <td className="border-t border-slate-300"> &nbsp;</td>
  <td className="border border-slate-300 "> &nbsp;</td>

  <td className="border border-slate-300 "> &nbsp;</td>
   <td className="border border-slate-300 "> &nbsp;</td>
    <td className="border border-slate-300 "> &nbsp;</td>
    <td className="border border-slate-300 "> &nbsp;</td>
    <td className="border border-slate-300 "> &nbsp;</td>
    <td className="border border-slate-300 "> &nbsp;</td>
  </tr>
  <tr>
    <td className="border-t border-slate-300 ">&nbsp;</td>
     <td className="border border-slate-300 h-14">
    </td>

    <td className="border border-slate-300 "> &nbsp;</td>
    <td className="border border-slate-300 "> &nbsp;</td>
    <td className="border border-slate-300 "> &nbsp;</td>
    <td className="border border-slate-300 "> &nbsp;</td>
    <td className="border border-slate-300 "> &nbsp;</td>
    <td className="border border-slate-300 "> &nbsp;</td>
    
    
  </tr>
  <tr>
    <td className="border-t border-slate-300 ">&nbsp;</td>
    <td className=" border w-[14%] border-slate-300"><div className="bg-pink-100 text-pink-500 w-11/12 rounded p-2"><div className="font-bold text-md">Period 1</div><div className="text-xs">9:00-10:00</div></div></td>

    <td className="border border-slate-300 h-14 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

  </tr>
  <tr>
    <td className="border-t border-slate-300 ">&nbsp;</td>
    {/* <td className="border border-slate-300 "><div className="bg-pink-200 text-pink-500 w-4/5 rounded p-2"><div className="font-bold text-md">Period 1</div><div className="text-xs">9:00-10:00</div></div></td> */}

    <td className="border border-slate-300 h-14 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>
  </tr>
  <tr>
    <td className="border-t border-slate-300 ">&nbsp;</td>
    <td className="border border-slate-300 "><div className="bg-purple-100 text-purple-500 w-11/12 rounded p-2"><div className="font-bold text-md">Period 1</div><div className="text-xs">11:00-12:00</div></div></td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

  </tr>
  <tr>
    <td className="border-t border-slate-300 ">&nbsp;</td>
    <td className="border border-slate-300 h-14">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>
  </tr>
  <tr>
    <td className="border-t border-slate-300 ">&nbsp;</td>
    <td className="border border-slate-300 "><div className="bg-yellow-100 text-yellow-500 w-11/12 rounded p-2"><div className="font-bold text-md">Period 3</div><div className="text-xs">13:00-14:00</div></div></td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>
  </tr>
  <tr>
    <td className="border-t border-slate-300 ">&nbsp;</td>
    <td className="border border-slate-300 h-14">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>
  </tr>
  <tr>
    <td className="border-t border-slate-300 ">&nbsp;</td>
    <td className="border border-slate-300 h-14">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>
  </tr>
  <tr>
    <td className="border-t border-slate-300 ">&nbsp;</td>
    <td className="border border-slate-300"><div className="bg-green-100 text-green-500 w-11/12 rounded p-2"><div className="font-bold text-md">Period 4</div><div className="text-xs">16:00-17:00</div></div></td>

    <td className="border border-slate-300 h-14">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>
  </tr>
  <tr>
    <td className="border-t border-slate-300 ">&nbsp;</td>
    <td className="border border-slate-300 h-14">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>

    <td className="border border-slate-300 ">&nbsp;</td>
  </tr>
  <tr>
    <td className="border-t border-slate-300 "></td>
    <td className="border border-slate-300 h-14"></td>

    <td className="border border-slate-300 "></td>

    <td className="border border-slate-300 "></td>

    <td className="border border-slate-300 "></td>

    <td className="border border-slate-300 "></td>

    <td className="border border-slate-300 "></td>

    <td className="border border-slate-300 "></td>
  </tr>
  <tr>
    <td className="border-t border-b border-slate-300 "></td>
    {/* <td className="border border-slate-300 "><div className="bg-pink-200 text-pink-500 w-4/5 rounded p-2"><div className="font-bold text-md">Period 1</div><div className="text-xs">9:00-10:00</div></div></td> */}

    <td className="border border-slate-300 h-14"></td>

    <td className="border border-slate-300 "></td>

    <td className="border border-slate-300 "></td>

    <td className="border border-slate-300 "></td>

    <td className="border border-slate-300 "></td>

    <td className="border border-slate-300 "></td>

    <td className="border border-slate-300 "></td>
  </tr>
      </tbody>
  </table>
</div>
</div>

    


    </div>
    {open && <Modal setOpen={setOpen} />}
    </>

  );
}

export default App;
