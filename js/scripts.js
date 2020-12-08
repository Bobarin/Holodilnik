$(document).ready(function(){
	
	var s1pos = 0;
	var s1col = $('#slider ul li').length;
	$('#slider ul').css('width', s1col*605);
	
	$('#slider a[href="#next"]').click(function(){
		s1pos++;
		if(s1pos>s1col-1) s1pos=0;
		$('#slider ul').animate({'left':-(s1pos*605)}, 600);
		return false;
	});
	
	$('#slider a[href="#prev"]').click(function(){
		s1pos--;
		if(s1pos<0) s1pos=s1col-1;
		$('#slider ul').animate({'left':-(s1pos*605)}, 600);
		return false;
	});
	
	$('a[href="#popup"]').click(function () {
		var popup = $('div.'+$(this).attr("rel")),
			ptop = 50;
		popup.css({'margin-left': -popup.outerWidth()/2, 'top': ptop}).fadeIn(600);
		$('#overlay').fadeIn(500);
		return false;				
	});
	
	$('a[href="#close"], #overlay').click(function () {
		$('.popup').fadeOut(100);
		$('#overlay').fadeOut(150);
		return false;
	});


});

$(function(){
	$('input[placeholder], textarea[placeholder]').placeholder();
});