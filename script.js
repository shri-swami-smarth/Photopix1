$(document).ready(function() {
    // Initialize Isotope
    $('.box1').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    // Filter items on click
    $('.box ul li').click(function() {
        $('.box ul li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.box1').isotope({
            filter: selector
        });
        return false;
    });
});