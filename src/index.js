function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    expr=expr.replace(/\s/g, '');
    let priority = {
      '*': 3,
      '/': 3,
      '+': 2,
      '-': 2,
      '(': 1,
      ')': 1
    }
    console.log(expr);
    let stack = [];
    let operation = [];
    let openBracket = 0;
    let closeBracket = 0;
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === '(') {
            openBracket++;
        }
        else if (expr[i] === ')') {
            closeBracket++;
        }
    }
    if (openBracket != closeBracket) {
        throw "ExpressionError: Brackets must be paired";
    }
for(let i=0;i<expr.length; i++)
    {let reg = /\d+/g;
    if(!isNaN(expr[i])){
   reg.lastIndex=i;
   let numb = reg.exec(expr);
   stack.push(numb);
    i = reg.lastIndex-1;}
    else
    {if(expr[i]=='('){
        operation.push(expr[i]); 
        continue;
     }
    // if(stack.length<=1){
    //     operation.push(expr[i]); 
    //     continue;
    // }
    if(expr[i]==')'&&operation[operation.length-1]=='('){
        operation.pop(); 
        continue;
    }
    if(operation.length>=1){
        if(priority[expr[i]]>priority[operation[operation.length-1]])
            {operation.push(expr[i]);}
        else{
            let b = stack.pop();
            let a = stack.pop();
            switch (operation.pop()) {
                case "+": {
                    stack.push(Number(a) + Number(b));
                    break;
                }
                case "-": {
                    stack.push(Number(a) - Number(b));
                    break;
                }
                case "*": {
                    stack.push(Number(a) * Number(b));
                    break;
                }
                case "/": {
                    if (Number(b) != 0) {
                        stack.push(Number(a) / Number(b));
                    } else {
                        throw new Error("TypeError: Division by zero.");
                    }
                    break;
                }
            }
            i=i-1;
        }  
    }
    else {
    operation.push(expr[i]);
    }
    }
}
while (operation.length>0) {
    let b = stack.pop();
    let a = stack.pop();
    switch (operation.pop()) {
    case "+": {
        stack.push(Number(a) + Number(b));
        break;
    }
    case "-": {
        stack.push(Number(a) - Number(b));
        break;
    }
    case "*": {
        stack.push(Number(a) * Number(b));
        break;
    }
    case "/": {
        if (Number(b) != 0) {
            stack.push(Number(a) / Number(b));
        } else {
            throw new Error("TypeError: Division by zero.");
        }
        break;
    }
    }
}
return Number(stack);
}

module.exports = {
    expressionCalculator
}