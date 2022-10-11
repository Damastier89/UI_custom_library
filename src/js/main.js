import $ from './library/library';

// $('div').addClass('hello', 'hi');
// $('.active').onEventListener('click', sayHi);
// $('.active').offEventListener('click', sayHi);
// $('button').click(sayHi);
$('button').onEventListener('click', toggleClass);

function toggleClass() {
  $(this).toggleClass('active');
}

$('.active').onEventListener('click', function() {
  $(this).removeClass('active')
  console.log(`hello`)
});