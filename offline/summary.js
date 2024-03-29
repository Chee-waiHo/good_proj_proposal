modelfilestrs['summary'] = hereDoc(function(){/*!
<script type="text/javascript">

	
	// pageChanged & sizeChanged functions are needed in every model file
	// other functions for model should also be in here to avoid conflicts
	var summary = new function() {		
		// function called every time the page is viewed after it has initially loaded
		this.pageChanged = function() {
			
		}
		
		// function called every time the size of the LO is changed
		this.sizeChanged = function() {
			
		}
		
		this.init = function() {
			// if language attributes aren't in xml will have to use english fall back
			var summaryHeader = x_currentPageXML.getAttribute("summaryHeader");
			if (summaryHeader == undefined) {
				summaryHeader = "Summary";
			}
			var nextstepsHeader = x_currentPageXML.getAttribute("nextstepsHeader");
			if (nextstepsHeader == undefined) {
				nextstepsHeader = "Next Steps";
			}
			
			$("#pageContents").html("<h3>" + summaryHeader + "</h3><p>" + x_addLineBreaks(x_currentPageXML.getAttribute("summary")) + "</p><br/><h3>" + nextstepsHeader + "</h3><p>" + x_addLineBreaks(x_currentPageXML.getAttribute("nextsteps")) + "</p>");
			
			// call this function in every model once everything's loaded
			x_pageLoaded();
		}
	}
	
	summary.init();
	
</script>

<style type="text/css">
	
	#pageContents p {
		margin-top: 0px;
	}
	
</style>

<div id="pageContents">
	
</div>
*/});