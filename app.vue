<script setup lang="ts">
import "@/assets/css/tailwind.css";
const config = useRuntimeConfig();
// CLIENT ENV VARS
const { CLIENT_VAR } = config.public;
</script>

<template>
  <Navbar />
  <div class="w-full block">{{ CLIENT_VAR }}</div>
</template>
