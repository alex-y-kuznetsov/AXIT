'use strict';

$('.tab-button').click(function() {
  $('.tab').addClass('tab-invisible');
  $('.tab[data-tab-index=' + $(this).attr('data-tab-index') + ']').removeClass('tab-invisible');
  $('.tab-button').removeClass('tab-button-active');
  $(this).addClass('tab-button-active');
});
