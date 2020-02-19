<template>
  <div class="bg-gray-100 h-full w-full">
    <PopupHeader>
      <h1 class="text-gray-700 text-xl font-semibold">
        <img class="inline-block h-8 mr-1" src="icons/logo.svg">
        <span class="font-light">NavBy</span><span class="font-bold">Tag</span>
      </h1>
    </PopupHeader>
    <PopupMain/>
    <button
      class="m-2 py-1 px-3 bg-gray-500 rounded-full"
      @click.prevent="openBrowserActionPopup"
    >
      Open a browser action (Vue event handler)
    </button>
    <button
      ref="browserActionButtonEventListener"
      class="m-2 py-1 px-3 bg-gray-500 rounded-full"
    >
      Open a browser action (native DOM event listener on DOM element)
    </button>
    <button
      ref="browserActionButtonProperty"
      class="m-2 py-1 px-3 bg-gray-500 rounded-full"
    >
      Open a browser action (onclick property on DOM element)
    </button>
    <footer>Some footer text goes here</footer>
  </div>
</template>

<script>
import PopupHeader from '@/components/PopupHeader.vue';
import PopupMain from '@/components/PopupMain.vue';

export default {
  name: 'App',
  components: { PopupHeader, PopupMain },
  methods: {
    openBrowserActionPopup() {
      console.log('trying to open browser action popup');
      browser.browserAction.openPopup(() => {
        console.log('test');
      });
    }
  },
  mounted() {
    this.$refs.browserActionButtonEventListener.addEventListener('click', this.openBrowserActionPopup);
    this.$refs.browserActionButtonProperty.onclick = this.openBrowserActionPopup;
    console.log(this.$refs.browserActionButtonEventListener);
  },
}
</script>

<style>
@import '../assets/styles/tailwind.postcss';
html, body {
  @apply bg-gray-100;
  /* width: 400px; */
  /* height: 400px; */
}
</style>