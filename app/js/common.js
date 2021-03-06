function scrollAnimate(selector, selectorAdd){
    var absOffsetTop = selector.offset().top - 170;
    var scrollWin = $(window).scrollTop();

    var bottomSelectorPosition = selector.offset().top + selector.outerHeight();

    if (scrollWin >= absOffsetTop) {
        //console.log('addClass animate');
        selectorAdd.addClass('active');
    } else {
        console.log('removeClass active')
        selectorAdd.removeClass('active');
    }

    if(scrollWin >= bottomSelectorPosition - 170){
        selectorAdd.removeClass('active');
    }
};
function MainSliderInit(){//слайдер на главной странице
    $('.main-slider').slick({
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="15px"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)" d="M9.006,1.033 C8.971,1.061 8.934,1.087 8.902,1.118 C6.805,3.175 4.709,5.231 2.612,7.288 C2.580,7.319 2.549,7.352 2.508,7.395 C2.547,7.437 2.582,7.477 2.621,7.514 C4.710,9.564 6.799,11.613 8.890,13.662 C8.924,13.696 8.967,13.723 9.006,13.753 C9.006,13.783 9.006,13.812 9.006,13.842 C8.859,13.979 8.710,14.113 8.566,14.253 C8.306,14.506 8.048,14.762 7.806,15.000 C5.210,12.455 2.621,9.917 -0.005,7.343 C0.017,7.331 0.075,7.312 0.114,7.274 C2.544,4.893 4.973,2.511 7.402,0.129 C7.571,-0.037 7.972,-0.038 8.140,0.126 C8.428,0.408 8.717,0.691 9.006,0.973 C9.006,0.993 9.006,1.013 9.006,1.033 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="15px"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)" d="M-0.006,13.967 C0.029,13.939 0.066,13.913 0.097,13.881 C2.195,11.825 4.291,9.769 6.388,7.712 C6.420,7.681 6.451,7.648 6.492,7.605 C6.453,7.563 6.418,7.523 6.379,7.486 C4.290,5.436 2.201,3.387 0.110,1.338 C0.076,1.304 0.033,1.277 -0.006,1.248 C-0.006,1.218 -0.006,1.188 -0.006,1.158 C0.141,1.021 0.290,0.887 0.434,0.747 C0.695,0.494 0.952,0.239 1.194,-0.000 C3.790,2.545 6.379,5.083 9.005,7.657 C8.983,7.669 8.925,7.688 8.886,7.726 C6.456,10.107 4.027,12.489 1.598,14.871 C1.429,15.037 1.028,15.038 0.860,14.874 C0.572,14.592 0.283,14.309 -0.006,14.027 C-0.006,14.007 -0.006,13.987 -0.006,13.967 Z"/></svg>' +
        '</button>',
        dots: true,
        infinite: true,
        arrows: false,
        dotsClass: 'slick-dots container d-flex align-items-center justify-content-end',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: false
                }
            }
        ]
    });

    $(document).on('click', '.slider-trigers .item-t', function () {
        var slideIndex = $(this).index();
        console.log('slideIndex = ', slideIndex);
        // $( '.main-slider' ).slickGoTo( parseInt(slideIndex) );

        var slider = $('.main-slider');
        slider[0].slick.slickGoTo(parseInt(slideIndex));

    });
}
function feedbackSliderSliderInit(){//слайдер на главной странице
    $('.feedback-slider').on('init', function(slick){
        console.log('.feedback-slider init was hit');

        $('.feedback-slider .slick-slide').each(function(index){
            $(this).attr('data-mh',$('.feedback-slider .slick-slide')[index].clientHeight+26);
        });

        heightFeedback();

    });

    $('.feedback-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        heightFeedback();
    });

    $('.feedback-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="29px"><path fill-rule="evenodd" fill="rgb(208, 208, 208)" d="M7.852,14.105 C7.972,14.185 8.110,14.246 8.209,14.347 C10.835,17.037 13.456,19.732 16.078,22.426 C17.313,23.695 17.316,25.222 16.087,26.487 C15.869,26.712 15.651,26.937 15.432,27.160 C14.292,28.318 12.763,28.328 11.627,27.167 C9.521,25.014 7.423,22.852 5.322,20.694 C3.851,19.183 2.379,17.673 0.909,16.161 C-0.295,14.922 -0.291,13.098 0.919,11.854 C4.466,8.210 8.013,4.567 11.560,0.925 C12.777,-0.324 14.275,-0.324 15.490,0.921 C15.717,1.154 15.945,1.387 16.171,1.621 C17.281,2.771 17.285,4.355 16.174,5.498 C13.528,8.219 10.879,10.937 8.230,13.655 C8.129,13.758 8.008,13.839 7.897,13.931 C7.882,13.989 7.867,14.047 7.852,14.105 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="28px"><path fill-rule="evenodd" fill="rgb(208, 208, 208)" d="M9.148,13.895 C9.028,13.816 8.890,13.755 8.791,13.653 C6.165,10.969 3.544,8.281 0.922,5.593 C-0.313,4.326 -0.316,2.803 0.913,1.541 C1.131,1.317 1.349,1.092 1.568,0.869 C2.708,-0.286 4.237,-0.296 5.373,0.863 C7.479,3.011 9.577,5.168 11.678,7.321 C13.149,8.828 14.621,10.335 16.091,11.843 C17.295,13.080 17.291,14.900 16.081,16.142 C12.534,19.777 8.987,23.412 5.440,27.046 C4.223,28.292 2.725,28.292 1.510,27.049 C1.283,26.817 1.055,26.585 0.829,26.352 C-0.281,25.203 -0.285,23.624 0.826,22.483 C3.472,19.768 6.121,17.056 8.770,14.345 C8.871,14.242 8.992,14.160 9.103,14.069 C9.118,14.011 9.133,13.953 9.148,13.895 Z"/></svg>' +
        '</button>'
    });
}


