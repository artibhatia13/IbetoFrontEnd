import React from "react";
import "../stylesheet/Dashboard.css";
import "../stylesheet/ResponsiveDashboardStylesheet.css";

const Faq = () => {
   return (
      <div className='white-bk faq-row '>
         <div class='row'>
            <div class='col-md-12 '>
               <div class='faq-title '>
                  <h4 className='dashboard-heading'> FAQ</h4>
               </div>
               <hr />
            </div>

            <div class='col-md-12 '>
               <div class='faq content' id='accordion'>
                  <div class='faq-card'>
                     <div class='faq-card-header' id='faqHeading-1'>
                        <div class='mb-0'>
                           <h5 class='faq-title' data-toggle='collapse' data-target='#faqCollapse-1' data-aria-expanded='true' data-aria-controls='faqCollapse-1'>
                              <span class='badge'>1</span>What is Lorem Ipsum?
                           </h5>
                        </div>
                     </div>
                     <div id='faqCollapse-1' class='collapse' aria-labelledby='faqHeading-1' data-parent='#accordion'>
                        <div class='faq-card-body'>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                     </div>
                  </div>
                  <div class='faq-card'>
                     <div class='faq-card-header' id='faqHeading-2'>
                        <div class='mb-0'>
                           <h5 class='faq-title' data-toggle='collapse' data-target='#faqCollapse-2' data-aria-expanded='false' data-aria-controls='faqCollapse-2'>
                              <span class='badge'>2</span> Where does it come from?
                           </h5>
                        </div>
                     </div>
                     <div id='faqCollapse-2' class='collapse' aria-labelledby='faqHeading-2' data-parent='#accordion'>
                        <div class='faq-card-body'>
                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                        </div>
                     </div>
                  </div>
                  <div class='faq-card'>
                     <div class='faq-card-header' id='faqHeading-3'>
                        <div class='mb-0'>
                           <h5 class='faq-title' data-toggle='collapse' data-target='#faqCollapse-3' data-aria-expanded='false' data-aria-controls='faqCollapse-3'>
                              <span class='badge'>3</span>Why do we use it?
                           </h5>
                        </div>
                     </div>
                     <div id='faqCollapse-3' class='collapse' aria-labelledby='faqHeading-3' data-parent='#accordion'>
                        <div class='faq-card-body'>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.</p>
                        </div>
                     </div>
                  </div>
                  <div class='faq-card'>
                     <div class='faq-card-header' id='faqHeading-4'>
                        <div class='mb-0'>
                           <h5 class='faq-title' data-toggle='collapse' data-target='#faqCollapse-4' data-aria-expanded='false' data-aria-controls='faqCollapse-4'>
                              <span class='badge'>4</span> Where can I get some?
                           </h5>
                        </div>
                     </div>
                     <div id='faqCollapse-4' class='collapse' aria-labelledby='faqHeading-4' data-parent='#accordion'>
                        <div class='faq-card-body'>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                     </div>
                  </div>
                  <div class='faq-card'>
                     <div class='faq-card-header' id='faqHeading-5'>
                        <div class='mb-0'>
                           <h5 class='faq-title' data-toggle='collapse' data-target='#faqCollapse-5' data-aria-expanded='false' data-aria-controls='faqCollapse-5'>
                              <span class='badge'>5</span> What is Lorem Ipsum?
                           </h5>
                        </div>
                     </div>
                     <div id='faqCollapse-5' class='collapse' aria-labelledby='faqHeading-5' data-parent='#accordion'>
                        <div class='faq-card-body'>
                           <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                        </div>
                     </div>
                  </div>
                  <div class='faq-card'>
                     <div class='faq-card-header' id='faqHeading-6'>
                        <div class='mb-0'>
                           <h5 class='faq-title' data-toggle='collapse' data-target='#faqCollapse-6' data-aria-expanded='false' data-aria-controls='faqCollapse-6'>
                              <span class='badge'>6</span> Where does it come from?
                           </h5>
                        </div>
                     </div>
                     <div id='faqCollapse-6' class='collapse' aria-labelledby='faqHeading-6' data-parent='#accordion'>
                        <div class='faq-card-body'>
                           <p>
                              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914
                              translation by H. Rackham.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div class='faq-card'>
                     <div class='faq-card-header' id='faqHeading-7'>
                        <div class='mb-0'>
                           <h5 class='faq-title' data-toggle='collapse' data-target='#faqCollapse-7' data-aria-expanded='false' data-aria-controls='faqCollapse-7'>
                              <span class='badge'>7</span> Why do we use it?
                           </h5>
                        </div>
                     </div>
                     <div id='faqCollapse-7' class='collapse' aria-labelledby='faqHeading-7' data-parent='#accordion'>
                        <div class='faq-card-body'>
                           <p>
                              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                              purpose (injected humour and the like).
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Faq;
