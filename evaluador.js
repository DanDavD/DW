function eval_stack() {
  const eval_s = new Array();

  for (let token of num_stack) {
    if (typeof token === "number") {
      eval_s.push(token);
    } else if (isOp(token)) {
      if (eval_s.length < 2)
        throw new Error("debe ser mayor a 2 operandos la operacion");

      const b = eval_s.pop(); //segundo num
      const a = eval_s.pop(); // primer num

      let result;
      if (token === "+") result = a + b;
      else if (token === "-") result = a - b;
      else if (token === "*") result = a * b;
      else if (token === "/") {
        if (b === 0) throw new Error("division entre cero");
        result = a / b;
      }

      eval_s.push(result);
    } else {
      throw new Error("invalido: " + token);
    }
  }

  if (eval_s.length !== 1) throw new Error("expresion invalida");
  return eval_s[0];
}
