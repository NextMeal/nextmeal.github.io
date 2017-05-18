$(document).ready(function () {
	$("#jsError").css('display', 'none');
	//$("#forkBanner").fadeOut(5000);
	
    $('#roundedBox').fadeIn(500);
	
	// gray, red, blue, gold, green, purple, orange
    var colorArray = ['#1C1C1C', '#8E0000', '#000039', '#8F6B00', '#004700', '#470047', '#B84A00', ''];

    $('body').css('background-color', colorArray[Math.floor(Math.random() * (colorArray.length - 0 + 1) + 0)]);
});