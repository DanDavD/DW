let num_stack = new Array();
let op_stack = new Array();

const precedence = {
  "*": 2,
  "/": 2,
  "+": 1,
  "-": 1,
};

function stack_input(input) {
  const tokens = input.match(/(\d+|\+|\-|\*|\/|\(|\))/g);

  for (let token of tokens) {
    if (isNum(token)) {
      num_stack.push(Number(token));
    } else if (isOp(token)) {
      len = op_stack.length();
      while (
        len > 0 &&
        isOp(op_stack[len - 1]) &&
        precedence[op_stack[len - 1]] >= precedence[token]
      ) {
        num_stack.push(op_stack.pop());
      }
    } else if (token === "(") {
      op_stack.push(token);
    } else if (token === ")") {
      len = op_stack.length();
      while (len > 0 && op_stack[len - 1] !== "(") {
        num_stack.push(op_stack.pop());
      }
      if (len === 0) throw new Error("Error de Parentesis");
      op_stack.pop();
    }
  }

  while (op_stack.length() > 0) {
    const op = op_stack.pop();
    if (op === "(" || op === ")") throw new Error("Error de Parentesis");
    num_stack.push(op);
  }
}

function isNum(token) {
  return !isNaN(token) && token !== "";
}

function isOp(token) {
  return ["+", "-", "*", "/"].includes(token);
}

function eval_stack() {}
