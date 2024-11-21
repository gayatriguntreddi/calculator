let result = document.getElementById("result");
let  num1= '';
let num2 = '';
let operator = null;

function clr(){
     num1= '';
     num2 = '';
     operator = null;
    result.value = '';
}

function dis(value){
    result.value +=value;
}

function op(opt){
    if (operator === null) {
        num1 = result.value;
        operator = opt;
        result.value = '';
        result.value += `${num1} ${opt} `; 
    }
}

function del() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

function cal(){
    if (operator !==null){
       const parts = result.value.split(' ');
        num2 = parts[2];
        let result1;
        switch (operator) {
            case '+':
                result1 = parseFloat(num1) + parseFloat(num2);
                break;
            case '-':
                result1 = parseFloat(num1) - parseFloat(num2);
                break;
            case '*':
                result1 = parseFloat(num1) * parseFloat(num2);
                break;
            case '/':
                result1 = parseFloat(num1) / parseFloat(num2);
                break;
             case '%':
                 result1 = parseFloat(num1) % parseFloat(num2);
                 break;
                 default:
                    alert("Invalid operator");
                    return;
        }
        result.value = result1;
        num1 = '';
        num2 = '';
        operator = null;
    }
    else {
        alert("No operation to calculate");
    }

    
}


