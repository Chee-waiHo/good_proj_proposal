modelfilestrs['tabNav'] = hereDoc(function(){/*!
<script type="text/javascript">

	
	// pageChanged & sizeChanged functions are needed in every model file
	// other functions for model should also be in here to avoid conflicts
	var tabNav = new function() {
		// function called every time the page is viewed after it has initially loaded
		this.pageChanged = function() {
			
		}
		
		// function called every time the size of the LO is changed
		this.sizeChanged = function() {
			if (x_browserInfo.mobile == false) {
				var $infoHolder = $("#infoHolder"),
					$paneHolder = $("#paneHolder");
				
				$infoHolder.height($x_pageHolder.height() - parseInt($x_pageDiv.css("padding-top")) * 2 - 10);
				$infoHolder.tabs("refresh"); 
				$paneHolder.height($infoHolder.height() - $("#tabList").height() - parseInt($paneHolder.css("padding-top")) * 2 - 5);
			}
			
			var $pageContents = $("#pageContents");
			if ($pageContents.data("count") != 0) {
				$pageContents.data("count", $pageContents.data("count") + 1);
				this.scaleImages();
			} else {
				$pageContents.data("count", $pageContents.data("count") + 1);
			}
		}
		
		this.init = function() {
			$("#pageContents").data("count", 0);
			
			// tabWidth attribute is ignored as it is automatic
			var panelWidth = x_currentPageXML.getAttribute("panelWidth");
			if (panelWidth == "Full") {
				$("#pageContents .right div:first").appendTo($("#pageContents"));
				$("#pageContents .splitScreen").remove();
			} else {
				$("#textHolder").html(x_addLineBreaks(x_currentPageXML.getAttribute("text")));
				if (panelWidth == "Small") {
					$("#pageContents .splitScreen").addClass("large"); // make text area on left large so tab area on right is small
				} else if (panelWidth == "Large") {
					$("#pageContents .splitScreen").addClass("small");
				} else {
					$("#pageContents .splitScreen").addClass("medium");
				}
			}
			
			
			var $tabHeader =	$("#pageContents .tabHeader"),
				$paneInfo =		$("#pageContents .paneInfo");
			
			// set up tabs and panel contents
			$(x_currentPageXML).children().each(function(i) {
				var $thisHeader, $thisContents;
				if (i != 0) {
					$thisHeader = $tabHeader.clone().appendTo($tabHeader.parent());
					$thisContents = $paneInfo.clone().appendTo($paneInfo.parent());
				} else {
					$thisHeader = $tabHeader;
					$thisContents = $paneInfo;
				}
				
				var $thisHeaderLink = $thisHeader.find("a");
				$thisHeaderLink
					.attr("href", "#tab" + i)
					.html(this.getAttribute("name"));
				
				var	infoString = '<p>' + x_addLineBreaks(this.getAttribute("text")) + '</p>',
					url = this.getAttribute("url");
				
				if (url != undefined && url != "") {
					var newString = "";
					if (url.split('.').pop().slice(0, -1) == "swf") {
						newString += '<div class="centerAlign"><div id="pageSWF' + i + '" class="paneSWF"><h3 class="alert">' + x_getLangInfo(x_languageData.find("errorFlash")[0], "label", "You need to install the Flash Player to view this content.") + '</h3><p><a href="http://www.adobe.com/go/getflashplayer"><img class="flashImg" src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="' + x_getLangInfo(x_languageData.find("errorFlash")[0], "description", "Get the Flash Player") + '" /></a></p></div></div>';
						
					} else if (url.split('.').pop().slice(0, -1) == "html") {
						// sets up savedData for current page as an array so it can contain the initObject and any additionally saved data for this customHTML file
						if (x_pageInfo[x_currentPage].savedData == undefined) {
							x_pageInfo[x_currentPage].savedData = [];
						}
						x_pageInfo[x_currentPage].savedData.push(new Object());
						
						if (this.getAttribute("initObject") != undefined && this.getAttribute("initObject") != "") {
							x_pageInfo[x_currentPage].savedData[x_pageInfo[x_currentPage].savedData.length - 1].initObject = x_sortInitObject(this.getAttribute("initObject"));
						}
						newString += '<div class="jsHolder"></div>';
						
					} else {
						newString += '<div class="paneImg"><img ';
						if (this.getAttribute("tip") != undefined && this.getAttribute("tip") != "") {
							newString += 'alt="' + this.getAttribute("tip") + '" ';
						}
						newString += ' /></div>';
					}
					if (this.getAttribute("align") == "Top") {
						infoString += newString;
					} else {
						infoString = newString + infoString;
					}
				}
				
				$thisContents
					.attr("id", "tab" + i)
					.html(infoString);
				
				if ($thisContents.find(".paneImg").length > 0) {
					var $img = $thisContents.find(".paneImg img");
					if (i == 0) {
						// don't set src of image that's visible until later as panels needs to be fully set up for image scaling to work correctly
						$img.data("src", x_evalURL(url));
					} else {
						$img.attr("src", x_evalURL(url));
					}
					
				} else if ($thisContents.find(".paneSWF").length > 0) {
					var size = [300,300];
					if (this.getAttribute("movieSize") != "" && this.getAttribute("movieSize") != undefined) {
						var dimensions = this.getAttribute("movieSize").split(",");
						if (Number(dimensions[0]) != 0 && Number(dimensions[1]) != 0) {
							size = [Number(dimensions[0]), Number(dimensions[1])];
						}
					}
					
					swfobject.embedSWF(x_evalURL(url), "pageSWF" + i, size[0], size[1], "9.0.0", x_templateLocation + "common_html5/expressInstall.swf", "", "", "");
					if (this.getAttribute("tip") != undefined && this.getAttribute("tip") != "") {
						$("#pageSWF" + i).attr("title", this.getAttribute("tip"));
					}
					
				} else if ($thisContents.find(".jsHolder").length > 0) {
					$thisContents.find(".jsHolder").data({
						"savedDataIndex"	:x_pageInfo[x_currentPage].savedData.length - 1,
						"built"				:false,
						"url"				:x_evalURL(url)
					});
				}
			});
			
			
			$("#infoHolder").tabs({
				select:	function(e, ui) {
					$("#paneHolder").scrollTop(0);
					setTimeout(function () {
						tabNav.scaleImages();
						// remove any custom HTML so it doesn't mess up any custom HTML that might be loaded on another pane
						$(".customHTMLHolder").detach();
						tabNav.loadCustomHTML();
					}, 1);
				}
			});
			
			this.sizeChanged();
			
			if ($paneInfo.find(".paneImg img").length > 0) {
				// there's an image on 1st pane - load it now everything's set up
				$paneInfo.find(".paneImg img")
					.one("load", function() {
						tabNav.scaleImages();
					})
					.attr("src", $paneInfo.find(".paneImg img").data("src"))
					.each(function() { // called if loaded from cache as in some browsers load won't automatically trigger
						if (this.complete) {
							$(this).trigger("load");
						}
					});
				
			} else if ($paneInfo.find(".jsHolder").length > 0) {
				this.loadCustomHTML();
			}
			
			x_pageLoaded();
		}
		
		// function scales image on visible panel - have to do them individually after panel change as I can't get dimensions of images on hidden panels
		this.scaleImages = function() {
			var $pageContents = $("#pageContents");
			// is there an image currently visible?  Has it already been scaled to fit this?
			if ($("#infoHolder .paneImg img:visible").length > 0 && $pageContents.data("count") != $("#infoHolder .paneImg img:visible").data("count")) {
				var $img = $("#infoHolder .paneImg img:visible"),
					firstScale = false;
				
				if ($img.data("count") == undefined) {
					firstScale = true;
				}
				$img.data("count", $pageContents.data("count"));
				
				x_scaleImg($img, $img.parent().width(), $("#paneHolder").height() - 10, true, firstScale);
				
				$img.css({
					"opacity"	:1,
					"filter"	:'alpha(opacity=100)'
				});
			}
		}
		
		this.loadCustomHTML = function() {
			if ($("#infoHolder .paneInfo:visible .jsHolder").length > 0) {
				// there's some custom html to be loaded
				var	$thisJsHolder = $("#infoHolder .paneInfo:visible .jsHolder"),
					$thisCustomHTMLHolder;
				
				if ($thisJsHolder.data("built") != false) {
					// this pane has already been viewed - reload the customHTML previously used
					$thisCustomHTMLHolder = $thisJsHolder.data("built").appendTo($thisJsHolder);
					
					customHTML.pageChanged();
					
				} else {
					// customHTML hasn't loaded here before - load it from file
					$thisCustomHTMLHolder = $('<div class="customHTMLHolder"></div>').appendTo($thisJsHolder);
					$thisJsHolder.data("built", $thisCustomHTMLHolder);
					
					$thisCustomHTMLHolder.load($thisJsHolder.data("url"));
				}
			}
		}
	}
	
	tabNav.init();
	
</script>

<style type="text/css">
	
	#pageContents .paneImg {
		text-align:		center;
		padding-top:	10px;
	}
	
	#infoHolder .paneImg img {
		
		
	}
	
	#paneHolder {
		overflow:	auto;
	}
	
</style>

<div id="pageContents">
	
	<div class="splitScreen">
		
		<div id="textHolder" class="left" tabindex="1"></div>
		
		<div class="right">
			<div>
				<div id="infoHolder">
					<ul id="tabList">
						<li class="tabHeader"><a></a></li>
					</ul>
					<div id="paneHolder">
						<div class="paneInfo"></div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
	
</div>

*/});