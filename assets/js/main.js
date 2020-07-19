/**
 * Slide Useful Tips
 */
$(document).ready(function() {
    let owl = $("#owlSliderTips");
    owl.owlCarousel({
        items:2,
        loop:true,
        margin:10,
        // navigation : true,
        nav:true,
        navText: ["<span class='display-arrow-left carousel-nav-left'>\n" +
        "                    <div class=\"hover-circle-left justify-middle-contents tipsPrev\">\n" +
        "                        <img class=\"arrow-size Alabama\" src=\"assets/images/home/arrow-left-black.png\" alt=\"\" />\n" +
        "                </div></span>","<span class='display-arrow-right carousel-nav-right'>\n" +
        "                    <div class=\"w3-right hover-circle-right justify-middle-contents tipsNext\">\n" +
        "                        <img class=\"arrow-size Atlanta\" src=\"assets/images/home/arrow-right-black.png\" alt=\"\" />\n" +
        "                </div></span>"],
        dots:true,
        autoplay:true,
        autoplayTimeout:2500,
        // autoWidth:true,
        // paginationSpeed: 300,
        // rewindSpeed: 400,

        responsive:{
            0:{
                items:1
            },

            600:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:2
            }
        }

    });

    owl.trigger('owl.play',2500);

    // Custom Navigation Events
    $(".tipsNext").click(function(){
        owl.trigger('owl.next');
    });

    $(".tipsPrev").click(function(){
        owl.trigger('owl.prev');
    });

    $('.hover-circle-left img').mouseenter(function() {
        $(this).attr('src', 'assets/images/home/arrow-left-red.png')
    });

    $('.hover-circle-left img').mouseleave(function() {
        $(this).attr('src', 'assets/images/home/arrow-left-black.png')
    });

    $('.hover-circle-right img').mouseenter(function() {
        $(this).attr('src', 'assets/images/home/arrow-right-red.png')
    });

    $('.hover-circle-right img').mouseleave(function() {
        $(this).attr('src', 'assets/images/home/arrow-right-black.png')
    });

});

/**
 * Slide Reviews
 */
$(document).ready(function() {
    let owl = $("#owlSliderReviews");
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:10,
        // navigation : true,
        nav:true,
        navText: ["<span class='display-arrow-left carousel-nav-left'>\n" +
        "                    <div class=\"hover-circle-left justify-middle-contents tipsPrev\">\n" +
        "                        <img class=\"arrow-size Alabama\" src=\"assets/images/home/arrow-left-black.png\" alt=\"\" />\n" +
        "                </div></span>","<span class='display-arrow-right carousel-nav-right'>\n" +
        "                    <div class=\"w3-right hover-circle-right justify-middle-contents tipsNext\">\n" +
        "                        <img class=\"arrow-size Atlanta\" src=\"assets/images/home/arrow-right-black.png\" alt=\"\" />\n" +
        "                </div></span>"],
        autoplay:true,
        dots:true,
        autoplayTimeout:2500,

        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    owl.trigger('owl.play',2500);

    $(".tipsNext").click(function(){
        owl.trigger('owl.next');
    });
    $(".tipsPrev").click(function(){
        owl.trigger('owl.prev');
    });

    $('.hover-circle-left img').mouseenter(function() {
        $(this).attr('src', 'assets/images/home/arrow-left-red.png')
    });
    $('.hover-circle-left img').mouseleave(function() {
        $(this).attr('src', 'assets/images/home/arrow-left-black.png')
    });
    $('.hover-circle-right img').mouseenter(function() {
        $(this).attr('src', 'assets/images/home/arrow-right-red.png')
    });
    $('.hover-circle-right img').mouseleave(function() {
        $(this).attr('src', 'assets/images/home/arrow-right-black.png')
    });
});


/**
 * Slide Last Viewed
 */
