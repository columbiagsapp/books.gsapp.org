$(document).ready(function () {

	if(!$('body').hasClass('permalink-page')){
		var $container = $('#main .brickwall');

		var buildWall = function(){
			console.log('buildwall(2)');

			$container.imagesLoaded( function(){
				$container.masonry({
					itemSelector: '.post:visible',
					columnWidth: 400,
					gutterWidth: 120,
					isAnimated: false,
					isFitWidth: true
				});
			});
		}

		var initInfiniteScroll = function(){
			$container.infinitescroll({
				navSelector  : '#page-nav',    // selector for the paged navigation 
				nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
				itemSelector : '.postwrapper',     // selector for all items you'll retrieve
				loading: {
					finishedMsg: 'No more pages to load.',
					img: 'http://i.imgur.com/6RMhx.gif'
					}
				},
				// trigger Masonry as a callback
				function( newElements ) {
				// hide new items while they are loading
					var $newElems = $( newElements ).css({ opacity: 0 });

					$newElems.find('.caption').truncate({max_length: MAX_CAPTION_LENGTH});
					$newElems.find('.text-body').truncate({max_length: MAX_TEXTPOST_LENGTH});
		  			$newElems.find('.post.quote .realpost').truncate({max_length: MAX_QUOTEPOST_LENGTH});

					//$newElems.truncation();
					// ensure that images load before adding to masonry layout
					$newElems.imagesLoaded(function(){
					// show elems now they're ready
						$newElems.animate({ opacity: 1 });
						$container.masonry( 'appended', $newElems, true ); 
					});

				}
			);
		}

		var MAX_CAPTION_LENGTH = 400;
		var MAX_TEXTPOST_LENGTH = 500;
		var MAX_QUOTEPOST_LENGTH = 200;
		
		var POSTS = 10;
		
		var truncate = function(){
	      $('body:not(.permalink-page) .caption').truncate({max_length: MAX_CAPTION_LENGTH});
	      $('body:not(.permalink-page) .text-body').truncate({max_length: MAX_TEXTPOST_LENGTH});
	      $('body:not(.permalink-page) .post.quote').truncate({max_length: MAX_QUOTEPOST_LENGTH});
	    }

	    truncate();

		buildWall();
		initInfiniteScroll();
	}

	

	$('#misreading-filter').bind('click', function(){
		$('.misreading').toggle();
		$container.masonry( 'reload' );
		if($('.misreading').is(':visible')){
			$('body').addClass('misreading-visible').removeClass('misreading-hidden');
		}else{
			$('body').addClass('misreading-hidden').removeClass('misreading-visible');
		}
		return false;
	});

	$('#reading-filter').bind('click', function(){
		$('.reading').toggle();
		$container.masonry( 'reload' );
		if($('.reading').is(':visible')){
			$('body').addClass('reading-visible').removeClass('reading-hidden');
		}else{
			$('body').addClass('reading-hidden').removeClass('reading-visible');
		}
		return false;
	});
	
	
    
    

    //add reading or misreading class to each post
    $('.post').each(function(){
    	var readingClass = '';
    	$('.tags li a.tag', this).each(function(){
    		if($(this).text() == 'reading'){
    			readingClass = 'reading';
    		}else if($(this).text() == 'misreading'){
    			readingClass = 'misreading';
    		}
    	});
    	if(readingClass.length > 0){
	    	$(this).addClass(readingClass);
    	}
    });
    
	

});