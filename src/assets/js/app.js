$(function () {
  $('.menu-dropdown').each(function (i, v) {
    if ($(v).hasClass('open')) {
      $(v).css('max-height', $(v).find('.menu-item').length * 40);
    }
  });
});

$('.menu-header').click(function () {
  var $this = $(this),
    $dropdown = $this.find('.menu-dropdown');
  if ($dropdown.hasClass('open')) {
    $dropdown.css('max-height', 0);
  } else {
    $dropdown.css('max-height', $dropdown.find('.menu-item').length * 40);
    $('.menu-dropdown').not($dropdown).removeClass('open').css('max-height', 0);
  }
  $dropdown.toggleClass('open');
});

$('.black-overlay').on('click', function () {
    $('.main-nav').removeClass('open');
    $('.black-overlay').addClass('hidden');
});

$('.menu-toggle-button').click(function () {
    $('.main-nav').addClass('open');
    $('.black-overlay').removeClass('hidden');
});

$('.menu-item').click(function() {
    $('.main-nav').removeClass('open');
    $('.black-overlay').addClass('hidden');
});
