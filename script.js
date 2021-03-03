$(function(){
    let ogOffset = $('.right-card1').offset()
    console.log(ogOffset)
    $('.right-card').offset({left: 2000})
    $('.left-card').offset({right: 2000})
    let currCard = 1;
    let scrollTop = 500;

    $(window).scroll(function(){
        if($(this).scrollTop() > scrollTop){
            $(`.right-card${currCard}`).offset({left: ogOffet.left})
            $(`.left-card${currCard}`).fadeTo(1000, 1)
            currCard++;
            scrollTop += 300;
        }
    })
})