function updateValue(){
    let val1 = document.getElementById('c1input').value;
    document.getElementById('colorName1').innerHTML = val1;
    document.getElementById('c1').style.backgroundColor = val1;

    let val2 = document.getElementById('c2input').value;
    document.getElementById('colorName2').innerHTML = val2;
    document.getElementById('c2').style.backgroundColor = val2;

    let val3 = document.getElementById('c3input').value;
    document.getElementById('colorName3').innerHTML = val3;
    document.getElementById('c3').style.backgroundColor = val3;
}

function setDisplay(value,id){
    document.getElementById(id).style.display = value;
}