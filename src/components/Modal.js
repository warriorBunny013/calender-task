import React from 'react';
// import DateRangePicker from 'rsuite/DateRangePicker';
// import "rsuite/dist/rsuite.min.css";
import Datepicker from "react-tailwindcss-datepicker"; 
import { useState } from 'react';


const Modal = ({setOpen}) => {
    const [value, setValue] = useState({ 
        startDate: new Date(), 
        endDate: new Date().setMonth(11) 
        }); 
        
        const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
       
        localStorage.theme='light'
        } 
        // const [calender,setCalender]=useState(false);
  

    return (<div className='' style={{ backgroundColor: "rgba(0,0,0,0.5)", position: "fixed",height: "100%", width: "100%", top: 0,left: 0, display: "flex" ,alignItems: "center",justifyContent: "center",overflow: "auto",zIndex: 99999}}>
    <div className="w-sm bg-white rounded-2xl" >
     
    <div className='p-5 px-8'>
        <div className='flex mb-8 justify-between'>
        <h1 className='text-lg font-bold'>Add Period</h1>
        <button onClick={() => setOpen(false)} className='rounded-full'>X</button>
        </div>
       
        <div className='flex mb-5 flex-col'>
            <label className='mb-3 font-bold text-sm'>Period Name</label>
            <input  type="text" className='p-2 px-5 rounded-md border-black border' placeholder='Enter Period Name'/>
        </div>
        <div className='flex mb-5 gap-5'>
        <div className='flex flex-col'>
        <label className='mb-3 font-bold text-sm'>Start Time</label>
            <input  type="text" className='p-2 px-5 rounded-md border-black border' placeholder='11:00'/>
        
        </div>
        <div className='flex flex-col'>
        <label className='mb-3 font-bold text-sm'>End Time</label>
            <input  type="text" className='p-2 px-5 rounded-md border-black border' placeholder='12:00'/>
        
        </div>
        </div>
        <div className=''>
        <label className='mb-3 font-bold text-sm'>Repeat on days</label>
        
        <div className='flex mt-2 mb-5  text-xs gap-2'>
                <p className='flex justify-center w-8 h-8 mt-2 items-center bg-slate-200 rounded-full'>S</p>
                <p className='flex justify-center w-8 h-8 items-center bg-slate-200 rounded-full'>M</p>
                <p className='flex justify-center w-8 h-8 items-center text-white bg-blue-500 rounded-full'>T</p>
                <p className='flex justify-center w-8 h-8 items-center bg-slate-200 rounded-full'>W</p>
                <p className='flex justify-center w-8 h-8 items-center bg-slate-200 rounded-full'>T</p>
                <p className='flex justify-center w-8 h-8 items-center text-white bg-blue-500 rounded-full'>F</p>
                <p className='flex justify-center w-8 h-8 items-center bg-slate-200 rounded-full'>S</p>
                <p className='flex justify-center w-8 h-8 items-center bg-slate-200 rounded-full'>S</p>
            </div>
        
           
        </div>
        <div className=''>
            <label className='mb-3 font-bold text-sm'>From</label>
            {/* <DateRangePicker appearance="default" placeholder="Default" style={{ zIndex:100, width: 230 }} /> */}
            <div className='mb-4'>
            <Datepicker
            primaryColor={"blue"} 
                value={value}
                startFrom="2023-02-02" 
                onChange={handleValueChange}
            />
              {/* <DateRangePicker/> */}

             
            </div>
           

        </div>
        <div className='flex justify-between'>
        <div className='flex gap-2 justify-between'>
                <p className='flex justify-center w-8 h-8 mt-2 items-center bg-red-200 rounded-full'></p>
                <p className='flex justify-center w-8 h-8 items-center bg-purple-200 rounded-full'></p>
                <p className='flex justify-center w-8 h-8 items-center bg-yellow-200 rounded-full'></p>
                <p className='flex justify-center w-8 h-8 items-center bg-green-200 rounded-full'></p>
          
            </div>
 
            <div className='flex'>
            <svg className='mt-2 mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3249 9.4682C19.3249 9.4682 18.7819 16.2032 18.4669 19.0402C18.3169 20.3952 17.4799 21.1892 16.1089 21.2142C13.4999 21.2612 10.8879 21.2642 8.27991 21.2092C6.96091 21.1822 6.13791 20.3782 5.99091 19.0472C5.67391 16.1852 5.13391 9.4682 5.13391 9.4682" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.7082 6.2397H3.75018" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4406 6.2397C16.6556 6.2397 15.9796 5.6847 15.8256 4.9157L15.5826 3.6997C15.4326 3.1387 14.9246 2.7507 14.3456 2.7507H10.1126C9.53358 2.7507 9.02558 3.1387 8.87558 3.6997L8.63258 4.9157C8.47858 5.6847 7.80258 6.2397 7.01758 6.2397" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <button type="button" onClick={() => setOpen(true)} className="bg-blue-500 flex hover:bg-blue-600 text-white text-sm p-3 px-10 rounded-full">
        <img src="Plus.png" alt=".." className="mr-1" />
        <p> Add period</p>
      </button>
            </div>
    
        </div>
        {/* {calender && <Calender setCalender={setCalender} />} */}
    </div>
</div>
{/* {calender && <Calender/>} */}
</div>
    );
}

export default Modal;
