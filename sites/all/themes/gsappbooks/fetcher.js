/* 6/13/2012
 *
 * Author: Jochen Hartmann
 */

/**
 * Namespacing
 */
var gsappFetcher = {};

/**
 * @fileoverview Frontend app to to handle events and DOM manipulation for
 * revised GSAPP dashboard.
 */


/**
 * Whether to log to firebug console (wraps console.log)
 * @type Boolean
 */
gsappFetcher.enableLogging = true;

/**
 * Storing proper stings for month names since the native JS Date object
 * only contains abbreviations
 * @type Array
 */
gsappFetcher.month_names = new Array ( );
gsappFetcher.month_names[gsappFetcher.month_names.length] = "January";
gsappFetcher.month_names[gsappFetcher.month_names.length] = "February";
gsappFetcher.month_names[gsappFetcher.month_names.length] = "March";
gsappFetcher.month_names[gsappFetcher.month_names.length] = "April";
gsappFetcher.month_names[gsappFetcher.month_names.length] = "May";
gsappFetcher.month_names[gsappFetcher.month_names.length] = "June";
gsappFetcher.month_names[gsappFetcher.month_names.length] = "July";
gsappFetcher.month_names[gsappFetcher.month_names.length] = "August";
gsappFetcher.month_names[gsappFetcher.month_names.length] = "September";
gsappFetcher.month_names[gsappFetcher.month_names.length] = "October";
gsappFetcher.month_names[gsappFetcher.month_names.length] = "November";
gsappFetcher.month_names[gsappFetcher.month_names.length] = "December";

/**
 * Storing proper stings for day names since the native JS Date object
 * only contains abbreviations
 * @type Array
 */
gsappFetcher.day_names = new Array ( );
gsappFetcher.day_names[gsappFetcher.day_names.length] = "Sunday";
gsappFetcher.day_names[gsappFetcher.day_names.length] = "Monday";
gsappFetcher.day_names[gsappFetcher.day_names.length] = "Tuesday";
gsappFetcher.day_names[gsappFetcher.day_names.length] = "Wednesday";
gsappFetcher.day_names[gsappFetcher.day_names.length] = "Thursday";
gsappFetcher.day_names[gsappFetcher.day_names.length] = "Friday";
gsappFetcher.day_names[gsappFetcher.day_names.length] = "Saturday";

/**
 * How many posts to get from a tumblr feed. Default is 10
 * @type Number
 */
gsappFetcher.tumblr_posts = 10;

// HTML Truncator for jQuery
// by Henrik Nyh <http://henrik.nyh.se> 2008-02-28.
// Free to modify and redistribute with credit.

(function($) {

  var trailing_whitespace = true;

  $.fn.truncate = function(options) {
    var opts = $.extend({}, $.fn.truncate.defaults, options);
    $(this).each(function() {
      var content_length = $.trim(squeeze($(this).text())).length;
      if (content_length <= opts.max_length)
        return;  // bail early if not overlong

      var actual_max_length = opts.max_length - opts.more.length - 3;  // 3 for " ()"
      var truncated_node = recursivelyTruncate(this, actual_max_length);
      var full_node = $(this).hide();

      truncated_node.insertAfter(full_node);
      findNodeForMore(truncated_node).append('...');
    });
  }

  // Note that the " (â€¦more)" bit counts towards the max length â€“ so a max
  // length of 10 would truncate "1234567890" to "12 (â€¦more)".
  $.fn.truncate.defaults = {
    max_length: 100,
    more: 'â€¦more',
    less: 'less'
  };

  function recursivelyTruncate(node, max_length) {
    return (node.nodeType == 3) ? truncateText(node, max_length) : truncateNode(node, max_length);
  }

  function truncateNode(node, max_length) {
    var node = $(node);
    var new_node = node.clone().empty();
    var truncatedChild;
    node.contents().each(function() {
      var remaining_length = max_length - new_node.text().length;
      if (remaining_length == 0) return;  // breaks the loop
      truncatedChild = recursivelyTruncate(this, remaining_length);
      if (truncatedChild) new_node.append(truncatedChild);
    });
    return new_node;
  }

  function truncateText(node, max_length) {
    var text = squeeze(node.data);
    if (trailing_whitespace)  // remove initial whitespace if last text
      text = text.replace(/^ /, '');  // node had trailing whitespace.
    trailing_whitespace = !!text.match(/ $/);
    var text = text.slice(0, max_length);
    // Ensure HTML entities are encoded
    // http://debuggable.com/posts/encode-html-entities-with-jquery:480f4dd6-13cc-4ce9-8071-4710cbdd56cb
    text = $('<div/>').text(text).html();
    return text;
  }

  // Collapses a sequence of whitespace into a single space.
  function squeeze(string) {
    return string.replace(/\s+/g, ' ');
  }
  
  // Finds the last, innermost block-level element
  function findNodeForMore(node) {
    var $node = $(node);
    var last_child = $node.children(":last");
    if (!last_child) return node;
    var display = last_child.css('display');
    if (!display || display=='inline') return $node;
    return findNodeForMore(last_child);
  };

  // Finds the last child if it's a p; otherwise the parent
  function findNodeForLess(node) {
    var $node = $(node);
    var last_child = $node.children(":last");
    if (last_child && last_child.is('p')) return last_child;
    return node;
  };

})(jQuery);


