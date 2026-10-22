let services = null;

(async function () {
    let res = await fetch ("https://semicode.tech/api/v1/l10nhouse/services");

    services = await res.json();

    let i = 0;

    for (let service of services) {
        $("#Services .row").append(`
            <div class="col-md-6 wow ${((i + 1) % 2 == 0)? 'animate__fadeInRight' : 'animate__fadeInLeft'}" data-wow-delay="${i * .2}s">
                <div class="box item text-center">
                    <img src="./images/${service.icon}" alt="Translation">
                    <h5 class="my-3">${service.title}</h5>
                    <p>${prepareDesc(service.description.slice(0, 150))}... <a class="firstColor fw-medium" onclick="showService(${i})">Read More</a></p>
                </div>
            </div>
        `);

        i++;
    }


})();

(async function () {
    let res = await fetch ("https://semicode.tech/api/v1/l10nhouse/sectors");

    sectors = await res.json();

    let i = 0;

    for (let sector of sectors) {
        $(".popup[data-popup-name='sectors'] .row").append(`
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="item rounded-3 text-center p-3">
                    <img src="./images/sec/${sector.icon}" class="img-fluid" alt="agriculture">
                    <p class="mb-0 mt-3">${sector.name}</p>
                </div>
            </div>
        `);

        i++;
    }


})();

(async function () {
    let res = await fetch ("https://semicode.tech/api/v1/l10nhouse/languages");

    languages = await res.json();

    let i = 0;

    for (let language of languages) {
        $(".popup[data-popup-name='languages'] .body").append(`
            <div class="section">
                <h5>${language.continent}</h5>
                <ul class="list-unstyled">
                    ${prepareLanguages(language.languages)}
                </ul>
            </div>
        `);

        i++;
    }


})();

$(".popup .box").click(function (e) {
    e.stopPropagation();
});

$(window).scroll(function (e) {
    $("nav").toggleClass("scrolled", window.scrollY >= 10);

    let $sections = $('header, section[id]');

    $sections.each(function (index, section) {
        let $section = $(section),
            sectionId = $section.attr('id'),
            sectionTop = $section.offset().top,
            sectionBottom = sectionTop + $section.outerHeight(true),
            navbarHeight = $('nav').outerHeight(true),
            scrollY = window.scrollY + navbarHeight;
    
            if (scrollY > sectionTop && scrollY < sectionBottom) {
                $(`.nav-link.active`).removeClass('active');
                $(`.nav-link[href="#${sectionId}"]`).addClass('active');
            }
    });

});

$(window).scroll(function() {
    if ($(window).scrollTop() >= 200) {
        $("#Top").css("right", "-52px"); 
    } else {
        $("#Top").css("right", "-100px"); 
    }
});

$(window).on("load", function () {
    $(".loadingScreen").fadeOut(1000);
    $("body").css("overflow-y", "auto");
});

new WOW({
    animateClass: 'animate__animated',
}).init();

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 30,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});