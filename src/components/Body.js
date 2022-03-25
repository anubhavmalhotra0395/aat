import React from 'react'
import './Body.css'

const Body = () => {
  return (
   <>
   <div className='content-writing-header'>
            <h2 className='content-writing-header-text'><b>Services We Offer</b></h2>
            </div>
   <div className='content-writing'>
       
            <div className='container' id="cwc">
              
            <div className='cc-text-container'>
            <div data-aos="fade-up">
                <p className="blink_me">CONTENT WRITING&nbsp;<span class="dot"></span></p>
                <p className='cc-text-1'>WE ARE BORN AUTHORS</p>
                <p className='cc-text-2'>Collaboration is the key to a healthy and successful screenplay. Hiring a screenwriter or script doctor is, therefore, a way to fast track such collaboration. It puts you into contact with a professional specifically selected by a specialist screenwriting organisation (such as Industrial Scripts) who will know how to get the best out of your work. They’ll show you things that you can’t see yourself.</p>
                <div className="hero-btns">
                <button
                 className="btn--outline"
                 >Enquire Now</button>
           </div>
            </div>
            </div>
       </div>
   </div>
   </>
  )
}

export default Body