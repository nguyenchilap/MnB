(function() {
    const years = [];
    const wishes = WISHES;
    const mainBackGroundImg = '/assets/imgs/MnB_1.HEIC';

    function setYearOptions(numberOfYears) {
        const thisYear = new Date().getFullYear();
        for (let year = 2024; year < 2024 + numberOfYears; year++) {
            years.push(year);
            $('#content .years-selector').append(HTML_ELEMENTS.wishesForM.yearOption(year, year <= thisYear));

            //on year item clicked
            $(`#content .years-selector .year-item[value=${year}]`).click((event) => {
                setWishesByYear(event.target.getAttribute("value"));
                $('.title .btn-back').css('display', 'block');
            })
        }
    }

    function setWishesByYear(year) {
        const wishesByYear = wishes.filter(wish => wish.year.toString() === year);
        $('#content .years-selector').css('display', 'none');
        $('#content .wishes-selector').css('display', 'flex');
        $('#content .wishes-selector').html('');
        wishesByYear.forEach((wish, index) => {
            $('#content .wishes-selector').append(HTML_ELEMENTS.wishesForM.wishOption(index, wish.name));

            //on wish item clicked
            $(`#content .wishes-selector .wish-item[value=${index}]`).click((event) => {
                const wishIndex = event.target.getAttribute("value");
                $('#content .wishes-selector').css('display', 'none');
                showWish(wishesByYear[wishIndex]);
            })
        })
    }

    function showWish(wish) {
        $('.wish-content').css('display', 'flex');
        $('#content').css('background-image', `url(${wish.background})`);
        $('.wish-content').html(wish.wish);
    }

    function setBackBtnFunc() {
        $('.title .btn-back').click(() => {
            const wishContent = $('.wish-content');
            const yearsSelector = $('.years-selector');
            const wishesSelector = $('.wishes-selector');
    
            if (wishContent.css('display') !== 'none') {
                wishContent.css('display', 'none');
                wishesSelector.css('display', 'flex');
                $('#content').css('background-image', `url(${mainBackGroundImg})`);
            } else if (wishesSelector.css('display') !== 'none') {
                wishesSelector.css('display', 'none');
                yearsSelector.css('display', 'flex');
                $('.title .btn-back').css('display', 'none');
            }
        })
    }

    function handleEvent() {
        setBackBtnFunc();
    }

    function initialize() {
        setYearOptions(60);

        handleEvent();
    }

    initialize();
})()

