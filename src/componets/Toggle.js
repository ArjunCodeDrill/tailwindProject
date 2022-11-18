import React, { useState } from 'react'
// import { Toast } from 'react-toastify/dist/components';
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Toggle(props) {
  
  const [toggleValue, setTogglevalue] = useState(true)
  const toggleHandler = () => {
    
    const htmlTag = document.getElementsByTagName("html")[0];

    if (toggleValue) {
      toast.success("Now theme have changed")
      htmlTag.className = "dark";
      
    }
    else {
      htmlTag.className = " ";
    toast.success("Now theme have changed ")
    }
    
    setTogglevalue(!toggleValue)
   
  }
  return (
      <div className='w-10' onClick={toggleHandler}>
      <img src={toggleValue ? `https://upload.wikimedia.org/wikipedia/commons/2/21/Toggle_grey.png` : `https://upload.wikimedia.org/wikipedia/commons/d/dc/Toggle_blue.png`} alt="" />
      <ToastContainer position='top-center'/>
    </div>
  )
}

export default Toggle