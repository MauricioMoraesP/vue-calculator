<template>
    <div class=" calculadora-simples h-[70%]">
        <div class="tela flex flex-1 justify-center p-3 z-50 relative  ">
            <input v-model="input" @input="AnalisarTeclaInput($event as InputEvent)"
                v-on:keyup.enter="TeclaCalculadoraResponsive('=')"
                class="focus:border-white h-[100px]  md:h-[130px] text-black border-4  text-end w-[94%] text my-8 text-4xl bg-white focus:ring-slate-600"
                type="text">
        </div>
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
                        <SVGExcluir />
                    </TeclaCalculadora>
                    <TeclaCalculadora :function="TeclaCalculadoraResponsive" image="/">
                        <SVGDividir />
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
import { condicionamento, actionTeclaResponsive, teclaInput } from '~/composable/operationCalculadora';
const operador = ref<string>('');
const input = ref<string>('');
const regexVirgula = ref<RegExp>(/,/g);
const valor1 = ref<string>('');
const valor2 = ref<string>('');
const passo = ref<string>('p1');
const passoVerify = ref<boolean>(false);


function TeclaCalculadoraResponsive(tecla: string) {
    actionTeclaResponsive(valor1, valor2, input, passo, operador, condicionamento, passoVerify, tecla);
}
function AnalisarTeclaInput(evento: InputEvent) {
    teclaInput(valor1, valor2, input, passo, operador, condicionamento, passoVerify, evento);
}

watch(input, () => {
    input.value = input.value.replace(regexVirgula.value, '.');
    input.value = input.value.replace(/[^0-9()+\-*\/.]/g, '');
    if (Number(input.value) > 2000000000000000) {
        alert('Número muito grande! Por isso foi necessário zerar a calculadora!')
        input.value = '';
        valor1.value = '';
        valor2.value = '';
    }
});



</script>