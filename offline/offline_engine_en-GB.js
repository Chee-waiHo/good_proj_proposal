langxmlstr = hereDoc(function(){/*!
<language name="English">

  <noPages label="This project does not contain any pages."/>

  <nextButton label="Next" description="Next Page Button"/>
  
  <backButton label="Back" description="Previous Page Button"/>
  
  <tocButton label="Contents" description="Table of Contents Button"/>
  
  <helpButton label="Help" description="Help Button"/>

  <mediaButton label="Media" description="Media Button"/>
  
  <homeButton label="Home" description="Home Button"/>
  
  <pageHelp name="Page Help" description="Page Help" toClose="Press Space to close help"/>
  
  <glossaryButton label="Glossary" description="Glossary Button"/>
  
  <continueButton label="Continue" description="Continue Button"/>
  
  <toc label="Table of Contents" description="Table of contents. Use the arrow keys to select a page. Press space to go to that page.">
	  <contentsList label="" description=""/>
	  <closeButton label="" description="Close Table of Contents"/>
	  <gotoPageButton label="Go to Page" description="Go to Page Button"/>
  </toc>
  
  <mediaWindow label="Media Viewer"/>
  
  <glossary label="Glossary" description="A list of words and their definitions.">
	  <closeButton label="" description="Close Glossary"/>
  </glossary>
  
  <kbLanguage label="Special Characters" description="A list of buttons which add special characters to text areas">
	  <closeButton label="" description="Close Special Characters"/>
	  <dialog instruction="Use CAPS and SHIFT" on="ON" off="OFF" caps="Caps"/>
  </kbLanguage>
  
  <textToSpeech label="null" description="Text to Speech"/>
  
  <errorProject label="The project data has not loaded."/>
  
  <errorPage label="No template is currently available for this page type."/>
  
  <errorBrowser label="Your browser does not fully support this page type."/>
  
  <errorQuestions noQ="No questions have been added" noA="No answer options have been added" />
  
  <errorFlash label="You need to install the Flash Player to view this content." description="Get the Flash Player"/>
  
  <tick label="Tick"/>
  
  <cross label="Cross"/>

  <themes label="--Colour Schemes--" description="Colour Scheme Options">
    <item>default</item>
    <item>blue</item>
    <item>green</item>
    <item>red</item>
    <item>orange</item>
    <item>purple</item>
    <item>grey</item>
    <item>high contrast 1</item>
    <item>high contrast 2</item>
  </themes>
 
  <sizes label="--Screen Size--" description="Screen Size Options">
	<item>Default</item>
	<item>large</item>
	<item>larger</item>
	<item>Full Screen</item>
	<item>fill window</item>
  </sizes>
  
  <fonts label="--Text Font--" description="Typeface Options">
	  <item>default</item>
  </fonts>
  
  <textSizes label="--Text Size--" description="Text Size Options">
	  <item>default</item>
	  <item>small</item>
	  <item>medium</item>
	  <item>large</item>
	  <item>larger</item>
  </textSizes>
  
  <volumeControl label="Vol:" description="Volume Control"/>
  <volumeControlSlider label="" description="Volume Control Slider"/>
  
  <vocab>
	  <page>Page</page>
	  <of>of</of>
  </vocab>
  
  <soundController>
	<stopButton label="Stop Audio" description="Stop Audio Button"/>
	<playButton label="Play Audio" description="Play Audio Button"/>
	<pauseButton label="Pause Audio" description="Pause Audio Button"/>
	<rwndButton label="Rewind Audio" description="Rewind Audio Button"/>
	<ffwdButton label="Forward Audio" description="Forward Audio Button"/>
	<loader label="Loading: "/>
  </soundController>
  
  <movieController>
	<stopButton label="Reset Movie" description="Stop Movie Button"/>
	<playButton label="Play Movie" description="Play Movie Button"/>
	<pauseButton label="Pause Movie" description="Pause Movie Button"/>
	<rwndButton label="Rewind Movie" description="Rewind Movie Button"/>
	<ffwdButton label="Forward Movie" description="Forward Movie Button"/>
	<loader label="Loading: "/>
  </movieController>
  
  <mediaElementControls>
	<stopButton label="Stop" description="Stop Media Button"/>
	<playPauseButton label="Play/Pause" description="Play/Pause Media Button"/>
	<muteButton label="Mute Toggle" description="Toggle Mute Button"/>
	<fullscreenButton label="Fullscreen" description="Fullscreen Movie Button"/>
	<captionsButton label="Captions/Subtitles" description="Show/Hide Captions Button"/>
  </mediaElementControls>
  
  <interactions>
	  <button name="Button"/>
	  <radioButton selected="selected. Use the arrow keys to choose from the options"/>
	  <checkBox selected="selected" deselected="deselected"/>
	  <comboBox name="ComboBox" options="Options." selected="selected." selectedOptions="selected. Use the arrow keys to select" />
	  <hotSpot name="HotSpot" toSelect="Hot Spot. Press Space to select." selected="Hot Spot Selected"/>
	  <hotObject name="HotObject" toSelect="Press Space to select." selected="Hot Object Selected"/>
	  <textEntry name="Text Entry Box" selected="Text entry box selected"/>
	  <targetArea name="Target Area" description="Drop zone for" toSelect="Press space to drop the selected item."/>
	  <draggableItem name="Draggable Item" selected="Item Selected" toSelect="Press space to select" deSelected="No item selected." />
  </interactions>
  
  <fetchResults label="Fetching results..."/>
  <errorResults label="There was an error loading the results"/>
  <loadError label="Error loading"/>
  <noResults label="No results returned"/>
  
  <timer>
	  <remaining name="Time remaining"/>
	  <timeUp name="Time up"/>
	  <seconds name="seconds"/>
  </timer>

  <colourChanger label="Colour Changer" description="Change the colours.">
	  <closeButton label="" description="Close Colour Changer"/>
	  <selectTxt label="Please select from the options below"/>
	  <adviceTxt label="Need more advice? Visit the Jisc TechDis &lt;a target=&apos;_blank&apos; href=&apos;http://accessiblepractice.org/v/xerte/play_427&apos;&gt;Xerte Toolkits accessibility guide&lt;/a&gt;."/>
	  <off label="Off"/>
	  <invert label="Invert"/>
	  <blackYellow label="Black on Yellow"/>
  </colourChanger>

</language>
*/});