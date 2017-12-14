<template>
    <v-layout row wrap>
        <v-flex xs12 md12>
            <v-card>
                <v-toolbar color="pink" dark>
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>Dynamic Load List</v-toolbar-title>
                </v-toolbar>
                <v-list>
                    <template v-for="(item, index) in testdata">
                        <v-list-tile avatar ripple :key="index">
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ item }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-list-tile-action-text>
                                    Good
                                </v-list-tile-action-text>
                                <v-icon color="yellow darken-2">star</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-divider :key="index"></v-divider>
                    </template>
                </v-list>
                <v-btn color="primary" left @click="testdataFn()">Load</v-btn>
                <!-- <v-btn color="warning" @click="closeSideBlock()"></v-btn> -->
            </v-card>
            <v-card class="mt25">
                <v-toolbar color="dark" dark>
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>取随机字符串</v-toolbar-title>
                </v-toolbar>
                <pre>
                    <code class="language-javascript">
                        function randomString(len) {
                            len = len || 32;
                            var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/ 　　
                            var maxPos = $chars.length;　　
                            var pwd = '';　　
                            for (let i = 0; i < len; i++) {　　　　
                                pwd += $chars.charAt(Math.floor(Math.random() * maxPos));　　
                            }　　
                            return pwd;
                        }
                    </code>
                </pre>
            </v-card>
            <v-card class="mt25">
                <v-toolbar color="dark" dark>
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>js递归遍历树形结构找到指定内容</v-toolbar-title>
                </v-toolbar>
                <pre>
                    <code class="language-javascript">
                    function getArray(data, name) {
                            for (var i in data) {
                                if (data[i].name == name) {
                                    console.log(data[i])
                                    break;
                                } else {
                                    getArray(data[i].children, name);
                                }
                            }
                        }
                    </code>
                </pre>
            </v-card>
            <v-card class="mt25">
                <v-toolbar color="dark" dark>
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>js递归遍历树形结构找到指定内容</v-toolbar-title>
                </v-toolbar>
                <pre>
                    <code class="language-javascript">
                        export default {
                            rightSideMove(options) {
                                var handler = options.handler;
                                var target = options.target;
                                var wrapper = options.wrapper;
                                var maxWidth = options.maxWidth || document.body.clientWidth;
                                var minWdith = options.minWdith || 300;
                                var eventWhileMove = options.eventWhileMove;
                                var eventWhileStop = options.eventWhileStop;
                                const _handler = $(handler);
                                const _target = $(target);
                                const _wrapper = $(wrapper);
                                
                                $(window).resize(function(event) {
                                    /* Act on the event */
                                    if (!_target.hasClass('rightSideBlockOpen')) {
                                        return 
                                    }else{
                                        _wrapper.width(document.body.clientWidth - _target.width())
                                    }
                                });
                                _handler.mousedown(function(ev) {
                                    var ev = ev || event; // 获取event对象，兼容性写法
                                    var mouseDownX = ev.clientX; // 鼠标按下时的位置
                                    var W = _target.width(); //获取目标宽度
                                    document.onmousemove = function(ev) {
                                        var ev = ev || event;
                                        var mouseMoveX = ev.clientX;
                                        _target.width((mouseDownX - mouseMoveX) + W)
                                        if (_target.width() >= maxWidth) {
                                            _target.width(maxWidth);
                                        }
                                        if (_target.width() <= minWdith) {
                                            _target.width(minWdith);
                                        }
                                        _wrapper.css({
                                            transition: 'width 0s'
                                        });
                                        _wrapper.width(document.body.clientWidth - _target.width());
                                        if (eventWhileMove != null) {
                                            eventWhileMove()
                                        }
                                    }
                                    document.onmouseup = function() {
                                        document.onmousemove = null; // 释放全局捕获
                                        _wrapper.css({
                                            transition: 'width 0.3s'
                                        });
                                        if (eventWhileStop != null) {
                                            eventWhileStop()
                                        }
                                    }
                                    return false;
                                })
                            }
                        }
                    </code>
                </pre>
            </v-card>
            <v-card class="mt25">
                <v-toolbar color="dark" dark>
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>函数防抖</v-toolbar-title>
                </v-toolbar>
                <pre>
                    <code class="language-javascript">
                        // debounce函数用来包裹我们的事件处理方法
                        function debounce(fn, delay){
                            // 持久化一个定时器
                            let timer = null
                            // 闭包函数可以访问timer
                            return function(){
                                // 通过 this 和 arguments 获得函数的作用域和参数
                                let context = this
                                let args = arguments
                                // 如果事件被触发，清除timer并重新开始计时
                                clearTimeout(timer)
                                timer = setTimeout(function() {
                                    fn.apply(context, args)
                                }, delay)
                            }
                        }
                        function foo(){
                            console.log('You are scrolling!')
                        }
                        document.addEventListener('scroll', debounce(foo, 50));
                    </code>
                </pre>
            </v-card>
            <v-card class="mt25">
                <v-toolbar color="dark" dark>
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>函数节流</v-toolbar-title>
                </v-toolbar>
                <pre>
                    <code class="language-javascript">
                    function throttle(fn, threshold){
                            var last
                            var timer
                            threshold || (threshold = 250)
                            return function(){
                                let context = this
                                let args = arguments
                                var now = +new Date()
                                if(last&&now < last+threshold){
                                    clearTimeout(timer)
                                    timer = setTimeout(function(){
                                        last = now
                                        fn.apply(context, args)
                                    },threshold)
                                }else {
                                    last = now
                                    fn.apply(context, args)
                                }
                            }
                        }
                    </code>
                </pre>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  data() {
    return {
      testdata: [],
      dynamicList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    };
  },
  components: {},
  beforeDestroy() {
    var vm = this;
  },
  filters: {},
  computed: {},
  mounted() {
    var vm = this;
  },
  methods: {
    testdataFn: function() {
      const vm = this;
      var i = 0;
      var arr = [];
      vm.testdata = [];
      var timer = setInterval(function() {
        vm.testdata.push(vm.dynamicList[i]);
        i++;
        if (i === vm.dynamicList.length) {
          clearInterval(timer);
          i = 0;
        }
      }, 300);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
}
</style>
