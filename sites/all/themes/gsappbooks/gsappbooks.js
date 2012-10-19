$(document).ready(function () {

	var hoverOnMisreading = function(){
		$(this).text('reading');
	}
	var hoverOffMisreading = function(){
		$(this).text('Misreading');
	}

	$('#navigation .menu li a').each(function(){
		if($(this).text() == "Misreading"){
			$(this).html('<span class="mis">Mis</span>reading');
			$(this).hover(function(){ $('.mis').css('color','white'); }, function(){$('.mis').css('color','black');});
		}
	});

	var hoverOnImage = function(){
		$(this).css('opacity',0.5);
	}

	var hoverOffImage = function(){
		$(this).css('opacity',1);
	}

	$('#main a img').hover(hoverOnImage, hoverOffImage);

	//check if Index by Date is the current page, then init if so
	if($('.view-display-id-page_1').length > 0){

		var initIndexByDate = function(){
			var width, height;
			$('.view-display-id-page_1 .views-row .index-item').each(function(){
				var $thisA = $(this).find('a');	
				$('.title-hover', this).appendTo($thisA);
				width = $('a img', this).width();
				height = $('a img', this).height();
				$(this).width(width).height(height);
				$('.title-hover', this).width(width).height(height);
			});
		}

		var indexByDateHover = function(){
			console.log('hovering');
			$(this).find('.title-hover').toggle();
			$(this).find('img').toggle();
		}

		initIndexByDate();
		$('.view-display-id-page_1 .index-item').bind('mouseenter', indexByDateHover).bind('mouseleave', indexByDateHover);
	}

	

});