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
    var num1 = document.getElementById('number1').value
    var num2 = document.getElementById('number2').value
    var oper = document.getElementById('operator').value
    //var oper = Operation(x)
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

function End() {
    document.querySelector('.container').style.display='none'
}

function Start() {
    document.querySelector('.container').style.display='block'
    document.getElementById('operator').value= '';
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('result').value = '';
}