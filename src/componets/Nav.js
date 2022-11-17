import React from "react";

function Nav() {
  return (
    <div>
      <nav className="flex justify-center bg-black h-12 items-center">
        <div className="content">
          <ul className=" flex justify-center  text-white children:px-5 font-semibold text-xl">
            <li>Contact</li>
            <li>About</li>
            <li>Home</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="searchBarContainer">
          <div className="searchbar rounded  bg-fuchsia-500 h-6  relative">
            <input type="text" className="rounded" />
            <img
              className="absolute"
              src="https://i.pinimg.com/originals/9c/85/47/9c8547399c1e4dd14e1a30f3e05d179a.png"
              alt="kjhg"
              width={"24px"}
              height={"24px"}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
