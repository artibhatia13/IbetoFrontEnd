import React from "react";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import PhaseOne from "../images/PhaseOne.svg";
import PhaseTwo from "../images/PhaseTwo.svg";

const EventFormat = () => {
   return (
      <div className='container ' id='EventFormat'>
         <h2 className='heading mt-5'>Event Format</h2>

         <div className='row event-format'>
            <div class='col-md-4 col-sm-10 phase'>
               <img src={PhaseTwo} width='200' alt='' />
               <div class=''>Phase 1</div>
               <h3 class='event-title'>Ideate</h3>
               <p class='content'>Participants will undergo an online evaluation with respect to technical aspects that supplement a project. 25 teams will be shortlisted and asked to send a detailed abstract.</p>
            </div>

            <div class='col-md-4 col-sm-10 phase'>
               <img src={PhaseOne} width='200' alt='' />
               <div>Phase 2</div>
               <h3 class='event-title'>Create</h3>
               <p class='content'>25 teams shortlisted into the quarterfinals will be asked to send in their project plans and assigned mentors to whom the teams are to report to.</p>
            </div>

            <div class='col-md-4 col-sm-10 phase'>
               <img src={PhaseTwo} width='200' alt='' />
               <div>Phase 3</div>
               <h3 class='event-title'>Showcase</h3>
               <p class='content'>The teams are to submit a video presentation along with a demonstration of their working prototype in front of the judges on Day 0 of Excel 2020, which will be the final judgement.</p>
            </div>
         </div>
      </div>
   );
};

export default EventFormat;
