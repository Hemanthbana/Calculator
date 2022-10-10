
alert('Do you know i.e ANTS wont sleep !')

function changemode(){
    let mybody = document.body;
    mybody.classList.toggle("body1")   
}

document.getElementById('coupan').style.visibility = 'visible';


function closecoupan(){
    document.getElementById('coupan').style.visibility = 'hidden';
}


let outputScreen = document.getElementById('output');

function display(num) {
    outputScreen.value += num;
}

function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert('invalid')
    }
}

function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}