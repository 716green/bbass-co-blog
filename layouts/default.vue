<template>
  <div class="bg-gray-300 h-full inline">
    <Navbar />
    <section class="h-full w-full overflow-y-auto">
      <main
        class="h-full m-12 border-black border-2 border-dashed p-8 rounded-3xl"
      >
        <span class="text-3xl font-semibold mb-8 flex">
          {{ $route.name }}
        </span>

        <div class="grow w-full">
          <slot />
        </div>
      </main>
    </section>

    <Footer class="fixed bottom-0 w-full text-center flex-0" />
  </div>
</template>
