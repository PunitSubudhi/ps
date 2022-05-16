var app1 = false;
var app2 = false;
var app3 = false;

var app1val1 = "";
var app1val2 = "";
var app1val3 = "";

var app2RGB = "rgb(0,0,0)";
var app2R = 0;
var app2G = 0;
var app2B = 0;

function updateValue(pm){
    let val1 = document.getElementById('c'+pm+'input').value;
    document.getElementById('colorName'+pm).innerHTML = val1;
    document.getElementById('c'+pm).style.backgroundColor = val1;
    document.getElementById('updatebtn'+pm).style.backgroundColor = val1;
    if(pm==1)app1val1 = val1;
    if(pm==2)app1val2 = val1;
    if(pm==3)app1val3 = val1;
}

function setDisplay(value,id){
    document.getElementById(id).style.display = value;
}

function enableApp1(){
    if(!app1){
        setDisplay('block','App1');
        setDisplay('none','App2');
        setDisplay('none','App3');
        app1 = true;
        app2 = false;
        app3 = false;
    }
}

function enableApp2(){
    if(!app2){
        setDisplay('none','App1');
        setDisplay('block','App2');
        setDisplay('none','App3');
        app1 = false;
        app2 = true;
        app3 = false;
    }
}

function enableApp3(){
    if(!app3){
        setDisplay('none','App1');
        setDisplay('none','App2');
        setDisplay('block','App3');
        app1 = false;
        app2 = false;
        app3 = true;
    }
}

function myFunction() {
    navigator.clipboard.writeText(app2RGB);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + app2RGB;
}
  
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

function rgbUpdate(){
    app2R = document.getElementById('rSlider').value;
    app2G = document.getElementById('gSlider').value;
    app2B = document.getElementById('bSlider').value;

    app2RGB = "rgb("+app2R+","+app2G+","+app2B+")"
    document.getElementById('rgbcolor').style.backgroundColor = app2RGB;

    document.getElementById('rValueText').innerHTML = app2R;
    document.getElementById('gValueText').innerHTML = app2G;
    document.getElementById('bValueText').innerHTML = app2B;
    
}

function sendTo(pm) {
    document.getElementById('c'+pm+'input').value = app2RGB;
    updateValue(pm);
   // alert("The value of Color"+pm+" has been updated to "+app2RGB);
}