//Sticky scroll start
var $sticky =  $('.sticky-bar'),//объект стики
    $stickyrStopper = $('.sticky-stopper'),//объект до куда плывет бар
    generalSidebarHeight,//высота стики бара
    stickyTop,//отступ внутри body
    stickOffset,//отступ от топа окна
    stickyStopperPosition,//позиция объекта, до которого плывет стики бар
    stopPoint,//конкретная точка, до которого плывет стики бар
    diff,//Позиция внутри контейнера, при абсолютном позицианировании
    parentOffsetTop;

function calcSticky(){
    $sticky = $('.sticky-bar');
    $stickyrStopper = $('.sticky-stopper');
    generalSidebarHeight = $sticky.innerHeight();
    stickyTop = $sticky.offset().top;
    parentOffsetTop = $sticky.parent().offset().top;
    stickOffset = 0;
    stickyStopperPosition = $stickyrStopper.offset().top;
    stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
    diff = stopPoint + stickOffset;
    if (!!$sticky.offset()) { // make sure ".sticky" element exists
        generalSidebarHeight = $sticky.innerHeight();
        stickyTop = $sticky.offset().top;
        stickOffset = 0;
        stickyStopperPosition = $stickyrStopper.offset().top;
        stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
        diff = stopPoint + stickOffset;
    }
}

$( document ).ready(function() {

    $(window).scroll(function(){ // scroll event
        var windowTop = $(window).scrollTop(); // returns number
        if (stopPoint < windowTop) {
            // console.log('stopPoint < windowTop');
            $sticky.css({ position: 'absolute', top: diff });
        } else if (stickyTop <= windowTop+stickOffset) {
            // console.log('stickyTop < windowTop+stickOffset');
            $sticky.css({ position: 'fixed', top: stickOffset });
        }else if(parentOffsetTop >= windowTop){//Родитель стики
            // console.log('parentOffsetTop >= windowTop');
            $sticky.css({position: 'absolute', top: 'initial'});
        }else if(stickyTop > parentOffsetTop){
            $sticky.css({ position: 'fixed', top: stickOffset });
        }
        if(stickyTop < parentOffsetTop){
            $sticky.css({position: 'absolute', top: 'initial'});
        }

        // else {
        // 		 console.log('else');
        // 		// console.log('--stopPoint=', stopPoint);
        // 		// console.log('--windowTop=', windowTop);
        //     $sticky.css({position: 'absolute', top: 'initial'});
        // }
    });

    calcSticky();
    $(window).scroll();
});

