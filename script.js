$(function(){

   let sections = ['landing', 'skills', 'resume', 'contact', 'gallery']
   let duration = 150;

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

      return (nextIndex - currIndex < 0) ? "left" : "right"
      
   }


   function changeSection(newSection){
      let $activeSection = $('.active-container');
      let $newSection = $(`.${newSection}`);
      //Does it need to change?
      if($activeSection[0] == $newSection[0]) return false;

      let direction = getDir(newSection)

      //  Remove Old Section
      hideSection($activeSection, direction);

      //  Show new Section
      setTimeout(() => {showSection($newSection, direction)}, duration)
   }
   function hideSection(section, dir){
      if(dir == 'left'){
         section.animate({
            'left' : "210vh"
         }, duration, () => {section.hide().css("left", "0")})
      }else{
         section.animate({
            'right' : "210vh"
         }, duration, () => {section.hide().css("right", "0")})
      }
      section.removeClass("active-container")
   }
   
   function showSection(section, dir){
      if(dir == 'left'){
         section.show().css("left", "-210vh")
         section.animate({
            'left' : "0"
         }, duration)
      }else{
         section.show().css("right", "-210vh")
         section.animate({
            'right' : "0"
         }, duration)
      }
      section.addClass("active-container")
   }

   $("#contact-link").on("click", () => changeSection('contact'))
   $("#landing-link").on("click", () => changeSection('landing'))
   $("#resume-link").on("click", () => changeSection('resume'))
   $("#skills-link").on("click", () => changeSection('skills'))
   $("#gallery-link").on("click", () => changeSection('gallery'))

   


})