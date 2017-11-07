<template>
    <div class="sideBlockContainer" :style="containerPosition" :class="open?'open':'close'">
        123
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    watch: {

    },
    props: {
        rightSide: {
            default: true,
            type: Boolean
        },
        sideOpen:{
            default: false,
            type:Boolean
        }
    },
    mounted() {
        var vm = this

    },
    created() {

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
        },
        open(){
            return this.sideOpen
        }
    },
    components: {

    },
    methods: {

    }
}
</script>


<style scoped>
.sideBlockContainer {
    width: 30vw;
    background: #fff;
    height: 100vh;
    position: fixed;
    top: 0;
    box-shadow: 3px 0px 19px rgba(0, 0, 0, .3);
    transform: translateX(100%);
    transition: transform 0.3s;
}
.sideBlockContainer.open{
    transform: translateX(0%);
    transition: transform 0.3s;
}
</style>

