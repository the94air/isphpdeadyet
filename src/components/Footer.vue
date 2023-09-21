<script setup>
import { ref } from "vue";

const links = [
  {
    label: "Preface - PHP Manual",
    url: "https://www.php.net/manual/en/preface.php",
  },
  {
    label: "Usage statistics of PHP for websites - W3Techs",
    url: "https://w3techs.com/technologies/details/pl-php",
  },
  {
    label: "PHP v8.0 major updates - PHP announcement",
    url: "https://www.php.net/releases/8.0/en.php",
  },
];

const toggle = ref(false);
</script>

<template>
  <footer class="py-12">
    <div class="container mx-auto px-2">
      <div class="max-w-lg mx-auto">
        <div class="mb-4">
          <button
            class="transition-colors ease-in-out duration-300 uppercase text-gray-500 dark:text-gray-400 font-bold"
            :class="toggle ? '!text-black dark:!text-white' : ''"
            @click="toggle = !toggle"
          >
            Resources
          </button>
        </div>
        <Transition>
          <div v-if="toggle">
            <ul class="list-disc list-inside">
              <li v-for="(link, index) in links" :key="index">
                <a
                  :href="link.url"
                  class="underline decoration-dotted"
                  target="_blank"
                  rel="nofollow"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </Transition>
        <div class="mt-12">
          <p class="italic text-sm font-medium">
            This site is not powered by PHP :)
          </p>
          <p class="italic text-[0.6rem] font-medium">
            Feel free to redirect people here if they trash talk about PHP
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 300ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
