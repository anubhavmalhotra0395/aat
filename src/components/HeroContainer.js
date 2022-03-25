import React from 'react'
import './HeroContainer.css'
import $ from 'jquery' 


const HeroContainer = ({progress=0}) => {
    
    $(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });    

  

  
}).scroll();

$(document).ready(function() {
    //variable for the 'stroke-dashoffset' unit
    var $dashOffset = $("path").css("stroke-dashoffset");
    //on a scroll event - execute function
    $(window).scroll(function() {
      //calculate how far down the page the user is 
      var $percentageComplete = (($(window).scrollTop() / ($(".panel-container").height() - $(window).height())) * 100);
      //convert dashoffset pixel value to interger
      var $newUnit = parseInt($dashOffset, 10);
      //get the value to be subtracted from the 'stroke-dashoffset'
      var $offsetUnit = $percentageComplete * ($newUnit / 100);
      //set the new value of the dashoffset to create the drawing effect
      $("path").css("stroke-dashoffset", $newUnit - $offsetUnit);
      
  });
  });
  return (
      <>
    <div className='line-container'>
      <svg 
	 viewBox="0 0 595.28 841.89" fill='none' preserveAspectRatio='xMidYMax meet'>

	<path className="st4 img-fluid" d="M72.64-4.2v219.01c0,0,4.68-1.22,8.08,1.24s4.02,6.33,3.54,9.78l4.89,4.89l1.75-1.75l-0.97-0.97l0.82-0.87
		l0.25-2.4l11.24-11.24l6.51,6.51l-11.27,11.27l-2.26-0.01l-1,1l-1.2-1.2l-1.86,1.86l13.45,13.45c0,0,4.55,3.38,1.29,6.74
		c0,0-2.36,3.92-6.99-0.33L85.35,239.2l-9.4,9.4l0.71,0.76l-2.46,2.22l-5.67,3.12l-0.9-0.76l3.07-5.24l2.69-2.5l0.66,0.76l9.21-9.59
		l-5.15-5.24c0,0-6.28,1.84-10.2-3.02c0,0-2.65-2.03-1.46-7.98l5.29,5.29l4.87-1.51l0.94-5.24l-4.1-4.23H35.69v75.94h32.5V444.8
		v2.13c0,0,4.83-1.13,8.09,1.49s4.39,5.7,3.47,9.78l4.8,4.8l1.98-1.98l-1.1-1.1l0.78-0.78v-2.11l11.4-11.4l6.65,6.65L93.1,463.46
		h-2.57l-1,1l-1.2-1.2l-1.79,1.79l13.77,13.77c0,0,4.11,3.44,1.24,6.34c-2.87,2.91-4.75,1.95-7.44-0.64
		c-2.69-2.59-13.18-13.18-13.18-13.18l-9.55,9.55l0.55,0.55l-1.88,1.88l-5.85,3.79l-1.1-1.28l3.37-5.14l2.48-2.34l0.85,0.85
		l9.39-9.39l-5.37-5.37c0,0-6.61,1.15-9.87-2.89c-3.26-4.04-1.84-8.54-1.84-8.54l5.26,5.26l5.01-1.51l0.81-5l-4.43-4.46H41.74v55.69
		h27.4v353.39"/>
</svg>

</div>

      <div className='panel-container'>
    <div class="panel" data-color="violet">
    <div className='container'>
    <div data-aos="fade-down">
        <h1 className='violet-text'>We Deliver Value <span style={{color:'white'}}><i class="fas fa-cog fa-spin"></i></span></h1>
  </div>
  </div>
</div>
<div class="panel" data-color="blue"> 
<div data-aos="fade-left">
  <h2 className='blue-text-2 col-lg-11' style={{color:'#FFC0CB',fontSize:'30px'}}><b style={{color:'black'}}>Afkar Almustaqbal Technologies LLC</b> is a full-service consultancy for emerging technology, ideas, and lifestyle. Passionate about building new paradigms and better futures.<br/><h2 style={{color:'white',fontSize:'30px'}}>We deliver branding, creative, and marketing solutions through an integrated agency model, cutting-edge technology, heart, and design.</h2></h2>
</div>
</div>  
<div class="panel" data-color="green">
<div data-aos="fade-left">
  <h2 className='green-text col-lg-11'><span style={{color:'#FFC0CB'}}>Poised to chase <strike>Failure</strike>  Success</span>, <b style={{color:'#231F20'}}>"Afkar Almustaqbal Technologies LLC"</b> is a full-service independent branding, design, marketing, advertising, and innovation company.
  <b><span style={{color:'#231F20'}}>Hire our marketing services</span></b> <span  style={{color:'#FFC0CB'}}>to sharpen your competitive edge with a global perspective, local insights, diasporic experience, and cultural intelligence.</span></h2>
</div> 
</div>

<div class="panel" data-color="yellow">
    <div className='yellow-container'>
  <h2 >What we do</h2>
  <div data-aos="fade-left">
  <p className="yellow-text-2">We work as a full-service branding consultancy and production laboratory developing brands, media, and technology for brands to use for interacting with their audiences. Our agency combines research, design, and advertising operations into one studio to create innovative marketing infrastructure, processes, and methodologies.</p>
</div>
</div>
</div>
</div>
<div>
</div>

</>
  )
}

export default HeroContainer