<script setup>
import { ref } from "vue";
import Loader from "./components/Loader.vue";

const loading = ref(true);

const rand = (max) => {
  return Math.floor(Math.random() * max);
};

setTimeout(() => {
  loading.value = false;
}, rand(3) * 1000);
</script>

<template>
  <article class="pt-28">
    <div class="container mx-auto px-2">
      <div class="flex items-center justify-center">
        <div>
          <div class="md:flex items-center mb-1">
            <div>
              <h1 class="font-black text-4xl mb-2 md:mb-0">Is PHP dead yet?</h1>
            </div>
            <div
              class="bg-green-500 dark:bg-green-800 inline-block px-4 py-1 md:ml-5 h-[3rem] min-w-[5.2rem]"
            >
              <div class="flex items-center justify-center h-full">
                <Loader v-if="loading" class="m-1" />
                <p v-else class="font-bold text-3xl">No!</p>
              </div>
            </div>
          </div>
          <div>
            <span class="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Last updated: November 26, 2020
            </span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