$(document).ready(function() {
    let owl = $("#owlSliderLastViewed");
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        // navigation : true,
        nav:true,
        navText: ["<span class='display-arrow-left carousel-nav-left'>\n" +
        "                    <div class=\"hover-circle-left justify-middle-contents tipsPrev\">\n" +
        "                        <img class=\"arrow-size Alabama\" src=\"assets/images/home/arrow-left-black.png\" alt=\"\" />\n" +
        "                </div></span>","<span class='display-arrow-right carousel-nav-right'>\n" +
        "                    <div class=\"w3-right hover-circle-right justify-middle-contents tipsNext\">\n" +
        "                        <img class=\"arrow-size Atlanta\" src=\"assets/images/home/arrow-right-black.png\" alt=\"\" />\n" +
        "                </div></span>"],
         autoplay:true,
        dots:false,
        autoplayTimeout:2500,

        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    owl.trigger('owl.play',2500);

    $(".tipsNext").click(function(){
        owl.trigger('owl.next');
    });
    $(".tipsPrev").click(function(){
        owl.trigger('owl.prev');
    });

    $('.hover-circle-left img').mouseenter(function() {
        $(this).attr('src', 'assets/images/home/arrow-left-red.png')
    });
    $('.hover-circle-left img').mouseleave(function() {
        $(this).attr('src', 'assets/images/home/arrow-left-black.png')
    });
    $('.hover-circle-right img').mouseenter(function() {
        $(this).attr('src', 'assets/images/home/arrow-right-red.png')
    });
    $('.hover-circle-right img').mouseleave(function() {
        $(this).attr('src', 'assets/images/home/arrow-right-black.png')
    });
});



/**
 * Slide iPhone
 */
$(document).ready(function() {
    let owl = $("#owlSliderIPhone");
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,

        autoplay:true,
        dots:true,
        autoplayTimeout:2500
    });

    owl.trigger('owl.play',2500);
});





/**
 *
 *
 * Collection page
 *
 *
 */

function creatingProducts() {
    document.getElementById('productList').innerHTML = '';
    for(let k = firstP; k < firstP + nCount; k ++) {
        id_star = 'starReview' + k.toString();

        if (k % 2 === 1) {
            document.getElementById('productList').innerHTML += '<div class="air-card-bg-slider air-cardB">\n' +
                '                            <div class="rL-float">\n' +
                '                                <div class="icon-size1 percentY">\n' +
                '                                    <div>35%</div>\n' +
                '                                    <div>OFF</div>\n' +
                '                                </div>\n' +
                '                                <div class="icon-size2 justify-middle-contents off245">\n' +
                '                                    245 <img class="heart-icon-size hover-hidden" src="assets/images/home/heart-line.png" alt="" />\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '\n' +
                '                            <div>\n' +
                '                                <img class="img-item productList-size1" src="assets/images/home/lastView2.png" alt="" />\n' +
                '                            </div>\n' +
                '                            <div>\n' +
                '                                <span id="'+ id_star +'"></span>\n' +
                '                            </div>\n' +
                '\n' +
                '                            <div class="txt-description">Armor Silicone Airpods Pro Case Cover</div>\n' +
                '                        </div>';
        } else {
            document.getElementById('productList').innerHTML += '<div class="air-card-bg-slider air-cardB">\n' +
                '                            <div class="rL-float">\n' +
                '                                <div class="icon-size1">\n' +
                '                                    <div>45%</div>\n' +
                '                                    <div>OFF</div>\n' +
                '                                </div>\n' +
                '\n' +
                '                                <div class="iconOrange">\n' +
                '                                    <div>2 days</div>\n' +
                '                                    <div>shipping</div>\n' +
                '                                </div>\n' +
                '\n' +
                '                                <div class="icon-size2 justify-middle-contents off245">\n' +
                '                                    245 <img class="heart-icon-size hover-hidden" src="assets/images/home/heart-line.png" alt="" />\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '\n' +
                '                            <div>\n' +
                '                                <img class="img-item productList-size2" src="assets/images/home/lastView8.png" alt="" />\n' +
                '                            </div>\n' +
                '                            <div>\n' +
                '                                <span id="' + id_star + '"></span><a class="txt-star">25 reviews</a>\n' +
                '                            </div>\n' +
                '\n' +
                '                            <div class="txt-description">Armor Silicone Airpods Pro Case Cover</div>\n' +
                '                        </div>';
        }

        /**
         * Heart Hover Replacing
         *
         */
        $('.icon-size2').mouseenter(function() {
            $(this).find('img').attr('src', 'assets/images/home/heart-icon-white.png')
        });

        $('.icon-size2').mouseleave(function() {
            $(this).find('img').attr('src', 'assets/images/home/heart-line.png')
        });
    }
    creatingStars();
}

