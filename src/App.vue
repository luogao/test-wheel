<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import index from '@/components/index'
export default {
  name: 'app',
  mounted() {
  },
  components:{
    index
  }
}
</script>

<style>
html {
    font-family: 'Roboto', sans-serif !important;
}

#app {
    font-family: 'Roboto', sans-serif;
}
body,
html {
  margin: 0;
  padding: 0;
}
</style>
