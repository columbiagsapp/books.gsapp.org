$(document).ready(function () {




	var path = window.location.pathname;

	var liDate = '<li><a href="/index/date" target="_self">Date</a></li>';
	var liTitle = '<li><a href="/index/title" target="_self">Title</a></li>';
	var liAuthor = '<li><a href="/index/author" target="_self">Author</a></li>';
	var liAllJournals = '<li><a href="/journals" target="_self">All</a></li>';
	var liFutureAnterior = '<li><a href="/journals/future-anterior" target="_self">Future Anterior</a></li>';
	var liPotlatch = '<li><a href="/journals/potlatch" target="_self">Potlatch</a></li>';
	var liUrbanMagazine = '<li><a href="/journals/urban-magazine" target="_self">Urban Magazine</a></li>';
	var liVolume = '<li><a href="/journals/volume" target="_self">Volume</a></li>';
	var liAllSeries = '<li><a href="/series" target="_self">All</a></li>';
	var liAbstract = '<li><a href="/series/abstract" target="_self">Abstract</a></li>';
	var liLivingArchive = '<li><a href="/series/living-archive" target="_self">Living Archive</a></li>';
	var liCBAME = '<li><a href="/series/cba-me" target="_self">Materials Conference</a></li>';
	var liSourceBooks = '<li><a href="/series/source-books" target="_self">Source Books</a></li>';




	switch(path){
		case '/':
			$('#highlight').html(liDate);
			$('#dropdown').html(liTitle+liAuthor);
			break;
		case '/index/date':
			$('#highlight').html(liDate);
			$('#dropdown').html(liTitle+liAuthor);
			break;
		case '/index/title':
			$('#highlight').html(liTitle);
			$('#dropdown').html(liDate+liAuthor);
			break;
		case '/index/author':
			$('#highlight').html(liAuthor);
			$('#dropdown').html(liDate+liTitle);
			break;
		case '/journals':
			$('#highlight').html(liAllJournals);
			$('#dropdown').html(liFutureAnterior+liPotlatch+liUrbanMagazine+liVolume);
			break;
		case '/journals/future-anterior':
			$('#highlight').html(liFutureAnterior);
			$('#dropdown').html(liAllJournals+liPotlatch+liUrbanMagazine+liVolume);
			break;
		case '/journals/potlatch':
			$('#highlight').html(liPotlatch);
			$('#dropdown').html(liAllJournals+liFutureAnterior+liUrbanMagazine+liVolume);
			break;
		case '/journals/urban-magazine':
			$('#highlight').html(liUrbanMagazine);
			$('#dropdown').html(liAllJournals+liFutureAnterior+liPotlatch+liVolume);
			break;
		case '/journals/volume':
			$('#highlight').html(liVolume);
			$('#dropdown').html(liAllJournals+liFutureAnterior+liPotlatch+liUrbanMagazine);
			break;
		case '/series':
			$('#highlight').html(liAllSeries);
			$('#dropdown').html(liAbstract+liLivingArchive+liCBAME+liSourceBooks);
			break;
		case '/series/abstract':
			$('#highlight').html(liAbstract);
			$('#dropdown').html(liAllSeries+liLivingArchive+liCBAME+liSourceBooks);
			break;
		case '/series/living-archive':
			$('#highlight').html(liLivingArchive);
			$('#dropdown').html(liAllSeries+liAbstract+liCBAME+liSourceBooks);
			break;
		case '/series/cba-me':
			$('#highlight').html(liCBAME);
			$('#dropdown').html(liAllSeries+liAbstract+liLivingArchive+liSourceBooks);
			break;
		case '/series/source-books':
			$('#highlight').html(liSourceBooks);
			$('#dropdown').html(liAllSeries+liAbstract+liLivingArchive+liCBAME);
			break;


		default:
			break;
	}


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