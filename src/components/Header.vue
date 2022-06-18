<script setup>
import { ref } from "vue";
import Loader from "./Loader.vue";

const loading = ref(true);

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const fetchStatus = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, rand(1, 4) * 1000);
};

fetchStatus();
console.log("Nice try ;)");
</script>

<template>
  <header class="pt-28 2xl:pt-48">
    <div class="container mx-auto px-2">
      <div class="flex items-center justify-center">
        <div>
          <div class="md:flex items-center mb-1">
            <div>
              <h1 class="font-black text-4xl mb-2 md:mb-0">Is PHP dead yet?</h1>
            </div>
            <button
              @click="fetchStatus"
              :disabled="loading"
              class="bg-green-500 hover:disabled:bg-green-500 hover:bg-green-400 dark:bg-green-800 dark:hover:disabled:bg-green-800 dark:hover:bg-green-700 transition-colors duration-75 ease-in-out inline-block px-4 py-1 h-[3rem] min-w-[5.2rem] md:ml-5"
            >
              <div class="flex items-center justify-center h-full mx-auto">
                <Loader v-if="loading" class="m-1" />
                <p v-else class="font-bold text-3xl">No!</p>
              </div>
            </button>
          </div>
          <div>
            <span
              class="italic text-sm text-gray-600 dark:text-gray-400 font-medium"
            >
              Last updated: June 18, 2022
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
