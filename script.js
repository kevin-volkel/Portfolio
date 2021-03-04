$(function(){
    $('.right-card').css("left",1500)
    $('.left-card').css("right",1500)
    let currCard = 1;
    let scrollTop = 400;

    $(window).scroll(function(){
        if($(this).scrollTop() > scrollTop){
            $(`.right-card${currCard}`).animate({
                left: 0
            }, 250)
            $(`.left-card${currCard}`).animate({
                right: 0
            }, 300)
            currCard++;
            scrollTop += 300;
        }
    })

    let previousScroll = 0;
    let animating = false;
    $(window).scroll(function(){
        var currentScroll = $(this).scrollTop();
        if(!animating){
            animating = true;
            if (currentScroll > previousScroll){
                console.log(`down`)
                $('nav').slideUp(500)
            } else {
                console.log(`up`)
                $('nav').slideDown(500)
            }
            setTimeout(function(){
                animating = false;
            }, 500)
        }
        
        previousScroll = currentScroll;
     });
})