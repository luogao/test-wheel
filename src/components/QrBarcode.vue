<template>
    <div>
        <qrcode :text="code"></qrcode>
        <barcode :value="code" height="50" width="1"></barcode>
    </div>
</template>
<script>
import barcode from 'vue-barcode'
import qrcode from 'vue-qrcode-component'
export default {
    data() {
        return {
            code:'fsafasdf ',
            nihao:'111'
        }
    },
    watch: {

    },
    props: {
        
    },
    mounted() {
        var vm = this

    },
    created() {

    },
    computed: {

    },
    components: {
        barcode,
        qrcode
    },
    methods: {

    }
}
</script>
<style>

</style>

