modelfilestrs['colourChanger'] = hereDoc(function(){/*!
<script type="text/javascript">


	// pageChanged & sizeChanged functions are needed in every model file
	// other functions for model should also be in here to avoid conflicts
	var colourChanger = new function() {

		this.selectedIndex = 0;

		this.filterMap = [
			  {class:'filter_off', name:'off', default:'Off'},
			  {class:'filter_inv', name:'invert', default:'Invert'},
			  {class:'filter_boy', name:'blackYellow', default:'Black on Yellow'}
		];

		// function called every time the page is viewed after it has initially loaded
		this.pageChanged = function() {

		}

		// function called every time the size of the LO is changed
		this.sizeChanged = function() {

		}

		this.init = function() {
			// get language strings
			$("#p1").html(x_getLangInfo(x_languageData.find("colourChanger").find("selectTxt")[0], "label", "Please select from the options below") + ":");
			$("#p2").html(x_getLangInfo(x_languageData.find("colourChanger").find("adviceTxt")[0], "label", "Need more advice? Visit the Jisc TechDis <a target='_blank' href='http://accessiblepractice.org/v/xerte/play_427'>Xerte Toolkits accessibility guide</a>."));

			var styles = [];

			// *** These will eventually be pushed out to reside in the relevant model ***
			// *** Each model will also expose a needsRedrawn flag or will provide relevant methods ***

			// *******************
			// ***** Inverted ****
			// *******************

			// *** General ***
			styles.push(['.filter_inv body', 'color:white; background:black;']);
			styles.push(['.filter_inv #x_headerBlock', 'color:black; background:white; filter:none;']);
			styles.push(['.filter_inv #x_footerBlock', 'color:black; background:white; filter:none;']);
			styles.push(['.filter_inv #x_pageNo', 'color:white;']);
			styles.push(['.filter_inv .panel', 'background:black;']);
			styles.push(['.filter_inv #x_footerBg', 'visibility:hidden;']);
			styles.push(['.filter_inv #x_mainBg', 'visibility:hidden;']);

			styles.push(['.filter_inv div#thumbHolder a.thumbBox', 'color:white; background:black;']);
			styles.push(['.filter_inv .thumbBox h3', 'color:white; background:black;']);
			styles.push(['.filter_inv #x_colourChanger', 'color:white; background:black;']);
			styles.push(['.filter_inv .paneInfo', 'color:white; background:black;']);
			styles.push(['.filter_inv .paneContents', 'color:white; background:black;']);
			styles.push(['.filter_inv tr.shaded', 'color:black; background:white;']);
			styles.push(['.filter_inv table.header.shaded tr:first-child', 'color:black; background:white;']);
			styles.push(['.filter_inv a', 'color:white; text-decoration: underline; cursor: auto;']);
			styles.push(['.filter_inv #infoHolder .highlight', 'color:black; background:white;']);
			styles.push(['.filter_inv textarea#initText', 'color:white; background:black;']);
			styles.push(['.filter_inv textarea#answerTxt', 'color:white; background:black;']);
			styles.push(['.filter_inv textarea#modelTxt', 'color:white; background:black;']);
			styles.push(['.filter_inv div#questionGroup .question input', 'color:white; background:black;']);
			styles.push(['.filter_inv div#rssHolder div#resultsHolder .shadedDiv', 'color:black; background:white;']);
			styles.push(['.filter_inv div#rssHolder div#resultsHolder .shadedDiv a', 'color:black; background:white;']);
			styles.push(['.filter_inv div#youtuberssHolder div#resultsHolder .shadedDiv', 'color:black; background:white;']);
			styles.push(['.filter_inv div#youtuberssHolder div#resultsHolder .shadedDiv a', 'color:black;']);
			styles.push(['.filter_inv div#deliciousHolder div#resultsHolder .shadedDiv', 'color:black; background:white;']);
			styles.push(['.filter_inv div#deliciousHolder div#resultsHolder .shadedDiv a', 'color:black; background:white;']);
			styles.push(['.filter_inv div#cardBottomHolder div.card', 'color:black; background:white;']);
			styles.push(['.filter_inv div#dragDropHolder div#targetHolder .target', 'color:white; background:black; border: 1px white solid;']);
			styles.push(['.filter_inv div#dragDropHolder div#targetHolder .target h3', 'color:white; background:black;']);
			styles.push(['.filter_inv div#dragDropHolder div#categoryHolder .category', 'color:white; background:black; border: 1px white solid;']);
			styles.push(['.filter_inv div#dragDropHolder div#categorytHolder .category h3', 'color:white; background:black;']);
			styles.push(['.filter_inv div#dragDropHolderLabelling div#targetHolder .target', 'border-color: white;']);

			// *** Glossary Terms ***
			styles.push(['.filter_inv a.x_glossary', 'color:white;']);

			// *** Thumbnail Navigator ***
			styles.push(['.filter_inv div#mainInfoHolder div#mainPanel a#panelLink div#panelTxt p', 'color:black; background:white;']);


			// **************************
			// ***** Black on Yellow ****
			// **************************

			// *** General ***
			styles.push(['.filter_boy body', 'color:black; background:#ffff99;']);
			styles.push(['.filter_boy #x_headerBlock', 'color:#ffff99; background:black; filter:none;']);
			styles.push(['.filter_boy #x_footerBlock', 'color:#ffff99; background:black; filter:none;']);
			styles.push(['.filter_boy .panel', 'background:#ffff99;']);
			styles.push(['.filter_boy #x_footerBg', 'visibility:hidden;']);
			styles.push(['.filter_boy #x_mainBg', 'visibility:hidden;']);
			styles.push(['.filter_boy div#thumbHolder a.thumbBox', 'color:black; background:#ffff99;']);
			styles.push(['.filter_boy #x_colourChanger', 'color:black; background:#ffff99;']);
			styles.push(['.filter_boy .paneInfo', 'color:black; background:#ffff99;']);
			styles.push(['.filter_boy .paneContents', 'color:black; background:#ffff99;']);
			styles.push(['.filter_boy tr.shaded', 'color:#ffff99; background:black;']);
			styles.push(['.filter_boy table.header.shaded tr:first-child', 'color:#ffff99; background:black;']);
			styles.push(['.filter_boy a', 'color:black; text-decoration: underline; cursor: auto;']);
			styles.push(['.filter_boy #infoHolder .highlight', 'color:#ffff99; background:black;']);
			styles.push(['.filter_boy textarea#initText', 'color:black; background:#ffff99;']);
			styles.push(['.filter_boy textarea#answerTxt', 'color:black; background:#ffff99;']);
			styles.push(['.filter_boy textarea#modelTxt', 'color:black; background:#ffff99;']);
			styles.push(['.filter_boy div#questionGroup .question input', 'color:black; background:#ffff99;']);
			styles.push(['.filter_boy div#rssHolder div#resultsHolder .shadedDiv', 'color:#ffff99; background:black;']);
			styles.push(['.filter_boy div#rssHolder div#resultsHolder .shadedDiv a', 'color:#ffff99; background:black;']);
			styles.push(['.filter_boy div#youtuberssHolder div#resultsHolder .shadedDiv', 'color:#ffff99; background:black;']);
			styles.push(['.filter_boy div#youtuberssHolder div#resultsHolder .shadedDiv a', 'color:#ffff99;']);
			styles.push(['.filter_boy div#deliciousHolder div#resultsHolder .shadedDiv', 'color:#ffff99; background:black;']);
			styles.push(['.filter_boy div#deliciousHolder div#resultsHolder .shadedDiv a', 'color:#ffff99; background:black;']);
			styles.push(['.filter_boy div#cardBottomHolder div.card', 'color:#ffff99; background:black;']);
			styles.push(['.filter_boy div#dragDropHolder div#targetHolder .target', 'color:black; background:#ffff99; border: 1px black solid;']);
			styles.push(['.filter_boy div#dragDropHolder div#targetHolder .target h3', 'color:black; background:#ffff99;']);
			styles.push(['.filter_boy div#dragDropHolder div#categoryHolder .category', 'color:black; background:#ffff99; border: 1px black solid;']);
			styles.push(['.filter_boy div#dragDropHolder div#categorytHolder .category h3', 'color:black; background:#ffff99;']);
			styles.push(['.filter_boy div#dragDropHolderLabelling div#targetHolder .target', 'border: 1px black solid;']);

			// *** Glossary Terms ***
			styles.push(['.filter_boy a.x_glossary', 'color:black;']);

			// *** Thumbnail Navigator ***
			styles.push(['.filter_boy div#mainInfoHolder div#mainPanel a#panelLink div#panelTxt p', 'color:black; background:#ffff99;']);


			//if (!document.createElement('canvas').getContext) { // <IE9 - Do we need this??
			//	for (var i=0; i<styles.length; i++) {
			//		this.createCSSSelector(styles[i][0], styles[i][1]);
			//	}
			//}
			//else {
				var all_styles = [];
				for (var i=0; i<styles.length; i++) {
					all_styles.push([styles[i][0] + "{" + styles[i][1] + "}"]);
				}
				var s = document.createElement('style');
				s.setAttribute('type', 'text/css');
				s.innerHTML = all_styles.join('');
				document.getElementsByTagName("head")[0].appendChild(s);
			//}



			var $colourChangerOptions = $('#colourChangerOptions');
			var select = [];
			for (var i=0; i<this.filterMap.length; i++) {
				select.push('<label><input type="radio" name="colourChangerRadios" value="' + i + '"');
				if (i == this.selectedIndex) select.push(' checked="checked"');
				select.push('>' + x_getLangInfo(x_languageData.find("colourChanger").find(this.filterMap[i].name)[0], "label", this.filterMap[i].default) + '</label><br>');
			}
			$colourChangerOptions.append(select.join(''));

			$("input[name='colourChangerRadios']").click(function(){
				colourChanger.applyFilter($(this).attr('value'));

				var pageTypesRequiringRefresh = ['chart', 'textDrawing'];

				// Eventually we can expose a 'needsRebuilt' property or similar
				for (var i=0, len=x_pageInfo.length; i<len; i++) {
					if (pageTypesRequiringRefresh.indexOf(x_pageInfo[i].type) > -1) {
						x_pageInfo[i].built = false;
					}
				}

				// Then reload current page if required
				if (pageTypesRequiringRefresh.indexOf(x_pageInfo[x_currentPage].type) > -1) {
					x_changePage(x_currentPage);
				}
			});
		}

		this.applyFilter = function (index) {
			if (index % 3) $("#x_mainBg").hide(); else $("#x_mainBg").show();
			//console.log("Applying filter " + index);

			for (var i=0; i<this.filterMap.length; i++) {
				$('html').removeClass(this.filterMap[i].class);
			}
			$('html').addClass(this.filterMap[index].class);
		}

		// From http://www.happycode.info/create-css-classes-with-javascript/
		this.createCSSSelector = function (selector, style) {

			if(!document.styleSheets) {
				return;
			}

			if(document.getElementsByTagName("head").length == 0) {
				return;
			}

			var stylesheet;
			var mediaType;
			if(document.styleSheets.length > 0) {
				for( i = 0; i < document.styleSheets.length; i++) {
					if(document.styleSheets[i].disabled) {
						continue;
					}
					var media = document.styleSheets[i].media;
					mediaType = typeof media;

					if(mediaType == "string") {
						if(media == "" || (media.indexOf("screen") != -1)) {
							styleSheet = document.styleSheets[i];
						}
					} else if(mediaType == "object") {
						if(media.mediaText == "" || (media.mediaText.indexOf("screen") != -1)) {
							styleSheet = document.styleSheets[i];
						}
					}

					if( typeof styleSheet != "undefined") {
						break;
					}
				}
			}

			if( typeof styleSheet == "undefined") {
				var styleSheetElement = document.createElement("style");
				styleSheetElement.type = "text/css";

				document.getElementsByTagName("head")[0].appendChild(styleSheetElement);

				for( i = 0; i < document.styleSheets.length; i++) {
					if(document.styleSheets[i].disabled) {
						continue;
					}
					styleSheet = document.styleSheets[i];
				}

				var media = styleSheet.media;
				mediaType = typeof media;
			}

			if(mediaType == "string") {
				for( i = 0; i < styleSheet.rules.length; i++) {
					if(styleSheet.rules[i].selectorText && styleSheet.rules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
						styleSheet.rules[i].style.cssText = style;
						return;
					}
				}

				styleSheet.addRule(selector, style);
			} else if(mediaType == "object") {
				for( i = 0; i < styleSheet.cssRules.length; i++) {
					if(styleSheet.cssRules[i].selectorText && styleSheet.cssRules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
						styleSheet.cssRules[i].style.cssText = style;
						return;
					}
				}

				styleSheet.insertRule(selector + "{" + style + "}", 0);
			}
		}
	}

	colourChanger.init();

</script>

<style type="text/css">

	#colourChangerHolder {
		padding: 0 5px 0 5px;
	}

	#colourChangerOptions {
		display:		block;
		text-align:		left;
	}

</style>

<div id="colourChangerHolder">
	<p id="p1"></p>
	<div id="colourChangerOptions"></div>
	<p id="p2"></p>
</div>
*/});