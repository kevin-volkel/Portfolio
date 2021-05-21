$(function(){

   let sections = ['landing', 'skills', 'resume', 'contact', 'gallery']
   let duration = 100;

   $('#skills').hide();
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

   $("#contact-link").on("click", () => changeSection('contact'))
   $("#landing-link").on("click", () => changeSection('landing'))
   $("#resume-link").on("click", () => changeSection('resume'))
   $("#skills-link").on("click", () => changeSection('skills'))
   $("#gallery-link").on("click", () => changeSection('gallery'))

   


})