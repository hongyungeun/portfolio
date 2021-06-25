'use strict'

$(function(){
    var $tabSub = $('.tab2-sub')
    var $tabMenu2 = $('.tab-menu2')

    $tabSub.hide()
    $tabSub.eq(0).show()
    $tabMenu2.click(function(){
        var idx = $(this).index()
        $tabMenu2.removeClass('select')
        $(this).addClass('select')
        $tabSub.hide()
        $tabSub.eq(idx).show()
    })

    var $sideUp = $('.top')

    $sideUp.click(function(){
        $(window).scrollTo({ top: 0, behavior: 'smooth'}) 
    })

    /* ---------------- 슬라이더 1번 ---------------- */
    $('.main__banner').slick({
        dots: false,
        /* 여기다 커스텀한 화살표를 지정해 줄수 있어요 */
        prevArrow: $('.banner__prev'),
        nextArrow: $('.banner__next')
    });

    /* ---------------- 슬라이더 2번 ---------------- */
    $('.sea-item').slick({
        
    });

})