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
