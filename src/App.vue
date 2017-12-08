<template>
  <div id="app">
    <page-loader :isloaded="loaded"></page-loader>
    <index></index>
  </div>
</template>

<script>
import index from "@/components/index";
import pageLoader from "@/components/pageLoader";
export default {
  name: "app",

  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    var vm = this;
    var timer = setInterval(function() {
      console.log(document.readyState);
      if (document.readyState === "complete") {
        clearInterval(timer);
        vm.loaded = true;
      }
    }, 0);
  },
  components: {
    index,
    pageLoader
  }
};
</script>

<style>
html {
  font-family: "Roboto", sans-serif !important;
}

#app {
  font-family: "Roboto", sans-serif;
}
body,
html {
  margin: 0;
  padding: 0;
}
</style>
