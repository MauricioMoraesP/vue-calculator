export function calculator(
  valor1: Ref<string>,
  valor2: Ref<string>,
  input: Ref<string>,
  seq: Ref<boolean>,
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
  seq.value = true;
}

export function condicionamento(
  valor1: Ref<string>,
  valor2: Ref<string>,
  input: Ref<string>,
  seq: Ref<boolean>,
  operador: Ref<string>,
  functionCalculator: Function
) {
  if (valor1.value == "") {
    valor1.value = input.value.slice(0, -1);
    input.value = "";
  } else if (!seq.value) {
    valor2.value = input.value.slice(0, -1);
    input.value = "";
    functionCalculator(valor1, valor2, input, seq, operador);
  } else {
    input.value = "";
    valor2.value = "";
    seq.value = false;
  }
}
