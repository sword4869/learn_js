import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

<script setup>
const message = ref('Hello Vue!')
</script>

<template>
    <div>{{ message }}</div>
</template>