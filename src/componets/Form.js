import React from 'react'
import { useState } from 'react'

function Form() {

  const [textAreaValue,setTextAreaValaue]=useState('')
    const changeHandler = (event) => {
    setTextAreaValaue (event.target.value
    )
  }  

  const UpperCaseHandler = () => {
  setTextAreaValaue(textAreaValue.toUpperCase())
  }
    const lowerCaseHandler = () => {
      setTextAreaValaue(textAreaValue.toLowerCase())
}
console.log(  )
  


    return (
      <div>

      <div className='w-full flex justify-center items-center flex-col  ' >
        <h1 className='m-2 text-2xl'>Enter the Text to analyze</h1>
       <textarea   placeholder='Enter your feedback'  name="w3review" rows="10" cols="50" className='border w-1/2 p-2 rounded outline-none' onChange={changeHandler} value={textAreaValue}>
           
          </textarea>
        
        </div>
            <div className='m-2 children:rounded children:mx-2  children:p-2 children:text-white flex justify-center'>
                <button className='bg-green-600' onClick={UpperCaseHandler}>UpperCase</button>
                <button className='bg-red-600' onClick={lowerCaseHandler}>lowerCase</button>
        </div>    
        
        <div className='flex items-center w-full my-2 flex-col'>
          <h1>Text Summary</h1>
          <p>{textAreaValue.split(' ').length-1} Words and character {textAreaValue.
            length} </p>
          <p>Preview</p>
        
          <div className='w-1/2 break-words'>

        <p >{textAreaValue}</p>
          </div>
        </div>
       
        </div>
      
  )
}

export default Form