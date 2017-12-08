<template>
    <div id="grid-container">
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  watch: {},
  props: {},
  mounted() {
    var vm = this;
    var containerWidth,itemWidth,itemHeight,space,lineLength;
    var target = $('.grid-item')
    containerWidth = $('#grid-container').width()
    itemWidth = $('.grid-item').width()
    itemHeight = $('.grid-item').height()
    lineLength = Math.floor(containerWidth / itemWidth)
    space = (containerWidth - (itemWidth*lineLength)) / (lineLength*2)

    target.each(function(index,el){
        console.log(el)
        if((index+1) <= lineLength){
            $(el).css({'transform':`translate(${(index*itemWidth)+(space*((2*(index+1))-1))}px,0px)`})
        }
    })

    console.log(containerWidth)
    console.log(itemWidth)
    console.log(itemHeight)
    console.log(lineLength)
    console.log(space)
},
  created() {},
  computed: {},
  components: {},
  methods: {}
};
</script>
<style>
#grid-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.grid-item {
  background-color: #9966ff;
  width: 300px;
  height: 400px;
  position: absolute;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}
</style>

