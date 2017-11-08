<template>
  <div class="hello">
    <ul>
      <li v-for="(item,index) in test" :key="index">
        <count-up ref="countUp1" @getDataFromChild="getData" :send-sync='item.needSync' :default-val="item.defaultVal" :auto-start="item.auto"></count-up>
        <button v-if="!started" @click="start(index)">start</button>
        <button v-if="started" @click="stop(index)">stop</button>
        <button @click="sendSyncFn(item)">{{item.needSync}}</button>
      </li>
    </ul>
    <ul>
      <li class="dynamic" :data-dylist="index" v-for="(itme,index) in testdata" :key="index">
        {{itme}}
      </li>
    </ul>
    <qr-barcode></qr-barcode>
    <div class="testHover">
      {{direction | toTextDirection}}{{inOrOut}}
    </div>
    </ul>
    <progressbar></progressbar>
    <photo-file-uploader ref="photoMedia" @upload="upload" :maxWidth=400></photo-file-uploader>
    <button @click="stopMedia">停止</button>
    <button @click="sideOpenFn()">open</button>
    <button @click="sideCloseFn()">close</button>
    <side-block ref="sideBlock"></side-block>
  </div>
</template>

<script>
import countUp from '@/components/countUp';
import progressbar from '@/components/progressbar';
import qrBarcode from '@/components/QrBarcode';
import photoFileUploader from '@/components/photoFileUploader';
import sideBlock from '@/components/sideBlock';
export default {
  name: 'hello',
  data() {
    return {
      started: false,
      test: [{
        needSync: true,
        defaultVal: 1505178018000,
        auto: false,
      }],
      direction: null,
      inOrOut: null,
      dynamicList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      testdata: [],
      sidetoggle: false
    }
  },
  components: {
    countUp,
    qrBarcode,
    progressbar,
    photoFileUploader,
    sideBlock
  },
  filters: {
    toTextDirection: function(val) {
      switch (val) {
        case 0:
          return '上';
          break;
        case 1:
          return '右';
          break;
        case 2:
          return '下';
          break;
        case 3:
          return '左';
          break;
      }
    }
  },
  computed: {

  },
  mounted() {
    var vm = this
    $('.testHover').mouseover(function(e) {
      var w = $(this).width()
      var h = $(this).height()
      var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
      var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
      var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
      vm.direction = direction
      vm.inOrOut = 'In'
    })
    var vm = this
    $('.testHover').mouseout(function(e) {
      var w = $(this).width()
      var h = $(this).height()
      var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
      var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
      var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
      vm.direction = direction
      vm.inOrOut = 'Out'
    })
    // vm.dynamicListFn(vm.dynamicList)
    vm.testdataFn()
  },
  methods: {
    sideOpenFn() {
      this.$refs.sideBlock.openSideBlock()
    },
    sideCloseFn() {
      this.$refs.sideBlock.closeSideBlock()
    },
    stopMedia: function() {
      this.$refs.photoMedia.stopMediaFn()
    },
    upload: function(data) {
      console.log(data)
    },
    getData: function(data) {
      console.log(data)
    },
    start: function(index) {
      this.$refs.countUp1[index].$emit('startCount');
      this.started = !this.started
    },
    stop: function(index) {
      this.$refs.countUp1[index].$emit('stopCount');
      this.started = !this.started
    },
    sendSyncFn: function(item) {
      item.needSync = !item.needSync
    },
    // dynamicListFn: function(brr) {
    //   const vm = this
    //   const arr = []
    //   const output = (i) => new Promise((resolve) => {
    //     setTimeout(() => {
    //       arr.push(i)
    //       resolve(arr);
    //     }, 500 * i);
    //   });
    //   // 生成全部的异步操作
    //   for (var i = 0; i < brr.length; i++) {
    //     output(brr[i]).then((data) => {
    //       vm.testdata = data
    //     })
    //   }
    // }
    testdataFn: function() {
      const vm = this
      var i = 0
      var arr = []
      var timer = setInterval(function() {
        vm.testdata.push(vm.dynamicList[i])
        i++
        if (i === vm.dynamicList.length) {
          clearInterval(timer)
          i = 0
        }
      }, 300)

    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes flash {
  0% {
    opacity: 0.0;
    height: 0;
  }
  50% {
    opacity: 0.5;
    height: 10px;
  }
  25%,
  75% {
    opacity: 1;
    height: auto;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    height: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    height: 30px;
    transform: none;
  }
}

li.dynamic {
  animation: fadeInDown 0.3s;
  background-color: #ccc;
  transition: all 0.3s;
  overflow: hidden;
  display: block !important;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin: 10px 0 !important;
  opacity: 1;
}

.content {
  background: #797979;
  margin: 20px 0;
}

.main {
  float: left;
  width: 100%;
}

.sub {
  float: left;
  width: 190px;
  margin-left: -100%;
  position: relative;
  left: -190px;
}

.extra {
  float: left;
  width: 230px;
  margin-left: -230px;
  position: relative;
  right: -230px;
}

#bd {
  padding: 0 230px 0 190px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.testHover {
  width: 100px;
  height: 100px;
  background-color: #14be8c;
  margin: 0 auto;
  color: #fff;
  font-size: 24px;
  line-height: 100px;
  text-align: center;
}
</style>