/**
 * Write to firebug console if logging enabled
 * @param {String,Object} data The item to log
 */
gsappFetcher.log = function(data) {
  if (gsappFetcher.enableLogging == true) {
    console.log(data);
  }
}

/**
 * Find CSS color class based off location
 * @param {String} The location string, i.e. New York
 * @return {String, Boolean} The css class, i.e. 'north-america' if found,
 * false otherwise
 */
gsappFetcher.findLocationClass = function(location_string) {
	// basic array that we can use to store future location code mappings
	locations = new Array();
	locations['Amman'] = 'middle-east';
	locations['Barcelona'] = 'europe';
	locations['Beijing'] = 'asia';
	locations['Istanbul'] = 'middle-east';
	locations['Johannesburg'] = 'africa';
	locations['Moscow'] = 'europe';
	locations['Mumbai'] = 'south-asia';
	locations['New York'] = 'north-america';
	locations['Paris'] = 'europe';
	locations['Rio De Janeiro'] = 'latin-america';
	locations['Sao Paulo'] = 'latin-america';
	locations['Toronto'] = 'north-america';
	locations['Tokyo'] = 'asia';

	locations['Other Africa'] = 'africa';
	locations['Other East Asia'] = 'asia';
	locations['Other Europe'] = 'europe';
	locations['Other Latin America'] = 'latin-america';
	locations['Other North America'] = 'north-america';
	locations['Other Middle East'] = 'middle-east';
	locations['Other South Asia'] = 'south-asia';

	test_location = locations[location_string];
	if ((test_location != null) && (test_location != undefined)) {
		return test_location;
	} else {
		return false;
	}
}

/**
 * Convert location array to CSS color array
 * @param {Array} An array of locations
 * @return {String} The CSS class found for the location
 */
gsappFetcher.getCSSColorClassForLocations = function(locations_array) {
	var color_location = '';
	for (var j=0;j<locations_array.length;j++) {
		var color_class = gsappFetcher.findLocationClass(locations_array[j]);
		if (color_class != false) {
			return color_class;
		}
	}
	return color_location;
}


/**
 * Parse location names from Drupal location HTML output
 * @param {String} The location string from Drupal view output
 * @return {Array} An arry of location strings
 */
gsappFetcher.getLocationsFromHTML = function(location_string) {
	var location_element = $(location_string);
	var locations = $("span.lineage-item", location_element);
	var locations_array = [];
	for (var i=0;i<locations.length;i++){
		locations_array.push($(locations[i]).text());
	}
	return locations_array;
}

/**
 * Get event types from Drupal HTML string
 * @param {String} The location string from Drupal view output
 * @return {Array} An arry of type strings
 */
gsappFetcher.getEventTypesFromHTML = function(types_string) {
	// TODO maybe abstract this more later
	return gsappFetcher.getLocationsFromHTML(types_string);
}			

/**
 * Convert a date from drupal output to a proper JS Date object
 * @param {String} The date string from Drupal
 * @return {Date} JS Date object
 */
gsappFetcher.createDateObject = function(date_string) {
	var year = date_string.substr(0,4);
	var month = date_string.substr(5,2) - 1;
	var day = date_string.substr(8,2);
	var hour = date_string.substr(11,2);	
	var min = date_string.substr(14,2);
	var sec = date_string.substr(17,2);
	return new Date(year,month,day,hour,min,sec);
}


/**
 * Formate a Date object into a custom date string
 * @param {Date} JS Date object
 * @return {String} String in the format:
 * Tuesday, May 8, 2012 7:00pm
 */
