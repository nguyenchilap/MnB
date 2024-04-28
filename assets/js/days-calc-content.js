(function() {

    function setNumOfDays() {
        const currDate = new Date().setHours(0, 0, 0, 0);
        const startedDate = new Date('2024/02/10').setHours(0, 0, 0, 0);

        const numOfDays = (currDate - startedDate + 3600 * 24 * 1000) / (3600 * 24 * 1000);
        $('#numberOfDays').html(numOfDays)
    }

    function handleEvent() {

    }

    function initialize() {
        setNumOfDays();
    }

    initialize();
})()

