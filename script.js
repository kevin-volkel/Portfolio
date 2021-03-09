$(function(){
    // $('.right-card').css("left",1500)
    // $('.left-card').css("right",1500)
    // let currCard = 1;
    // let scrollTop = 400;

    // $(window).scroll(function(){
    //     if($(this).scrollTop() > scrollTop){
    //         $(`.right-card${currCard}`).animate({
    //             left: 0
    //         }, 250)
    //         $(`.left-card${currCard}`).animate({
    //             right: 0
    //         }, 300)
    //         currCard++;
    //         scrollTop += 300;
    //     }
    // })

    // let previousScroll = 0;
    // let animating = false;
    // $(window).scroll(function(){
    //     var currentScroll = $(this).scrollTop();
    //     if(!animating){
    //         animating = true;
    //         if (currentScroll > previousScroll){
    //             console.log(`down`)
    //             $('nav').slideUp(500)
    //         } else {
    //             console.log(`up`)
    //             $('nav').slideDown(500)
    //         }
    //         setTimeout(function(){
    //             animating = false;
    //         }, 500)
    //     }
        
    //     previousScroll = currentScroll;
    //  });

     $('#skills').hide();
     $('#resume').hide();
     $('#contact').hide();

      let delay = 0;

      function changeSection(newSection){
         let $activeSection = $('.active-container');
         let $newSection = $(`#${newSection}`);
         //Does it need to change?
         if($activeSection[0] == $newSection[0]){
               return false;
         }
         //  Remove Old Section
         hideSection($activeSection);

         //  Show new Section
         setTimeout(function(){showSection($newSection)}, delay)
      }
      function hideSection(section){
         section.hide()
         section.removeClass("active-container")
      }
      function showSection(section){
         section.show()
         section.addClass("active-container")
      }

     $("#contact-link").on("click", function(){changeSection('contact')})
     $("#landing-link").on("click", function(){changeSection('landing')})
     $("#resume-link").on("click", function(){changeSection('resume')})
     $("#skills-link").on("click", function(){changeSection('skills')})
})