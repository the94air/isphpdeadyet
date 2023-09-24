<script setup lang="ts">
import { ref } from "vue";

const loading = ref(true);
const isYes = ref(false);
const showYesCount = ref(0)

const rand = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const maybeShowRandomYes = async () => {
  const doTheFunnyThing = async () => {
    isYes.value = true;
    await sleep(200)
    isYes.value = false;
    showYesCount.value++
  }
  const shouldDoIt = rand(1, 4)
  if(shouldDoIt === 3) {
    await doTheFunnyThing()
  }
};

const fetchStatus = () => {
  loading.value = true;
  setTimeout(async () => {
    loading.value = false;
    if(showYesCount.value < 2) await maybeShowRandomYes()
  }, rand(1, 4) * 400);
};

fetchStatus();
console.log("Nice try ;)");
</script>

<template>
  <header class="pt-12 md:pt-28 lg:pt-16 2xl:pt-20">
    <div class="container mx-auto px-2">
      <div class="flex items-center justify-center">
        <div>
          <div class="md:flex items-center mb-1">
            <div>
              <h1 class="font-bold text-4xl mb-2 md:mb-0">Is PHP dead yet?</h1>
            </div>
            <button
              @click="fetchStatus"
              :disabled="loading"
              class="bg-green-500 hover:disabled:bg-green-500 hover:bg-green-400 dark:bg-green-800 dark:hover:disabled:bg-green-800 dark:hover:bg-green-700 transition-colors duration-75 ease-in-out inline-block px-4 py-1 h-[3rem] min-w-[5.8rem] md:ml-5"
            >
              <div class="flex items-center justify-center h-full mx-auto">
                <Loader v-if="loading" class="m-1" />
                <p v-else-if="isYes" class="font-semibold text-3xl">Yes!</p>
                <p v-else class="font-semibold text-3xl">No!</p>
              </div>
            </button>
          </div>
          <div>
            <span
              class="text-sm text-gray-600 dark:text-gray-400 font-medium"
            >
              Last updated: September 24, 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
