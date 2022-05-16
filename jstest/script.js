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
    app1val1 = val1;
}

function setDisplay(value,id){
    document.getElementById(id).style.display = value;
}

function enableApp1(){
    if(!app1){

        document.getElementById('App1').style.display = "block";
        document.getElementById('App2').style.display = "none";
        document.getElementById('App3').style.display = "none";
        app1 = true;
        app2 = false;
        app3 = false;
    }
}

function enableApp2(){
    if(!app2){

        document.getElementById('App1').style.display = "none";
        document.getElementById('App2').style.display = "block";
        document.getElementById('App3').style.display = "none";

        app1 = false;
        app2 = true;
        app3 = false;
    }
}

function enableApp3(){
    if(!app3){

        document.getElementById('App1').style.display = "none";
        document.getElementById('App2').style.display = "none";
        document.getElementById('App3').style.display = "block";

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
    alert("The value of Color"+pm+" has been updated to "+app2RGB);
}