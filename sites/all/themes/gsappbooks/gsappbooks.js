$(document).ready(function () {




	var path = window.location.pathname;

	var liYear = '<li><a href="/index/year" target="_self">Year</a></li>';
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
	var liCBAEM = '<li><a href="/series/cba-em" target="_self">Materials Conference</a></li>';
	var liSourceBooks = '<li><a href="/series/source-books" target="_self">Source Books</a></li>';
	var liNewUrbanisms = '<li><a href="/series/new-urbanisms" target="_self">New Urbanisms</a></li>';

	var indexYearResize = function(){
		console.log('resize()');
		if( (window.innerWidth*0.8) <= 924){
			$('#main').width('924px').css('margin','0 auto');
		}else{
			$('#main').width('80%').css('margin','');
		}
	}

	$('body').removeClass('index-page');//reset on each page load

	switch(path){
		case '/':
			$('body').addClass('index-year-page');
			$(window).resize(indexYearResize);
			$('.sortbox-title').text('Sort index by');
			$('#highlight').html(liYear);
			$('#dropdown').html(liTitle+liAuthor).show();
			$('.view-index h3:contains("Forthcoming")').html('Forth-<br>coming');

			break;
		case '/index/year':
			$('body').addClass('index-year-page');
			$(window).resize(indexYearResize);
			$('.sortbox-title').text('Sort index by');
			$('#highlight').html(liYear);
			$('#dropdown').html(liTitle+liAuthor).show();
			$('.view-index h3:contains("Forthcoming")').html('Forth-<br>coming');
			break;
		case '/index/title':
			$('body').addClass('index-title-page');
			$('#logo-nav #navigation .menu li a[href="/index/year"]').addClass('active');
			$('.sortbox-title').text('Sort index by');
			$('#highlight').html(liTitle);
			$('#dropdown').html(liYear+liAuthor).show();
			break;
		case '/index/author':
			$('body').addClass('index-author-page');
			$('#logo-nav #navigation .menu li a[href="/index/year"]').addClass('active');
			$('.sortbox-title').text('Sort index by');
			$('#highlight').html(liAuthor);
			$('#dropdown').html(liYear+liTitle).show();
			break;
		case '/journals':
			$('.sortbox-title').text('View journals by');
			$('#highlight').html(liAllJournals);
			$('#dropdown').html(liFutureAnterior+liPotlatch+liUrbanMagazine+liVolume).show();
			break;
		case '/journals/future-anterior':
			$('.sortbox-title').text('View journals by');
			$('#highlight').html(liFutureAnterior);
			$('#dropdown').html(liAllJournals+liPotlatch+liUrbanMagazine+liVolume).show();
			break;
		case '/journals/potlatch':
			$('.sortbox-title').text('View journals by');
			$('#highlight').html(liPotlatch);
			$('#dropdown').html(liAllJournals+liFutureAnterior+liUrbanMagazine+liVolume).show();
			break;
		case '/journals/urban-magazine':
			$('.sortbox-title').text('View journals by');
			$('#highlight').html(liUrbanMagazine);
			$('#dropdown').html(liAllJournals+liFutureAnterior+liPotlatch+liVolume).show();
			break;
		case '/journals/volume':
			$('.sortbox-title').text('View journals by');
			$('#highlight').html(liVolume);
			$('#dropdown').html(liAllJournals+liFutureAnterior+liPotlatch+liUrbanMagazine).show();
			break;
		case '/series':
			$('.sortbox-title').text('View series by');
			$('#highlight').html(liAllSeries);
			$('#dropdown').html(liAbstract+liLivingArchive+liCBAEM+liSourceBooks+liNewUrbanisms).show();
			break;
		case '/series/abstract':
			$('.sortbox-title').text('View series by');
			$('#highlight').html(liAbstract);
			$('#dropdown').html(liAllSeries+liLivingArchive+liCBAEM+liSourceBooks+liNewUrbanisms).show();
			break;
		case '/series/living-archive':
			$('.sortbox-title').text('View series by');
			$('#highlight').html(liLivingArchive);
			$('#dropdown').html(liAllSeries+liAbstract+liCBAEM+liSourceBooks+liNewUrbanisms).show();
			break;
		case '/series/cba-em':
			$('.sortbox-title').text('View series by');
			$('#highlight').html(liCBAEM);
			$('#dropdown').html(liAllSeries+liAbstract+liLivingArchive+liSourceBooks+liNewUrbanisms).show();
			break;
		case '/series/source-books':
			$('.sortbox-title').text('View series by');
			$('#highlight').html(liSourceBooks);
			$('#dropdown').html(liAllSeries+liAbstract+liLivingArchive+liCBAEM+liNewUrbanisms).show();
			break;
		case '/series/new-urbanisms':
			$('.sortbox-title').text('View series by');
			$('#highlight').html(liNewUrbanisms);
			$('#dropdown').html(liAllSeries+liAbstract+liLivingArchive+liCBAEM+liSourceBooks).show();
			break;

		default:
			$('.sortbox-title').text('Sort index by');
			$('#sortbox-drops').hover(function(){ $('#dropdown').show(); }, function(){ $('#dropdown').hide(); });
			$('#dropdown').html(liYear+liTitle+liAuthor).hide();
			break;
	}



	/* JCarousel lite setup
	*/

	$(function() {
	    $(".carousel").jCarouselLite({
	    	visible: 1,
	        btnNext: ".carousel-next",
	        btnPrev: ".carousel-prev"
	    });
	});

	//used to create the animated GIF effect on the /info page
	//control the speed with the auto param, speed must be 0 or a sliding effect is used
	$(function() {
	    $(".gif-carousel").jCarouselLite({
	    	visible: 1,
	    	auto: 200,
	    	speed: 0,
	        btnNext: ".hidden-next",
	        btnPrev: ".hidden-prev"
	    });
	});


	var hoverOnMisreading = function(){
		$(this).text('reading');
	}
	var hoverOffMisreading = function(){
		$(this).text('Misreading');
	}

	$('#navigation .menu li a').each(function(){
		if($(this).text() == "Misreading"){
			$(this).html('<span class="mis">Mis</span>reading');
			$(this).hover(function(){ $('.mis').css('opacity','0'); }, function(){$('.mis').css('opacity','1');});
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

		/*
			Initialize the index to append the hidden title+subtitle with the right dimensions
		*/
		var initIndexByDate = function(){
			var width, height;
			$('.view-display-id-page_1 .views-row .index-item').each(function(){
				var $thisA = $(this).find('a');	
				$('.title-hover', this).appendTo($thisA);
				width = $('a img', this).width();
				height = $('a img', this).height();
				$(this).width(width).height(height);//give the containing div the img dims
				//give the hidden title+subtitle smaller dims for margins
				width = width - 12;//margin-left + margin-right of 5px
				height = height - 20;//margin-top
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


	if($('.view-journals, .view-series').length > 0){
		$('.view-content').each(function(){
			var num = $('.views-row', this).length;
			switch(num){
				case 1:
					$('.views-row:nth-child(1)', this).css('marginRight', 0);
					$(this).width('265px');
					break;
				case 2:
					$('.views-row:nth-child(2)', this).css('marginRight', 0);
					$(this).width('550px');
					break;
				default:
					$('.views-row:nth-child(3n)', this).css('marginRight', 0);
					break;
			}
		});
	}

	if($('.view-book-by-author').length > 0){
		var num = $('.view-book-by-author .view-content .views-row', this).length;
		console.log('num: '+num);

		$('.view-book-by-author .view-content .views-row').each(function(i){
			console.log('i: '+i);
			switch(num){
				case 1:
					if(i == 0){
						$(this).css('marginRight', 0);
					}
					$('#person-books').width('265px');
					break;
				case 2:
					if(i == 1){
						$(this).css('marginRight', 0);
					}
					$('#person-books').width('550px');
					break;
				default:
					if((i+1)%3 == 0){
						$(this).css('marginRight', 0);
					}
					break;
			}
		});
	}

	if($('#person-books').length > 0){
			var num = $('.views-row').length;
			switch(num){
				case 1:
					$('.views-row:nth-child(1)', this).css('marginRight', 0);
					$('#person-books').width('265px');
					break;
				case 2:
					$('.views-row:nth-child(2)', this).css('marginRight', 0);
					$('#person-books').width('550px');
					break;
				default:
					$('.views-row:nth-child(3n)', this).css('marginRight', 0);
					break;
			}
	}

	var headerBackgrounds = new Array("bomb-header", "circles-header", "diamond-header", "heart-header", "lemon-header", "rhino-header");

	
	/* Randomizer for Header background image */
	var randomizeHeaderBG = function(){
		var bg = 'url(/sites/default/files/header-images/'+headerBackgrounds[ Math.floor(Math.random()*headerBackgrounds.length) ]+'.png)';
		$('#header-inside').css('background-image',bg);
	}

	randomizeHeaderBG();

});