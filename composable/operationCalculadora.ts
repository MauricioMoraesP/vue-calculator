export function calculator(
  valor1: Ref<string>,
  valor2: Ref<string>,
  input: Ref<string>,
  operador: Ref<string>
) {
  let aux1 = Number(valor1.value);
  let aux2 = Number(valor2.value);
  switch (operador.value) {
    case "+":
      input.value = String(aux1 + aux2);
      break;
    case "-":
      input.value = String(aux1 - aux2);
      break;
    case "/":
      input.value = String(aux1 / aux2);
      break;
    case "*":
      input.value = String(aux1 * aux2);
      break;
  }
  valor2.value = "";
  valor1.value = input.value;
}

export function condicionamento(
  valor1: Ref<string>,
  valor2: Ref<string>,
  input: Ref<string>,
  passo: Ref<string>,
  operador: Ref<string>,
  functionCalculator: Function
) {
  if (passo.value == "p1") {
    valor1.value = input.value;
    input.value = "";
    passo.value = "p2";
  } else if (passo.value == "p2") {
    valor2.value = input.value;
    functionCalculator(valor1, valor2, input, operador);
    valor1.value = input.value;
    valor2.value = "";
    passo.value = "p3";
  } else if (passo.value == "p3") {
    input.value = "";
    passo.value = "p4";
  } else if (passo.value == "p4") {
    valor2.value = input.value;
    functionCalculator(valor1, valor2, input, operador);
    valor1.value = input.value;
    passo.value = "p3";
  }
}

export function actionTeclaResponsive(
  valor1: Ref<string>,
  valor2: Ref<string>,
  input: Ref<string>,
  passo: Ref<string>,
  operador: Ref<string>,
  condicionamento: Function,
  passoVerify: Ref<Boolean>,
  tecla: string
) {
  switch (tecla) {
    case ".":
      input.value = input.value + ".";
      break;
    case "1":
      input.value = input.value + "1";
      break;
    case "2":
      input.value = input.value + "2";
      break;
    case "3":
      input.value = input.value + "3";
      break;
    case "4":
      input.value = input.value + "4";
      break;
    case "5":
      input.value = input.value + "5";
      break;
    case "6":
      input.value = input.value + "6";
      break;
    case "7":
      input.value = input.value + "7";
      break;
    case "8":
      input.value = input.value + "8";
      break;
    case "9":
      input.value = input.value + "9";
      break;
    case "0":
      input.value = input.value + "0";
      break;
    case "excluir":
      if (input.value != "") {
        input.value = input.value.slice(0, -1);
      }
      break;
    case "CE":
      input.value = "";
      break;
    case "C":
      input.value = "";
      valor1.value = "";
      valor2.value = "";
      operador.value = "";
      passo.value = "p1";
      break;
    case "%":
      if (valor1.value != "") {
        input.value = (
          (Number(valor1.value) * Number(input.value)) /
          100
        ).toFixed(2);
      } else {
        operador.value = "";
      }
      break;
    case "/":
      passoVerify.value = false;
      operador.value = "/";
      if (passo.value == "p5" || passo.value == "p6") {
        passo.value = "p3";
      }
      condicionamento(valor1, valor2, input, passo, operador, calculator);
      break;
    case "+/-":
      input.value = String(Number(input.value) * -1);
      break;
    case "√x":
      input.value = String(Math.sqrt(Number(input.value)));
      break;
    case "x²":
      input.value = String(Number(input.value) * Number(input.value));
      break;
    case "1/x":
      input.value = String(1 / Number(input.value));
      break;
    case "x":
      operador.value = "*";
      passoVerify.value = false;
      if (passo.value == "p5" || passo.value == "p6") {
        passo.value = "p3";
      }
      condicionamento(valor1, valor2, input, passo, operador, calculator);
      break;
    case "+":
      passoVerify.value = false;
      operador.value = "+";
      if (passo.value == "p5" || passo.value == "p6") {
        passo.value = "p3";
      }
      condicionamento(valor1, valor2, input, passo, operador, calculator);
      break;
    case "-":
      passoVerify.value = false;
      operador.value = "-";
      if (passo.value == "p5" || passo.value == "p6") {
        passo.value = "p3";
      }
      condicionamento(valor1, valor2, input, passo, operador, calculator);
      break;
    case "=":
      if (!passoVerify.value) {
        passo.value = "p5";
      }
      switch (operador.value) {
        case "+":
          if (passo.value == "p5") {
            valor2.value = input.value;
            input.value = String(Number(valor1.value) + Number(valor2.value));
            valor1.value = input.value;
            passo.value = "p6";
            passoVerify.value = true;
          } else {
            input.value = String(Number(valor1.value) + Number(valor2.value));
            valor1.value = input.value;
          }
          break;
        case "-":
          if (passo.value == "p5") {
            valor2.value = input.value;
            input.value = String(
              (Number(valor1.value) - Number(valor2.value)).toFixed(2)
            );
            valor1.value = input.value;
            passo.value = "p6";
            passoVerify.value = true;
          } else {
            input.value = String(
              (Number(valor1.value) - Number(valor2.value)).toFixed(2)
            );
            valor1.value = input.value;
          }
          break;
        case "*":
          if (passo.value == "p5") {
            valor2.value = input.value;
            input.value = String(Number(valor1.value) * Number(valor2.value));
            valor1.value = input.value;
            passo.value = "p6";
            passoVerify.value = true;
          } else {
            input.value = String(Number(valor1.value) * Number(valor2.value));
            valor1.value = input.value;
          }
          break;
        case "/":
          if (passo.value == "p5") {
            valor2.value = input.value;
            input.value = String(Number(valor1.value) / Number(valor2.value));
            valor1.value = input.value;
            passo.value = "p6";
            passoVerify.value = true;
          } else {
            input.value = String(Number(valor1.value) / Number(valor2.value));
            valor1.value = input.value;
          }
          break;
      }
      break;
  }
}

export function teclaInput(
  valor1: Ref<string>,
  valor2: Ref<string>,
  input: Ref<string>,
  passo: Ref<string>,
  operador: Ref<string>,
  condicionamento: Function,
  passoVerify: Ref<Boolean>,
  evento: InputEvent
) {
  switch (evento.data) {
    case "+":
      passoVerify.value = false;
      operador.value = "+";
      if (passo.value == "p5" || passo.value == "p6") {
        passo.value = "p3";
      }
      input.value = input.value.slice(0, -1);
      condicionamento(valor1, valor2, input, passo, operador, calculator);
      break;
    case "-":
      passoVerify.value = false;
      operador.value = "-";
      if (passo.value == "p5" || passo.value == "p6") {
        passo.value = "p3";
      }
      input.value = input.value.slice(0, -1);
      condicionamento(valor1, valor2, input, passo, operador, calculator);
      break;
    case "/":
      passoVerify.value = false;
      operador.value = "/";
      if (passo.value == "p5" || passo.value == "p6") {
        passo.value = "p3";
      }
      input.value = input.value.slice(0, -1);
      condicionamento(valor1, valor2, input, passo, operador, calculator);
      break;
    case "*":
      passoVerify.value = false;
      operador.value = "*";
      if (passo.value == "p5" || passo.value == "p6") {
        passo.value = "p3";
      }
      input.value = input.value.slice(0, -1);
      condicionamento(valor1, valor2, input, passo, operador, calculator);
      break;
  }
}
