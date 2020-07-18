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
