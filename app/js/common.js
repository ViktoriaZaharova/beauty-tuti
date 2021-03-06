$('.load-more').on('click', function (e) {
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parents('.category-services').find('.category-services-body');


    if (!$this.hasClass('trigger')) {
        $this.addClass('trigger').html('Свернуть');
        content.addClass('open', 200);
    } else {
        $this.removeClass('trigger').html('Показать все');
        content.removeClass('open', 200);
    }



});

$('.load-more__links').on('click', function (e) {
    e.preventDefault();
    $(this).parent().find('.services-list__hidden li:hidden').fadeIn();

    var onBlock = $('.services-list__hidden li:hidden').length;
    if (onBlock <= 0) {
        $('.load-more__links').hide();
    }
});

$('.interview-specialist__slider').slick({
    slidesToShow: 2,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false,
    responsive: [
        {
            breakpoint: 1040,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});


$('.interview-salon__slider').slick({
    slidesToShow: 2,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false,
    responsive: [
        {
            breakpoint: 1040,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.section-specialists-promo__slider').slick({
    slidesToShow: 2,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.sale-slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false,
    responsive: [
        {
            breakpoint: 1040,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 590,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.page-content__specialist-slider').slick({
    slidesToShow: 2,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false,
    responsive: [
        {
            breakpoint: 1040,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.gallery-slider').slick({
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false,
    responsive: [
        {
            breakpoint: 1030,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});

$('.document-slider').slick({
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false,
    responsive: [
        {
            breakpoint: 1030,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});

$('.specialist-company__slider').slick({
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false,
    responsive: [
        {
            breakpoint: 1030,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 430,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});


$('.btn-close, .overlay').click(function () {
    $('.overlay').fadeOut();
    $('.mobile-menu').fadeOut();
});

$('.btn-burger').click(function () {
    $('.overlay').fadeIn();
    $('.mobile-menu__cabinet').fadeIn();
});

$('.btn-services').click(function (e) {
    e.preventDefault();
    $('.overlay').fadeIn();
    $('.mobile-menu__services').fadeIn();
});

$('.btn-filter, .links-menu__filter').click(function (e) {
    e.preventDefault();
    $('.overlay').fadeIn();
    $('.mobile-menu__filter').fadeIn();
});

$('.filter-box .filter-box__title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.filter-box .filter-box__title').not(this).removeClass('in').next().slideUp();
});

$('.certificate-slider').slick({
    slidesToShow: 5,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false,
    responsive: [
        {
            breakpoint: 1040,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 920,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 3
            }
        }
    ]
});

$('.main-services-category__slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
});

$('.btn-diploma').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('click-btn').parents('.specialist-line__wrap').find('.specialist-line__wrap-hidden').slideToggle();

});

// slick active
$(window).on('load resize', function () {
    if ($(window).width() < 520) {
        $('.specialists-new__wrapper').slick({
            slidesToShow: 1,
            variableWidth: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            infinite: false
        });
    } else {
        $(".specialists-new__wrapper.slick-initialized").slick("unslick");
    }
});
// slick active

// fixed sidebar


$(function () {
    var topPos = $('.sidebar-wrapper__catalog').offset().top;
    $(window).scroll(function () {
        var top = $(document).scrollTop(),
            pip = $('.page-content > .pagination').offset().top,
            height = $('.sidebar-wrapper__catalog').outerHeight();
        if (top > topPos && top < pip - height) {
            $('.sidebar-wrapper__catalog').addClass('fixed').removeAttr("style");
        } else if (top > pip - height) {
            $('.sidebar-wrapper__catalog').stop().removeClass('fixed').css({'position': 'relative', 'top': '0'});
        } else {
            $('.sidebar-wrapper__catalog').removeClass('fixed');
        }
    });
});

$(function () {
    var topPos = $('.sidebar-wrapper__masters').offset().top;
    $(window).scroll(function () {
        var top = $(document).scrollTop(),
            pip = $('footer').offset().top,
            height = $('.sidebar-wrapper__masters').outerHeight();
        if (top > topPos && top < pip - height) {
            $('.sidebar-wrapper__masters').addClass('fixed').removeAttr("style");
        } else if (top > pip - height) {
            $('.sidebar-wrapper__masters').removeClass('fixed').css({'position': 'absolute', 'bottom': '0'});
        } else {
            $('.sidebar-wrapper__masters').removeClass('fixed');
        }
    });
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('.company-nav-box').addClass('new-block');
    } else {
        $('.company-nav-box').removeClass('new-block');
    }
});

$(window).scroll(function () {
    var $sections = $('section');
    $sections.each(function (i, el) {
        var top = $(el).offset().top - 100;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
            $('.menu-card a.active').removeClass('active');
            $('.menu-card a[href="#' + id + '"]').addClass('active');

        }
    })
});


$(".menu-card").on("click", "a", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();

    var heder = $('.header').height();

    // получем идентификатор блока из атрибута href
    var id = $(this).attr('href'),

        // находим высоту, на которой расположен блок
        top = $(id).offset().top;

    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({scrollTop: top - heder}, 800);
});

$('.gallery-box').fancybox();

$('.document-box').fancybox();


$('.reviews').each(function () {
    if ($(this).find('.review-box__wrap').length > 5) {
        $(this).find('.review-box__wrap').slice(5).hide();
    }

});

$('.load-more-btn').on('click', function (e) {
    e.preventDefault();
    $('.review-box__wrap:hidden').slice(0, 3).slideDown();

    var onBlock = $('.review-box__wrap:hidden').length;
    if (onBlock <= 0) {
        $('.load-more-btn').hide();
    }
});

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

$("#specialization").selectmenu({appendTo: ".filter-menu__specialization"})
    .selectmenu("menuWidget")
    .addClass("overflow");

$("#district").selectmenu({appendTo: ".filter-menu__district"})
    .selectmenu("menuWidget")
    .addClass("overflow");

$("#district-mobile").selectmenu({appendTo: ".filter-menu__content-mob"})
    .selectmenu("menuWidget")
    .addClass("overflow");

$("#specialization-mobile").selectmenu({appendTo: ".filter-menu__content-mobile"})
    .selectmenu("menuWidget")
    .addClass("overflow");

$('.menu-category-wrapper .menu-category__item').hover(function (e) {
    e.preventDefault();
    $('.menu-category-wrapper .menu-category__item').removeClass('active');
    $(this).addClass('active');
});

$('.menu-category-wrapper .submenu-category__item').hover(function (e) {
    e.preventDefault();
    $('.menu-category-wrapper .submenu-category__item').removeClass('active');
    $(this).addClass('active');
});

$('.mobile-menu .menu-category__links').click(function (e) {
    e.preventDefault();
    $('.mobile-menu .menu-category__links').removeClass('click');
    $(this).addClass('click').siblings('.submenu-category').fadeIn();
});

$('.mobile-menu .submenu-category__links').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('click').siblings('.submenu-category-level2').fadeToggle();
});

$('.btn-next-menu').click(function (e) {
    e.preventDefault();
    $('.mobile-menu .submenu-category').fadeOut();
});

$('.btn-category').click(function () {
    $(this).toggleClass('click');
    $('.header').toggleClass('header-click');
    $('.menu-category-wrapper').fadeToggle();
});

$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".menu-category-wrapper"); // тут указываем ID элемента
    var btn = $('.btn-category');
    if (!div.is(e.target) // если клик был не по нашему блоку
        && !btn.is(e.target) && btn.has(e.target).length === 0
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(); // скрываем его
        btn.removeClass('click');
    }
});