/**
 * Making the star marking
 * @type {number[]}
 * starArray is the review count array per each products
 */


function creatingStars() {
    for(let k = 1; k <= starArray.length; k ++) {
        id_star = 'starReview' + k.toString();
        if ($('#' + id_star).length !== 0) {
            document.getElementById(id_star).innerHTML = '';

            for (let yStar = 1; yStar <= starArray[k - 1]; yStar ++) {
                document.getElementById(id_star).innerHTML += '<span><img src="assets/images/home/lastView-yellow.png" alt="" /></span>';
            }

            for (let gStar = 5; gStar > starArray[k - 1]; gStar --) {
                document.getElementById(id_star).innerHTML += '<span><img src="assets/images/home/lastView-gray.png" alt="" /></span>';
            }
        }
    }
}


/**
 *
 * Slide Product Last Viewed
 */
$(document).ready(function() {
    let owl = $("#owlSliderLastViewedProduct2");
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        // navigation : true,
        nav:true,
        navText: ["<span class='display-arrow-left carousel-nav-left'>\n" +
        "                    <div class=\"hover-circle-left justify-middle-contents tipsPrev\">\n" +
        "                        <img class=\"arrow-size Alabama\" src=\"assets/images/home/arrow-left-black.png\" alt=\"\" />\n" +
        "                </div></span>","<span class='display-arrow-right carousel-nav-right'>\n" +
        "                    <div class=\"w3-right hover-circle-right justify-middle-contents tipsNext\">\n" +
        "                        <img class=\"arrow-size Atlanta\" src=\"assets/images/home/arrow-right-black.png\" alt=\"\" />\n" +
        "                </div></span>"],
        autoplay:true,
        dots:false,
        autoplayTimeout:2500,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    $(".tipsNext").click(function(){
        owl.trigger('owl.next');
    });
    $(".tipsPrev").click(function(){
        owl.trigger('owl.prev');
    });

    $('.hover-circle-left img').mouseenter(function() {
        $(this).attr('src', 'assets/images/home/arrow-left-red.png')
    });
    $('.hover-circle-left img').mouseleave(function() {
        $(this).attr('src', 'assets/images/home/arrow-left-black.png')
    });
    $('.hover-circle-right img').mouseenter(function() {
        $(this).attr('src', 'assets/images/home/arrow-right-red.png')
    });
    $('.hover-circle-right img').mouseleave(function() {
        $(this).attr('src', 'assets/images/home/arrow-right-black.png')
    });
});


$(document).ready(function() {
    let owl = $("#owlSliderLastViewedProduct1");
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        // navigation : true,
        nav:true,
        navText: ["<span class='display-arrow-left carousel-nav-left'>\n" +
        "                    <div class=\"hover-circle-left justify-middle-contents tipsPrev\">\n" +
        "                        <img class=\"arrow-size Alabama\" src=\"assets/images/home/arrow-left-black.png\" alt=\"\" />\n" +
        "                </div></span>","<span class='display-arrow-right carousel-nav-right'>\n" +
        "                    <div class=\"w3-right hover-circle-right justify-middle-contents tipsNext\">\n" +
        "                        <img class=\"arrow-size Atlanta\" src=\"assets/images/home/arrow-right-black.png\" alt=\"\" />\n" +
        "                </div></span>"],
        autoplay:true,
        dots:false,
        autoplayTimeout:2500,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    $(".tipsNext").click(function(){
        owl.trigger('owl.next');
    });
    $(".tipsPrev").click(function(){
        owl.trigger('owl.prev');
    });

    $('.hover-circle-left img').mouseenter(function() {
        $(this).attr('src', 'assets/images/home/arrow-left-red.png')
    });
    $('.hover-circle-left img').mouseleave(function() {
        $(this).attr('src', 'assets/images/home/arrow-left-black.png')
    });
    $('.hover-circle-right img').mouseenter(function() {
        $(this).attr('src', 'assets/images/home/arrow-right-red.png')
    });
    $('.hover-circle-right img').mouseleave(function() {
        $(this).attr('src', 'assets/images/home/arrow-right-black.png')
    });
});
