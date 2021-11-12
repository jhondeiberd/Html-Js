function End() {
    document.querySelector('.container').style.display='none'
    document.getElementById("openButton").style.display = "block"
}

function Start() {
    document.getElementById("openButton").style.display = "none"
    document.querySelector('.container').style.display='block'
    document.getElementById('value1').value= '';
    document.getElementById('value2').value = '';
    document.getElementById('message').value = '';
    document.getElementById('result').value = '';
}

function Operation(x) {
    if (x == 0) {
        document.getElementById('operator').value = '+';
    } else if (x == 1) {
        document.getElementById('operator').value = '-';
    } else if (x == 2) {
        document.getElementById('operator').value = '*';
    } else if (x == 3) {
        document.getElementById('operator').value = '/';
    }
    return x
}

function Calculate(x) {
    var num1 = document.getElementById('value1').value
    var num2 = document.getElementById('value2').value
    var oper = document.getElementById('operator').value
    switch (oper) {
        case '+':
            result = Number(num1) + Number(num2)
            break
        case '-':
            result = Number(num1) - Number(num2)
            break
        case '*':
            result = Number(num1) * Number(num2)
            break
        case '/':
            if (num2 == 0){
                window.alert('Dividing by 0 is not possible');
            } else {
                result = Number(num1) / Number(num2)
            }
            break
        default: window.alert('Please, selected an operator');
        }
    document.getElementById('result').value=result  
}
