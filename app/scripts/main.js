;(function () {

    function showEl(el) {
        $(el).removeClass('hidden').addClass('fadeInRight');
    }

    function hideEl() {
        $('*[class^="js-content-"]').addClass('hidden').removeClass('fadeInRight');
    }

    $('.js-link-basic').on('click', function() {
        hideEl();
        showEl('.js-content-basic');
    });

    $('.js-link-premium').on('click', function() {
        hideEl();
        showEl('.js-content-premium');
    });

    $('.js-link-college').on('click', function() {
        hideEl();
        showEl('.js-content-college');
    });

    $('.js-link-teacher').on('click', function() {
        hideEl();
        showEl('.js-content-teacher');
    });

} ());