$(window).resize(function () {

    setTimeout(function() { calcSticky(); }, 2000);
    console.log('resized win')
});
//Sticky scroll end



$(function() {
    /*datepicker start*/

    //Календарь для выбора даты
    var now = new Date();
    var minDate = new Date(new Date().getTime() + 30 * 60 * 1000);//now +30 минут
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate()+1);//now + 1 day

    var datetime = $('.datepicker-here').datepicker({
        dateFormat : 'dd.mm.yyyy',
        minDate: minDate,
        maxDate: maxDate,
        onSelect: function(fd, d, picker) {
            console.log('dateSelected', $('.datepicker-here').val());
        }
    });

    /*datepicker end*/


    $('.js-single-i input[type=checkbox]').on('change', function() {
        $('.js-single-i input[type=checkbox]').not(this).prop('checked', false);
    }); 
    //setInvest start
    $('select').styler({
        selectSearch: true,
    });
    //setInvest end


    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });


    $('#my-menu').html($('.main-menu').html());

    //var  socials = $("#my-menu").data();
    $("#my-menu").mmenu({
        "extensions": [
            "fx-panels-none",
            "fx-listitems-slide"
        ],
        "offCanvas": {
            "position": "bottom"
        },
        "navbar": {
            "title": ""
        },
        "pageScroll": true
    });

    //Если меню выезжает снизу, расчитываем размер шапки и выкатываем меню до неё
    //mmenu bagfix

    // $(".mm-menu.mm-offcanvas.mm-bottom").css('height', $(window).height() - $('.header-top').height());
    var api = $("#my-menu").data( "mmenu" );
    //   Hook into methods
    // api.bind( "open:after", function() {
    //     });

    api.bind( "open:finish", function() {
        $("#menu-btn").addClass('is-active');
        $(".mm-menu.mm-offcanvas.mm-bottom").css('height', $(window).height() - $('#my-header').height());

        //bugfix fixed menu 1-3 START
        $(window).scroll();
        $("#my-header").css({ top: $(window).scrollTop()});
    });
    api.bind( "open:start", function() {
        $(window).scroll();
        //bugfix fixed menu 2
        $("#my-header").css({ top: $(window).scrollTop() });
    });
    api.bind( "open:before", function() {
        $('#my-menu').css('top', $('#my-header').outerHeight());
    });
    api.bind( "close:finish", function() {
        $("#menu-btn").removeClass('is-active');

        //bugfix fixed menu 3 END
        $("#my-header").css({ top: 0});
    });




//    Sticky menu open start
    $('#my-menu2').html($('.close-c').html() + $('.main-menu').html());

    $(document).on('click', '#stickyMenu-btn', function () {
        if($(this).hasClass('is-active')){
            $(this).removeClass('is-active');
            $('.mmenu2').removeClass('active');
        }else{
            $(this).addClass('is-active');
            $('.mmenu2').addClass('active');
        }
    });
    $(document).on('click', '.close-btn-cc .close-btn', function () {
        $('#stickyMenu-btn').removeClass('is-active');
        $('.mmenu2').removeClass('active');
    });
    $(document).on('click', '.garmoshka .btn-trigger', function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next().removeClass('active');
            $(this).next().slideUp();
            setTimeout(function() { calcSticky(); }, 1000);//Делаем перерасчёт для сайдбара из-за измененмя высоты окна
        }else{
            $(this).addClass('active');
            $(this).next().addClass('active');
            $(this).next().slideDown();
            setTimeout(function() { calcSticky(); }, 1000);//Делаем перерасчёт для сайдбара из-за измененмя высоты окна
        }




    });
 
//    Sticky menu open end


});
