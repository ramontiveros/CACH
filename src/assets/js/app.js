$(function () {
  $('.menu-item').each(function (i, v) {
    if ($(v).hasClass('active')) {
      $(v).parent().addClass('open').css('max-height', $(v).parent().find('.menu-item').length * 40);
    }
  });
});

$(document).on('click', '.menu-header > p', function () {
  var $this = $(this),
    $dropdown = $this.parent().find('.menu-dropdown');
  if ($dropdown.hasClass('open')) {
    $dropdown.css('max-height', 0);
  } else {
    $dropdown.css('max-height', $dropdown.find('.menu-item').length * 40);
    $('.menu-dropdown').not($dropdown).removeClass('open').css('max-height', 0);
  }
  $dropdown.toggleClass('open');
});

$(document).on('click', '.black-overlay', function () {
    $('.main-nav').removeClass('open');
    $('.black-overlay').addClass('hidden');
});

$(document).on('click', '.menu-toggle-button', function () {
    $('.main-nav').addClass('open');
    $('.black-overlay').removeClass('hidden');
});

$(document).on('click', '.menu-item', function() {
    $('.main-nav').removeClass('open');
    $('.black-overlay').addClass('hidden');
});
