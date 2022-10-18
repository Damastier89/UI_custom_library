import $ from './library/library';

// $('div').addClass('hello', 'hi');
// $('.active').onEventListener('click', sayHi);
// $('.active').offEventListener('click', sayHi);
// $('button').click(sayHi);

// $('button').onEventListener('click', toggleClass);
// function toggleClass() {
//   $(this).toggleClass('active');
// }

// $('button').onEventListener('click', removeClass);
// function removeClass() {
//   $('.active').removeClass('active');
// }

// console.log($('button').html('click'));

// $('button').onEventListener('click', function() {
//   $('div').eq(2).toggleClass('active');
// });

// $('div').click(function() {
//   console.log($(this).findIndexElement());
// });

// console.log($('div').eq(2).findElementBySelector('.some'));
// console.log($('.some').closest('.find').addClass('type'));

console.log($('.more').eq(0).findSiblings());
console.log($('.find').findSiblings());