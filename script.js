$(function(){

   let sections = ['landing', 'skills', 'resume', 'contact', 'gallery']
   let duration = 100;

   $  
   $('#resume').hide();
   $('#contact').hide();
   $('#gallery').hide();

   let delay = 0;

   const getDir = (nextSection) => {
      let $currSection = $('.active-container')[0]
      let $nextSection = $(`.${nextSection}`)[0]

      //Determine which way to slide
      let currIndex = 0;
      let nextIndex = 0;
      for(i in sections){
         if(sections[i] == $currSection.id) currIndex = i
         if(sections[i] == $nextSection.id) nextIndex = i
      }
      // console.log($currSection);
      // console.log($nextSection);
      // console.log((nextIndex - currIndex < 0) ? "left" : "right");

      return (nextIndex < currIndex) ? "left" : "right"
      
   }


   function changeSection(newSection){
      let $activeSection = $('.active-container');
      let $newSection = $(`.${newSection}`);
      $(`#${newSection}-link`).addClass('active-link')
      $(`#${$activeSection[0].id}-link`).removeClass('active-link')
      //Does it need to change?
      if($activeSection[0] == $newSection[0]) return false;

      let direction = getDir(newSection)
      console.log(direction)

      //  Remove Old Section
      hideSection($activeSection, direction);

      //  Show new Section
      setTimeout(() => {showSection($newSection, direction)}, duration)
   }
   // function resetPos (section) {
   //    let $activeSection = $('.active-container');
   //    $activeSection.css("left", '0', 'right', '0')
   // }

   function hideSection(section, dir){
      if(dir == 'left'){
         // section.animate({
         //    'left' : "210vw"
         // }, duration, () => {section.hide().css("left", "0")})
         section.css('left', '210vw')
      }else{
         // section.animate({
         //    'right' : "210vw" 
         // }, duration, () => {section.hide().css("right", "0")})
         section.css('left', '-210vw')
      }

      setTimeout(() => {section.hide().css(dir, '0')}, duration/2)
      section.removeClass("active-container")
   }
   
   function showSection(section, dir){
      if(dir == 'left'){
         section.css("left", "-210vw")
         // section.animate({
         //    'right' : "0"
         // }, duration)
      }else{
         section.css("left", "210vw")
         // section.animate({
         //    'left' : "0"
         // }, duration)
      }
      setTimeout(() => {section.show().css('left', 0)}, duration/2)
      section.addClass("active-container")
   }

   function animateName () {
      resetName()
      for(let i = 1; i < 6; i++){
         let letter = $(`.fname-letter:nth-of-type(${i})`)
         console.log(letter);
         letter.animate({
            right: 0
         }, 100 * Math.abs(i - 6))
      }

      for(let i = 1; i < 7; i++){
         let letter = $(`.lname-letter:nth-of-type(${i})`)
         letter.animate({
            left: 0
         }, 100 * i)
      }
   }

   function resetName() {
      $('.fname-letter').css('right', '200vw')
      $('.lname-letter').css('left', '200vw')
   }

   function reanimateName(e) {
      if(e.key == ' '){
         if($('.active-container')[0] == document.getElementById('landing')){
            resetName()
            setTimeout(animateName, 400)
         }
      }
   }

   $("#contact-link").on("click", () => changeSection('contact'))
   $("#landing-link").on("click", () => changeSection('landing'))
   $("#resume-link").on("click", () => changeSection('resume'))
   $("#skills-link").on("click", () => changeSection('skills'))
   $("#gallery-link").on("click", () => changeSection('gallery'))
   
   animateName()
   window.addEventListener('keydown', reanimateName)
})