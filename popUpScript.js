/********************************************************
FUNCTIONS TO OPEN AND CLOSE A POPUP WITH INDIVIDUAL
RESPONSES.
********************************************************/

//SHOWS THE POPUP WITH THE RESPONSE CORRESPODNING TO THAT ANIMATION
/*takes in 4 strings: a category of response (styleId), a timestamp from time of submission,
the file path for an illustration to be displayed (gifname), and the response to be displayed (answer)
There are 4 strings accepted for styleId: 'concept' (makes it blue), 'action' (makes it yellow),
'item' (makes it green), and 'ship' (short for "relationship") (makes it red).
Any unacceptable string for styleId will cause black styling
*/
function showPopup(styleId, timeStamp, gifName, answer){
  //error message for no answer
  if (answer==undefined)
  {
    answer="no answer defined";
  }

  //changing colors to match category
  if (styleId=='concept'){
    document.getElementById('popUpBox').style.borderColor='#64a9bc';
    document.getElementById('timeStamp').style.color='#64a9bc';
  }
  else if (styleId=='action'){
    document.getElementById('popUpBox').style.borderColor='#e8e574';
    document.getElementById('timeStamp').style.color='#e8e574';
  }
  else if (styleId=='item'){
    document.getElementById('popUpBox').style.borderColor='#7b964d';
    document.getElementById('timeStamp').style.color='#7b964d';
  }
  else if (styleId=='ship'){
    document.getElementById('popUpBox').style.borderColor='#ed7666';
    document.getElementById('timeStamp').style.color='#ed7666';
  }
  else {
    //adding black to debug
    document.getElementById('popUpBox').style.borderColor='black';
  }

  //MAKING THE POPUP AND DIMMED SCREEN VISIBLE
  document.getElementById('popUpBox').style.visibility='visible';
  document.getElementById('dimmedScreen').style.visibility='visible';

  //printing answer/timestamp
  document.getElementById("answerText").innerHTML = answer;
  document.getElementById("timeStamp").innerHTML = '- ' + timeStamp;

  //changing the gif
  document.getElementById("smIllus").src=gifName;
}

//CLOSES THE POPUP
function closePopup(){
  document.getElementById('popUpBox').style.visibility='hidden';
  document.getElementById('dimmedScreen').style.visibility='hidden';
}

/*GeeksforGeeks used as refrence when making this function
https://www.geeksforgeeks.org/javascript-detecting-a-mobile-browser/
detects if a mobile browser is being used, and changes the divs holding animations+popup div to fit phone screen better
*/
function changeMobile(){
  //determining if browser is mobile
  var isMobile;

  if (navigator.userAgent.match(/Android/i)|| navigator.userAgent.match(/webOS/i)|| navigator.userAgent.match(/iPhone/i)|| navigator.userAgent.match(/iPad/i)|| navigator.userAgent.match(/iPod/i)|| navigator.userAgent.match(/BlackBerry/i)|| navigator.userAgent.match(/Windows Phone/i)) {
  	isMobile = true;
  }
  else {
  	isMobile = false;
  }

  //changing div styles
  if (isMobile==true){
    //resizing divs with animations
    document.getElementById('concept').style.width='600px';
    document.getElementById('concept').style.height='600px';

    document.getElementById('action').style.width='600px';
    document.getElementById('action').style.height='600px';

    document.getElementById('item').style.width='600px';
    document.getElementById('item').style.height='600px';

    document.getElementById('ship').style.width='600px';
    document.getElementById('ship').style.height='600px';

    //resizing popup div
    document.getElementById('popUpBox').style.width='80%';
    document.getElementById('popUpBox').style.height='80%';
    document.getElementById('popUpBox').style.top='10%';
    document.getElementById('popUpBox').style.left='10%';

  }

}
