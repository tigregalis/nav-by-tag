<template>
  <div class="bg-gray-100 h-full w-full">
    <PopupHeader>
      <h1 class="text-gray-700 text-xl font-semibold">
        <img class="inline-block h-8 mr-1" src="icons/logo.svg">
        <span class="font-light">NavBy</span><span class="font-bold">Tag</span>
      </h1>
      More content
    </PopupHeader>
    <PopupMain/>
    <footer>Some footer text goes here</footer>
  </div>
</template>

<script>
import PopupHeader from '@/components/PopupHeader.vue';
import PopupMain from '@/components/PopupMain.vue';

export default {
  name: 'App',
  components: { PopupHeader, PopupMain },
  data: () => ({}),
  mounted () {
    browser.runtime.sendMessage({
      message: 'Loaded <Popup></Popup>',
    })
  },
  computed: {
    // extensionName () {
    //   return browser.i18n.getMessage('extName')
    // }
  }
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