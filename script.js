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

    //  $('.color-ball').offset({top: 283})

    //  $('.color-ball').on("mousedown", dragMouseDown)
    //  let distance = 0, oldMouseY = 0;
    //  function dragMouseDown(event){
    //     event = event || window.event;
    //     event.preventDefault()

    //     oldMouseY = event.clientY;
    //     $(this).on("mouseup", closeDrag)
    //     $(this).on("mousemove", elementDrag)
    //  }

    //  function elementDrag(event){
    //     event = event || window.event
    //     event.preventDefault()
    //     offset = $(this).offset().top
    //     //283 - 425
    //     if(offset <= 425 && offset >= 283){
    //         distance = oldMouseY - event.clientY;
    //         oldMouseY = event.clientY;
    //         $(this).offset({top: offset - distance})
    //     }
    //     if(offset > 425){
    //         $(this).offset({top: 420})
    //         console.log(`fixed`)
    //     }else if(offset < 283){
    //         $(this).offset({top: 290})
    //         console.log(`fixed`)
    //     }

    //     let color = `rgb(255, ${425 - offset}, 100)`
    //     document.documentElement.style.setProperty("--bg-color", color)
    //  }
    //  function closeDrag() {
    //     $(this).off("mousemove", elementDrag);
    //   }


})