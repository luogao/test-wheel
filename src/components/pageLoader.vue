<template>
  <div id="page-loader" :class="isloaded?'loaded':''" v-if="show">
        123
  </div>
</template>
<script>
export default {
  data() {
    return {
        show:true
    };
  },
  watch: {
    isloaded: {
      deep: true,
      handler(val) {
        var vm = this;
        if(val){
            setTimeout(() => {
                vm.show = false
            }, 1000);
        }
      }
    }
  },
  props: {
    isloaded: {
      default: false,
      type: Boolean
    }
  },
  mounted() {
    var vm = this;
  },
  created() {},
  computed: {},
  methods: {}
};
</script>
<style>
#page-loader {
  height: 100vh;
  width: 100vw;
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
}
#page-loader.loaded {
  animation-name: lightSpeedOut;
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes zoomOutUp {
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  to {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    transform-origin: center bottom;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes lightSpeedOut {
  from {
    opacity: 1;
  }

  to {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}
</style>
