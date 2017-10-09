<template>
    <div class="progressBar" :style="progressStyle">
        <div class="percentage">
            {{percentage}}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            progressStyle: {
                width: 0,
            },
            percentage: '0%',
        }
    },
    watch: {

    },
    props: {

    },
    mounted() {
        var vm = this
        vm.progressCalculator()
        $(window).scroll(function() {
            vm.progressCalculator()
        })
        $(window).resize(function() {
            vm.progressCalculator()
        })
    },
    created() {

    },
    computed: {

    },
    components: {

    },
    methods: {
        progressCalculator: function(target = 'body') {
            var vm = this
            if($(target).length >0){
                if ($(target).height() + $(target).offset().top <= window.innerHeight) {
                    vm.progressStyle.width = window.innerWidth + 'px'
                    vm.percentage = '100%'
                    return
                } else {
                    var offsetTop = ($(window).scrollTop()) - $(target).offset().top < 0 ? 0 : ($(window).scrollTop()) - $(target).offset().top
                    var bottomOffset = $(target).height() - window.innerHeight
                    var offsetPercentage = offsetTop / bottomOffset > 1 ? 1 : offsetTop / bottomOffset
                    vm.progressStyle.width = (offsetPercentage * window.innerWidth) + 'px'
                    vm.percentage = (parseInt(offsetPercentage * 100)) + '%'
                    return
                }
            }else{
                console.log(123)
            }
        }
    }
}
</script>


<style>
.progressBar {
    position: fixed;
    height: 3px;
    background-color: red;
    max-width: 100%;
    top: 0;
    left: 0;
}

.percentage {
    position: fixed;
    right: 5px;
    top: 10px;
    font-size: 14px;
}
</style>

