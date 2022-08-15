<script setup lang="ts">
const input = ref("");
const output = computed(() =>
  input.value
    .split(
      `
`
    )
    .join("<br />")
);
</script>

<template>
  <span class="block" v-html="output" />

  <textarea class="w-full" v-model="input" />
</template>

<style scoped></style>
