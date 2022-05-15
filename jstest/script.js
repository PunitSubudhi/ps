oddEven = true;
function changeColou(){
      document.getElementById('date').innerHTML = Date();
      
      if(oddEven){
            document.body.style.backgroundColor = '#fff';
            document.getElementById('date').style.color = '#000';
            document.getElementById('colorButton').innerHTML = "Change color to black";
            document.getElementById('colorButton').style.alignSelf = 'flex-end';
            oddEven = false;
      } else {
            document.body.style.backgroundColor = '#000';
            document.getElementById('date').style.color = '#fff';
            document.getElementById('colorButton').innerHTML = "Change color to white";
            document.getElementById('colorButton').style.alignSelf = 'flex-start';
            oddEven = true;
      }
}

function setBodyColor(){
     var bodColor =  document.getElementById('colorInput').value;
     document.getElementById('colorDiv').style.backgroundColor = bodColor;
}

function insertText(){
      var text = document.getElementById('textInput').value;
      document.getElementById('colorDivText').innerHTML = text;
}

function changeTextColor(){
      var color = document.getElementById('textColorInput').value;
      document.getElementById('colorDivText').style.color = color;
}

alert("This ia just a random website I made to showcase what ever I have learnt about JavaScript in the last 30 minutes, I have no Idea why I sent you this link, but anyway, now press ok and fiddle with it")