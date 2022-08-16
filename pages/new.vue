<script setup lang="ts">
import convertToHTML from "markdown-to-html-converter";
const input = ref("");
const output = computed(() => convertToHTML(input.value));
</script>

<template>
  <span class="block" v-html="output" />

  <textarea class="w-full" v-model="input" />
</template>

<style scoped></style>
