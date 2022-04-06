
if ($(window).width() <= 640) {
    $(document).on('ready', function() {
        $(".bestfilms").slick({
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });
}

if ($(window).width() <= 1024) {
    $(document).on('ready', function() {
        $(".bestfilms").slick({
            dots: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2
        });
    });
}

    if($(window).width() < 1300) {
        $(document).on('ready', function() {
            $(".bestfilms").slick({
                dots: false,
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 3
            });
        }); 
    }
    if($(window).width() >= 1300) {
        $(document).on('ready', function() {
            $(".bestfilms").slick({
                dots: false,
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 4
            });
        }); 
    }