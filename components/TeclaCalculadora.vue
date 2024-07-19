<template>
    <div>
        <button @click="props.function(props.name)" v-if="props.name != 'vazio'"
            :class="{ 'tecla': props.name != '=', 'tecla-igual': props.name == '=' }"
            class=" text-3xl rounded-2xl  w-[85%] font-semibold h-[2.9em] z-50  text-center text-white font-gray-200 flex justify-center items-center border border-gray-900 shadow-lg   ">{{
                props.name
            }}</button>

        <button v-if="props.image != 'vazio'" @click="props.function(props.image)"
            class=" tecla text-3xl rounded-2xl  w-[85%] font-semibold h-[2.9em] z-50  text-center text-white font-gray-200 flex justify-center items-center border border-gray-900 shadow-lg">
            <slot />
        </button>
    </div>

</template>


<script setup lang='ts'>
const props = defineProps({
    name: {
        type: String,
        required: false,
        default: 'vazio'
    },
    image: {
        type: String,
        required: false,
        default: 'vazio'
    },
    function: {
        type: Function,
        required: true,
    }
})

</script>