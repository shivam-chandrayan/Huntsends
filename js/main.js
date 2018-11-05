$(document).ready(function () {

    let $sidebar = $('#sidebar'),
		  $menuBtn = $('.menu-btn'),
		  $shrink = $('.shrink'),
		  $expand = $('.expand');

	$menuBtn.on('click', function () {
		if ($sidebar.hasClass('hidden')) {
			$sidebar.removeClass('hidden');
			$shrink.removeClass('hidden');
			$expand.addClass('hidden');
		}
		else {
			$sidebar.addClass('hidden');
			$shrink.addClass('hidden');
			$expand.removeClass('hidden');
		}
	});
});

var numberOfDivs = $(".container>div").length;
var index = 0;

$('.scrollright').click(function() {
  event.preventDefault();
  if (index <= 0)
    return;
  index += 1;

  $('.scrollbar').animate({
    marginLeft: "-=200px"
  }, "fast");
 });

$('.scrollleft').click(function() {
  event.preventDefault();
  if (index >= numberOfDivs)
    return;
  index -= 1;

  $('.scrollbar').animate({
    marginLeft: "+=200px"
  }, "fast");
 });