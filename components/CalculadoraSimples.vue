<template>
    <div class=" calculadora-simples h-[70%]">
        <section class="tela flex flex-1 justify-center p-3 z-50 ">
            <input v-model="input" @input="AnalisarTeclaInput($event as InputEvent)"
                v-on:keyup.enter="TeclaCalculadoraResponsive('=')"
                class="focus:border-white h-[130px] text-black border-4  text-end w-[94%]  my-8 text-4xl bg-white"
                type="text">
        </section>
        <div class="flex flex-1   items-end justify-center mt-2">
            <section
                class="teclas grid grid-cols-4 ml-4 gap-1   w-full  place-items-center boder-none focus:border-none">
                <div class="grid grid-cols-1 w-full gap-1 gap-y-2">
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="%" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" image="1/x">
                        &#x215F;<span class="text-md text-[25px] mt-2 ml-0.5">x</span>
                    </TeclaCalculadora>
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="7" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="4" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="1" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="+/-" />

                </div>
                <div class="grid grid-cols-1 w-full gap-1 gap-y-2">
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="CE" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="x&sup2" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="8" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="5" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="2" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="0" />
                </div>
                <div class="grid grid-cols-1 w-full gap-1 gap-y-2">
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="C" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="&#x221Ax" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="9" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="6" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="3" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="." />
                </div>
                <div class="grid grid-cols-1 w-full gap-1 gap-y-2">
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" image="excluir">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm2 4l6 6m0-6l-6 6" />
                        </svg>
                    </TeclaCalculadora>
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" image="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M224 352c-35.35 0-64 28.65-64 64s28.65 64 64 64s64-28.65 64-64s-28.65-64-64-64m0-192c35.35 0 64-28.65 64-64s-28.65-64-64-64s-64 28.65-64 64s28.65 64 64 64m192 48H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32" />
                        </svg>
                    </TeclaCalculadora>
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="x" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="+" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="-" />
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" name="=" />
                </div>
            </section>
        </div>
    </div>
</template>
<script setup lang="ts">
import { calculator, condicionamento } from '~/composable/operationCalculadora';
const operador = ref<string>('');
const input = ref<string>('');
const regexVirgula = ref<RegExp>(/,/g);
const regexUmPonto = ref<RegExp>(/\.{2}/g);
const contadorPontos = ref<number>(0);
const pointSave = ref<string>('');
const valor1 = ref<string>('');
const valor2 = ref<string>('');
const seq = ref<boolean>(false);

function TeclaCalculadoraResponsive(tecla: string) {
    switch (tecla) {
        case '1':
            input.value = input.value + '1';
            break;
        case '2':
            input.value = input.value + '2';
            break;
        case '3':
            input.value = input.value + '3';
            break;
        case '4':
            input.value = input.value + '4';
            break;
        case '5':
            input.value = input.value + '5';
            break;
        case '6':
            input.value = input.value + '6';
            break;
        case '7':
            input.value = input.value + '7';
            break;
        case '8':
            input.value = input.value + '8';
            break;
        case '9':
            input.value = input.value + '9';
            break;
        case '0':
            input.value = input.value + '0';
            break;
        case 'excluir':
            if (input.value != '') {
                input.value = input.value.slice(0, -1);
            }
            break;
        case 'CE':
            input.value = '';
            break;
        case 'C':
            input.value = '';
            valor1.value = ''
            valor2.value = '';
            operador.value = '';
            seq.value = false;
            break;
        case '%':
            if (valor1.value != '') {
                input.value = String(Number(valor1.value) * Number(input.value) / 100);
            } else {
                operador.value = '';
            }
            break;
        case '/':
            input.value += '/';
            operador.value = '/';
            condicionamento(valor1, valor2, input, seq, operador, calculator);
            break;
        case '√x':
            input.value = String(Math.sqrt(Number(input.value)));
            break;
        case 'x²':
            input.value = String((Number(input.value) * Number(input.value)));
            break;
        case '1/x':
            input.value = String(1 / Number(input.value));
            break;
        case 'x':
            input.value += '*';
            operador.value = '*';
            condicionamento(valor1, valor2, input, seq, operador, calculator);
            break;
        case '+':
            input.value += '+';
            operador.value = '+';
            condicionamento(valor1, valor2, input, seq, operador, calculator);
            break;
        case '-':
            input.value += '-';
            operador.value = '-';
            condicionamento(valor1, valor2, input, seq, operador, calculator);
            break;
        case '=':
            switch (operador.value) {
                case "+":
                    console.log(operador.value + '-' + valor1.value + '-' + valor2.value);
                    valor2.value = input.value;
                    input.value = String(Number(valor1.value) + Number(valor2.value));
                    valor1.value = input.value;
                    break;
                case "-":
                    valor2.value = input.value;
                    input.value = String(Number(valor1.value) - Number(valor2.value));
                    valor1.value = input.value;
                    break;
                case "*":
                    valor2.value = input.value;
                    input.value = String(Number(valor1.value) * Number(valor2.value));
                    valor1.value = input.value;
                    break;
                case "/":
                    valor2.value = input.value;
                    input.value = String(Number(valor1.value) / Number(valor2.value));
                    valor1.value = input.value;
                    break;
            }
            break;
    }

}



//Feito para observar as teclas dentro do Input.
function AnalisarTeclaInput(evento: InputEvent) {
    console.log(input.value, '-', valor1.value, '-', valor2.value);
    switch (evento.data) {
        case '+':
            operador.value = '+';
            condicionamento(valor1, valor2, input, seq, operador, calculator);
            break;
        case '-':
            operador.value = '-';
            condicionamento(valor1, valor2, input, seq, operador, calculator);
            break;
        case '/':
            operador.value = '/';
            condicionamento(valor1, valor2, input, seq, operador, calculator);
            break;
        case '*':
            operador.value = '*';
            condicionamento(valor1, valor2, input, seq, operador, calculator);
            break;
    }

}






//Observar a varíavel input
watch(input, (newValue, oldValue) => {
    input.value = input.value.replace(regexVirgula.value, '.');
});



</script>