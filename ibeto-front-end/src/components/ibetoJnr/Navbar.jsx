import React, { useState } from "react";
import "../stylesheet/MainSiteStyle.css";

const Navbar = () => {
   const [checked, setChecked] = useState(false);
   const handleClick = () => setChecked(!checked);

   return (
      <div class='menu-wrap'>
         <input type='checkbox' class='toggler' onClick={handleClick} checked={checked} />
         <div class='hamburger'>
            <div></div>
         </div>
         <div class='menu'>
            <div>
               <div>
                  <ul class='overlay-content pt-2'>
                     <li onClick={handleClick}>
                        <a href='#Home'>Home</a>
                     </li>
                     <li onClick={handleClick}>
                        <a href='#About'>About</a>
                     </li>
                     <li onClick={handleClick}>
                        <a href='#EventFormat'>Event Format</a>
                     </li>
                     <li onClick={handleClick}>
                        <a href='#Testimonials'>Testimonials</a>
                     </li>
                   </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
