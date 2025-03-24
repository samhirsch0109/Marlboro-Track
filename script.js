$('.logo-image').on('mouseenter', function (event) {
    $(event.currentTarget).next('.card-description').fadeIn(800);
});

$('.logo-image').on('mouseleave', function (event) {
    $(event.currentTarget).next('.card-description').fadeOut(500);
});