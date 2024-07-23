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
  if(passo.value=='p1'){
    console.log('entrou aqui!')
    valor1.value= input.value;
    input.value='';
    passo.value='p2';
}
else if(passo.value=='p2'){
  console.log('p2');
    valor2.value=input.value;
    functionCalculator(valor1, valor2, input, operador);   
    valor1.value=input.value;
    valor2.value='';
    passo.value='p3'
}
else if(passo.value=='p3'){
    input.value='';
    passo.value='p4';
}
else if(passo.value=='p4'){
    valor2.value=input.value;
    functionCalculator(valor1, valor2, input, operador);   
    valor1.value=input.value;
    passo.value='p3';
}
}

 