gsappFetcher.formatDate = function(date) {

	// append 0 to minutes if < 10
	var minutes = date.getMinutes();
	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	var end_string = 'am';
	var hours = date.getHours();
	if (hours > 12) {
		hours = hours - 12;
		end_string = 'pm';
	}
	
	date_string_a = [
		gsappFetcher.day_names[date.getDay()], ', ',
		gsappFetcher.month_names[date.getMonth()], ' ',
		date.getDate(), ', ', date.getFullYear(), ' ',
		hours, ':', minutes, end_string];
	
	return date_string_a.join('');
}

/**
 * Formate a Date object into a custom date string
 * @param {Date} JS Date object
 * @return {String} String in the format:
 * Friday, August 31, 2012 11:00am
 */
gsappFetcher.formatTimeForWidget = function(date) {

	// append 0 to minutes if < 10
	var minutes = date.getMinutes();
	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	var end_string = 'am';
	var hours = date.getHours();
	hours = hours - 4;
	if (hours > 12) {
		hours = hours - 12;
		end_string = 'pm';
	}
	
	date_string_a = [
		hours, ':', minutes, end_string];
	
	return date_string_a.join('');
}

/**
 * Formate a Date object into a custom date string for the date box
 * @param {Date} JS Date object
 * @return {String} HTML string in the format:
 * May<br/>8
 */

gsappFetcher.formatDateForBox = function(date) {
	var month_name = gsappFetcher.month_names[date.getMonth()];
	return [month_name.substr(0,3), '<br/>',
		date.getDate()].join('');
}


/**
 * Function to return event data from JSON formatted views
 * coming from the GSAPP events site
 *
 * @param {String} url The URL for the JSON feed
 * @param {String} elementName The name of the DOM container to write into
 * @return void
 */
gsappFetcher.getEventData = function(url, elementName) {
	gsappFetcher.log("getting data from " + url + " into " + elementName);
	$.getJSON(url, function(data) {
		var nodes = data.nodes;
		var event_div = '<div class="event-output-tmpltzr">';
		for (var i=0; i<nodes.length;i++) {
			var event = nodes[i].node;
			// convert date and offset it
			var date = gsappFetcher.createDateObject(event.field_event_date_value);

			// each date has different offsets			
			var date_offset = 60000 * date.getTimezoneOffset();
			new_date = new Date(date - date_offset);
			var date_string = gsappFetcher.formatDate(new_date);

			var date_string_for_box = gsappFetcher.formatDateForBox(date);

			// parse locations and assign css classes for color
			var locations_array = gsappFetcher.getLocationsFromHTML(
				event.field_event_location_value);

			var css_class_for_location = 
				gsappFetcher.getCSSColorClassForLocations(
					locations_array);
			
			// parse event types
			var types_array = gsappFetcher.getEventTypesFromHTML(event.field_event_taxonomy_type_value);
			
			// get the path to the node
			// TODO UPDATE path to prod
			var path = ['http://events.gsapp.org/node/', event.nid].join('');
			
			// build the div
			event_div = [event_div, '<div class="embedded-event">',
				'<a target="_blank" class="region" href="', path, '">', 
				'<div class="embedded-event-top-area">',
				'<div class="embedded-event-date-box ',
				css_class_for_location, '"><div>',
				date_string_for_box, '</div></div>',
				'<div class="embedded-event-title">', event.title, '</div>',
				'</div></a>', // end top area
				'<div class="embedded-event-body-area">',
				'<div class="embedded-event-type">', types_array[0], '</div>',
				'<div class="embedded-event-date">', date_string, '</div>',
				'<div class="embedded-event-location ',
				css_class_for_location, '">',
				locations_array[1], '</div>',
				'<div class="embedded-event-description">', event.body,
				'</div>',
				'<div class="embedded-event-description-more"><a href="', path, 
				'" target="_blank" alt="More information">Continue Reading</a></div>',
				'<div class="embedded-event-image">', event.field_event_poster_fid,
				'</div>',
				'</div>', '</div>'].join('');

			if(i == nodes.length-1){
				event_div = [event_div, '</div>'].join('');
			}
			
		}
		$(elementName).append(event_div);
		
		$("#main .content #event-output .embedded-event a .embedded-event-top-area").hover(function() {
			gsappFetcher.log('hovering');
			
			$(this).children(".embedded-event-date-box").addClass('filled');
		}, 
		function() {
			$(this).children(".embedded-event-date-box").removeClass('filled');
		});
	})
	.error(function() { gsappFetcher.log('error loading event data'); $('body').removeClass('loading');})
	.complete(function() {
		safelog('events calling back');
		$('.embedded-event-description').truncate({max_length: 450});
	}); // end getJSON
	
}
