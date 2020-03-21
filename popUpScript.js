
//SHOWS THE POPUP WITH THE RESPONSE CORRESPODNING TO THAT ANIMATION
function showPopup(styleId, timeStamp, answer){
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
    document.getElementById('timeStamp').color='#7b964d';
  }
  else if (styleId=='relationship'){
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
}

//CLOSES THE POPUP
function closePopup(){
  document.getElementById('popUpBox').style.visibility='hidden';
  document.getElementById('dimmedScreen').style.visibility='hidden';
}
