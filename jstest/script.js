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
    val1 = nameToRGB(val1);
    document.getElementById('c'+pm).style.backgroundColor = val1;
    document.getElementById('colorName'+pm).innerHTML = val1+ " | HEX: " + nameToHex(val1)+ " | HSL: " + nameToHSL(val1) ;
    document.getElementById('updatebtn'+pm).style.backgroundColor = val1;
    
    var invRGB = invertColor(nameToHex(val1));
    document.getElementById('c'+pm).style.color = invRGB;
    document.getElementById('updatebtn'+pm).style.color = invRGB;
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

function myFunction2() {
    var hex = nameToHex(app2RGB);
    navigator.clipboard.writeText(hex);
    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "Copied: " + hex;
}
  
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

function outFunc2() {
    var tooltip = document.getElementById("myTooltip2");
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


function makeRGB(id){
    if(id==1){
        app1val1 =  document.getElementById("c"+id).style.backgroundColor;
        return app1val1;
    }
    if(id==2){
        app1val2 =  document.getElementById("c"+id).style.backgroundColor;
        return app1val2;
    }
    if(id==3){
        app1val3 =  document.getElementById("c"+id).style.backgroundColor;
        return app1val3;
    }
}


function nameToRGB(name) {
    // Create fake div
    let fakeDiv = document.createElement("div");
    fakeDiv.style.color = name;
    document.body.appendChild(fakeDiv);
  
    // Get color of div
    let cs = window.getComputedStyle(fakeDiv),
        pv = cs.getPropertyValue("color");
  
    // Remove div after obtaining desired color value
    document.body.removeChild(fakeDiv);
  
    return pv;
}

function nameToHex(name) {
// Get RGB from named color in temporary div
let fakeDiv = document.createElement("div");
fakeDiv.style.color = name;
document.body.appendChild(fakeDiv);

let cs = window.getComputedStyle(fakeDiv),
    pv = cs.getPropertyValue("color");

document.body.removeChild(fakeDiv);

// Code ripped from RGBToHex() (except pv is substringed)
let rgb = pv.substr(4).split(")")[0].split(","),
    r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

if (r.length == 1)
    r = "0" + r;
if (g.length == 1)
    g = "0" + g;
if (b.length == 1)
    b = "0" + b;

return "#" + r + g + b;
}

function nameToHSL(name) {
    let fakeDiv = document.createElement("div");
    fakeDiv.style.color = name;
    document.body.appendChild(fakeDiv);
  
    let cs = window.getComputedStyle(fakeDiv),
        pv = cs.getPropertyValue("color");
  
    document.body.removeChild(fakeDiv);
  
    // Code ripped from RGBToHSL() (except pv is substringed)
    let rgb = pv.substr(4).split(")")[0].split(","),
        r = rgb[0] / 255,
        g = rgb[1] / 255,
        b = rgb[2] / 255,
        cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
  
    if (delta == 0)
      h = 0;
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
  
    if (h < 0)
      h += 360;
  
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return "hsl(" + h + "," + s + "%," + l + "%)";
}

function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);

        if((r+g+b)>382){
            r = 0;
            g = 0;
            b = 0;
        } else {
            r = 255;
            g = 255;
            b = 255;
        }

    // pad each with zeros and return
    return 'rgb(' + r + "," + g + "," + b + ")";
}
