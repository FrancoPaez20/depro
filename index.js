&(function(){

	var	ancho = $(window).width();
	var toggle = $('#toggle');
	var	botonesMenu = $('#botonesMenu');

		if (ancho < 700){

			botonesMenu.hide();		
		}

		toggle.on('click', function(e){

			botonesMenu.slideToggle();

		});

});