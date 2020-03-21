
//SHOWS THE POPUP WITH THE RESPONSE CORRESPODNING TO THAT ANIMATION
function showPopup(answer, styleId){
  //error message for no answer
  if (answer==undefined)
  {
    answer="no answer defined";
  }

  if (styleId=='action'){
    document.getElementById('popUpBox').style.borderColor='#acd5ed';
  }
  else if (styleId=='ship'){
    document.getElementById('popUpBox').style.borderColor='tomato';
  }
  else if (styleId=='item'){
    document.getElementById('popUpBox').style.borderColor='#e3b726';
  }
  else if (styleId=='concept'){
    document.getElementById('popUpBox').style.borderColor='#bb91b6';
  }
  else {
    //adding black to debug
    document.getElementById('popUpBox').style.borderColor='black';
  }

  //MAKING THE POPUP AND DIMMED SCREEN VISIBLE
  document.getElementById('popUpBox').style.visibility='visible';
  document.getElementById('dimmedScreen').style.visibility='visible';
  //printing text
  document.getElementById("answerText").innerHTML = answer;
}

//CLOSES THE POPUP
function closePopup(){
  document.getElementById('popUpBox').style.visibility='hidden';
  document.getElementById('dimmedScreen').style.visibility='hidden';
}
