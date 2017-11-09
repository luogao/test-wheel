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
                <code>
                <pre>
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
                </pre>
                </code>

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
        }
    },
    components: {

    },
    beforeDestroy() {
        var vm = this;
    },
    filters: {
    },
    computed: {

    },
    mounted() {
        var vm = this
    },
    methods: {
        testdataFn: function() {
            const vm = this
            var i = 0
            var arr = []
            vm.testdata = []
            var timer = setInterval(function() {
                vm.testdata.push(vm.dynamicList[i])
                i++
                if (i === vm.dynamicList.length) {
                    clearInterval(timer)
                    i = 0
                }
            }, 300)
        }

    },
}
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
