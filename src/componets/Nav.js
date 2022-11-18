import React, { useEffect, useState } from "react";
import Toggle from "./Toggle";




function Nav() {
  

  
   
 
  

  return (
    <div>
      <nav className="flex  bg-black h-12 items-center justify-evenly">
        <div>
          <img  src="https://codedrill.in/wp-content/uploads/2022/03/codedrill.png" alt=""    width={"200px"}
              height={"180px"}/>
        </div>
        <div className="content">
          <ul className=" flex justify-center  text-white children:px-5 font-semibold text-xl">
            <li>Contact</li>
            <li>About</li>
            <li>Home</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="searchBarContainer flex children:mx-2">
          <div>

          <div className="searchbar rounded  bg-fuchsia-500 h-6  relative">
            <input type="text" className="rounded" placeholder="     Your Search" />
            <img
              className="absolute bottom-[0rem] right-2"
              src="https://i.pinimg.com/originals/9c/85/47/9c8547399c1e4dd14e1a30f3e05d179a.png"
              alt="kjhg"
              width={"22px"}
              height={"22px"}
              />
          </div>
          </div>
          <Toggle/>
        </div>
      </nav>
      
    </div>
  );
}

export default Nav;
