let result = document.getElementById("result");
let  num1= '';
let num2 = '';
let operater = null;

function clr(){
    let  num1= '';
    let num2 = '';
    let operater = null;
    result.value = '';
}

function dis(value){
    result.value +=value;
}

function op(opt){
    if (operater === null) {
        num1 = result.value;
        result.value = '';
        result.value += ` ${opt} `;
    }
}

function del() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

function cal(){
    if (operater !==null){
        
        const parts = result.value.split(' ');
        num2 = parts[3];
        let result1;
        switch (operater) {
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
        operater = null;
    }
    else {
        alert("No operation to calculate");
    }

    
}


