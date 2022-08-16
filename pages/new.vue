<script setup lang="ts">
import convertToHTML from "markdown-to-html-converter";

const input = ref("");
const languageInput = ref("markdown");
const show = ref(false);
// const language = computed(() => languageInput.value);

const output = computed(() => {
  if (languageInput.value === "markdown") {
    return convertToHTML(input.value);
  } else {
    return input.value;
  }
});

const configEditor = async () => {
  show.value = false;
  const loader = await import("@monaco-editor/loader").then((m) => m?.default);
  // prevent double rendering
  show.value = true;

  const monaco = await loader.init();

  monaco.editor.create(editor.value, {
    theme: "vs-dark",
    language: languageInput.value.toLowerCase(),
    value: input.value,
    // allow for auto surround of brackets and quotes
    autoSurround: "languageDefined",
  });
};

const editor = ref();
onMounted(async () => await configEditor());

// Reload editor after every language change
watch(languageInput, async () => await configEditor());

const changeHandler = ({ target }) => (input.value = target.value);
</script>

<template>
  <select
    name="languageInput"
    id="languageInput"
    v-model="languageInput"
    style="margin-bottom: 2rem"
  >
    <option value="txt">plaintext</option>
    <option value="markdown">markdown</option>
    <option value="javascript">javascript</option>
    <option value="typescript">typescript</option>
    <option value="python">python</option>
    <option value="go">go</option>
    <option value="c">c</option>
    <option value="cpp">c++</option>
    <option value="bash">bash</option>
  </select>

  <div v-if="show" id="editor" ref="editor" @keyup="changeHandler" />
  <div id="spacer" style="margin: 2rem" />
  <span
    v-if="languageInput === 'markdown'"
    class="prose prose-lg"
    v-html="output"
  />
  <code v-else v-show="!!output" class="prose prose-lg">
    <pre class="w-full">{{ output }}</pre>
  </code>
</template>

<style scoped>
#editor {
  height: 8rem;
}
</style>
