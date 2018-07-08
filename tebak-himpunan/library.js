// the script is taken from http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
// with some modification

var viewportheight;

// function to get browser screen width:
function getScreenWidth() {
	// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth
	if (typeof window.innerWidth != 'undefined') {
		return window.innerWidth;
	} 
	
	// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
	else if (typeof document.documentElement != 'undefined' && 
			 typeof document.documentElement.clientWidth !='undefined' && 
			 document.documentElement.clientWidth != 0) {
		return document.documentElement.clientWidth;
	} 
	
	// older versions of IE
	else {
		return document.getElementsByTagName('body')[0].clientWidth;
	}
}

function getScreenHeight() {
	// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth
	if (typeof window.innerHeight != 'undefined') {
		return window.innerHeight;
	} 
	
	// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
	else if (typeof document.documentElement != 'undefined' && 
			 typeof document.documentElement.clientHeight !='undefined' && 
			 document.documentElement.clientHeight != 0) {
		return document.documentElement.clientHeight;
	} 
	
	// older versions of IE
	else {
		return document.getElementsByTagName('body')[0].clientHeight;
	}
}

