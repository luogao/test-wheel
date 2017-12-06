<template>
    <div class="sideBlockContainer" :style="containerPosition" v-if="isOpen"></div>
</template>
<script>
export default {
    data() {
        return {
            isOpen: false
        }
    },
    watch: {
    },
    props: {
        rightSide: {
            default: true,
            type: Boolean
        },
        open:{
            default: false,
            type:Boolean
        }
    },
    mounted() {
        var vm = this
        if(vm.open){
            vm.openSideBlock()
        }
    },
    created() {

    },
    watch: {
        'open':{
            deep:true,
            handler(val){
                if(val && !this.isOpen){
                    this.openSideBlock()
                }else{
                    this.closeSideBlock()
                }
            }
        }
    },
    methods: {
        openSideBlock() {
            var vm = this;
            console.log('open')
            if (!vm.isOpen) {
                vm.isOpen = true;
                setTimeout(function() {
                    $('.sideBlockContainer').addClass('open')
                }, 300);
            }
        },
        closeSideBlock() {
            var vm = this;
            console.log('close')
            if (vm.isOpen) {
                $('.sideBlockContainer').removeClass('open').addClass('close')
                setTimeout(function() {
                    vm.isOpen = false;
                }, 300);
            }
        }
    },
    computed: {
        containerPosition() {
            var position = new Object;
            if (this.rightSide) {
                position = { right: '0px' }
            } else {
                position = { left: '0px' }
            }
            return position
        }
    },
    components: {

    }
}
</script>


<style scoped lang="scss">
.sideBlockContainer {
    width: 30vw;
    background: #fff;
    height: 100vh;
    position: fixed;
    top: 0;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, .3);
    transform: translateX(100%);
    animation: rightBlockOpen 0.3s ease-in;
}

.sideBlockContainer.open {
    transform: translateX(0);
}

.sideBlockContainer.close {
    animation: rightBlockClose 0.3s ease-out;
}

@keyframes rightBlockOpen {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes rightBlockClose {
    from {
        transform: translateX(0%);
        opacity: 1;
    }
    to {
        opacity: 0;
        transform: translateX(100%);
    }
}
</style>

