function prepareDesc (desc) {
    let regax = /L10N House/gmi;

    return desc.replaceAll(regax, `<span class="secondColor fw-medium"><span class="firstColor fw-medium">L10N</span> House</span>`);
}

function openPopup (PopupName) {
    $("body").css('overflow-y', 'hidden');
    $(`.popup[data-popup-name="${PopupName}"]`).css("display", "flex").hide().fadeIn(1000, function () {
        if (PopupName == 'languages') {
            $(this).find('.box').addClass('show')   
        }
    });
}

function closePopup (PopupName) {
    $("body").css('overflow-y', 'auto');
    let $popup = $(`.popup[data-popup-name="${PopupName}"]`);

    if (PopupName == 'languages') {
        $popup.find('.box').removeClass('show');
        $popup.delay(500).fadeOut(1000);
    } else {
        $popup.fadeOut(1000);
    }

}

function preparePoints(points) {

    let lis = ``;

        for (let point of points) {
            lis += `
                <li>${point}</li>
            `;
        }

    return lis; 
}

function prepareSectionsOfService (sections) {

    let sectionsEle = ``;

    let i = 0;

    for (let section of sections) {

        sectionsEle += `
            <section class="${(i != 0) ? 'mt-4' : ''}">
                <h6>${section.title}</h6>
                <ol>
                    ${preparePoints(section.points)}
                </ol>
            </section>
        `;

        i++;
    }

    return sectionsEle;
}

function showService (serviceIndex) {

    let service  = services[serviceIndex];    

    $(`.popup[data-popup-name="service"] .box .body`).html(`
                <h4 class="mb-5 fw-bold text-center secondColor">${service.title}</h4>
                <div class="row mb-5">
                    <div class="col-md-6">
                        <div class="item">
                            <p>${prepareDesc(service.description)}</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="item">
                            <img src="./images/${service.img}" class="rounded-3 img-fluid" alt="trans">
                        </div>
                    </div>
                </div>
                ${prepareSectionsOfService (service.sections)}
            
        `)

    openPopup('service');
}

function prepareLanguages(languages) {
    let lis = ``;

        for (let language of languages) {
            lis += `
                <li><i class="fa-regular fa-circle-dot"></i> ${language}</li>
            `;
        }

    return lis; 
}

function goToTop () {
    $("html, body").animate({ scrollTop: 0 }, 500);
}
