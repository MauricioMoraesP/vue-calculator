<template>
    <header>
        <h2 class="text-2xl   text-center p-3 font-bold text-gray-700">Desafio Calculadora</h2>
    </header>
    <main v-if="loading" class="flex-1 flex flex-col md:justify-center items-center">
        <slot />
    </main>
    <main v-if="!loading" class="flex-1 flex flex-col  justify-center items-center">
        <SVGLoading />
    </main>
</template>


<script setup lang='ts'>
const loading = ref<boolean>(false);
onBeforeMount(() => {
    loading.value = true;
})
</script>

<style>
.tecla-igual {
    background-color: rgba(156, 99, 52, 0.658);
    border-color: rgba(151, 95, 50, 0.658);
}

#__nuxt {
    background-color: rgba(219, 217, 217, 0.658);
}

.tecla {
    background-color: rgba(39, 38, 38, 0.658);
    border-color: rgba(39, 38, 38, 0.658);
}

@media only screen and (min-width:1000px) {
    #__nuxt {
        background-color: rgba(241, 239, 239, 0.87);
        display: flex;
        flex-direction: column;
        height: 100vw;
        height: 100vh;
    }

    .calculadora-simples {
        width: 500px;
        height: 800px;
        border-radius: 5%;
        box-shadow: 10%;
        border: 1px solid;
        border-color: rgb(226, 223, 223);
        background-color: rgba(0, 0, 0, 0.507);
    }


}

@media only screen and (min-width:500px) {
    #__nuxt {
        background-color: rgba(241, 239, 239, 0.87);
        display: flex;
        flex-direction: column;
        height: 100vw;
        height: 100vh;
    }

    .calculadora-simples {
        width: 500px;
        height: 800px;
        border-radius: 5%;
        box-shadow: 10%;
        border: 1px solid;
        border-color: rgb(226, 223, 223);
        background-color: rgba(0, 0, 0, 0.507);
    }


}


@media only screen and (max-width:499px) {
    #__nuxt {
        height: 915px;
        background-color: rgba(241, 239, 239, 0.87);
        display: flex;
        flex-direction: column;
    }

    .calculadora-simples {
        margin-top: 20px;
        height: 95%;
        width: 400px;
        border-radius: 5%;
        background-color: rgba(0, 0, 0, 0.507);
    }
}
</style>