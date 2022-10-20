import $ from './library/library';

$('#first').onEventListener('click', () => {
  $('div').eq(1).fadeOut(800);
});

$('[data-count="second"]').onEventListener('click', () => {
  $('div').eq(2).fadeOut(800);
});

$('button').eq(2).onEventListener('click', () => {
  $('.w-500').fadeOut(800);
});
