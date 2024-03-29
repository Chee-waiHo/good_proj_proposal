modelfilestrs['menu'] = hereDoc(function(){/*!
<script type="text/javascript">

	
	// pageChanged & sizeChanged functions are needed in every model file
	// other functions for model should also be in here to avoid conflicts
	var menu = new function() {
		
		// function called every time the page is viewed after it has initially loaded
		this.pageChanged = function() {
			if (x_params.menuImage != undefined && x_params.menuImage != "" && x_params.navigation != "Linear" && x_params.menuImageProperties == "Full Screen") {
				this.setUpBg();
			}
		}
		
		// function called every time the size of the LO is changed
		this.sizeChanged = function() {
			
		}
		
		this.init = function() {
			var numOffset = 0;
			if (x_params.navigation != "Linear" && x_params.navigation != "Historic") { // 1st page is menu page - ignore this when making page list
				numOffset = 1;
			}
			
			var $menuItems = $("#menuItems"),
				$menuItem = $menuItems.find(".menuItem:first"),
				i;
			
			for (i=0; i<x_pages.length-numOffset; i++) {
				var $thisItem;
				if (i != 0) {
					$thisItem = $menuItem.clone().appendTo($menuItems);
				} else {
					$thisItem = $menuItem;
				}
				
				$thisItem.html((i+1) + ") " + x_pages[i+numOffset].getAttribute("name"));
			}
			
			$("#menuItems .menuItem")
				.button()
				.click(function() {
					$this = $(this);
					$this.removeClass("ui-state-focus");
					$this.removeClass("ui-state-hover");
					x_changePage($this.index() + numOffset);
				});
			
			if (x_params.navigation != "Linear" && x_params.navigation != "Historic") { // 1st page is menu page
				
				if (x_params.menuImage != undefined && x_params.menuImage != "") {
					
					if (x_params.menuImageProperties != "Full Screen") { // use panel
						var imgMaxW;
						if (x_browserInfo.mobile == false) {
							imgMaxW = $("#menuHolder .right").width() - 80;
						} else {
							imgMaxW = $x_mobileScroll.width() - 40;
						}
						var imgMaxH = 450;
						
						$("#menuHolder .right").append('<img class="panel centre" />');
						
						$("#menuHolder .right img")
							.css("visibility", "hidden")
							.one("load", function() {
								x_scaleImg(this, imgMaxW, imgMaxH);
								x_pageLoaded();
							})
							.attr({
								"id":"pageImg",
								"src":x_evalURL(x_params.menuImage)
							})
							.each(function() { // called if loaded from cache as in some browsers load won't automatically trigger
								if (this.complete) {
									$(this).trigger("load");
								}
							});
						
					} else { // bg image
						this.setUpBg(true);
						x_pageLoaded();
					}
					
				} else { // no image
					$("#menuHolder").removeClass("splitScreen");
					if (x_browserInfo.mobile == false) {
						$menuItems.width("70%");
					}
					x_pageLoaded();
				}
				
			} else { // menu is in dialog
				$("#menuHolder").removeClass("splitScreen");
				this.showCurrent();
			}
		}
		
		// function called from xenith every time menu in popup appears - highlights current page in list
		this.showCurrent = function() {
			$("#menuItems").find(".current").removeClass("current");
			var $thisItem = $("#menuItems .menuItem:eq(" + x_currentPage + ")").addClass("current");
			$thisItem[0].scrollIntoView();
		}
		
		// function sets up full screen bg image
		this.setUpBg = function(firstLoad) {
			var $pageBg = $('<img id="pageBg"/>');
			$pageBg
				.hide()
				.one("load", function() {
					$(this).fadeIn();
					if (firstLoad == true) {
						x_pageLoaded();
					}
				})
				.attr("src", x_evalURL(x_params.menuImage))
				.each(function() { // called if loaded from cache as in some browsers load won't automatically trigger
					if (this.complete) {
						$(this).trigger("load");
					}
				});
			
			$x_background.append($pageBg);
		}
	}
	
	menu.init();
	
</script>

<style type="text/css">
	
	#menuItems .menuItem {
		width:			100%;
		display:		block;
		margin-bottom:	5px;
		text-align:		left;
	}

	#menuItems {
		width:	100%;
	}
	
	#menuItems .menuItem.current {
		border: 2px solid #FF9900;
		font-weight: bold;
	}
	
</style>

<div id="menuHolder" class="splitScreen">
	
	<div class="left">
		<div id="menuItems">
			<button class="menuItem"/>
		</div>
	</div>
	
	<div class="right">
	</div>
	
</div>
*/});