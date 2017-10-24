<template>
    <div :style="'width:'+videoWidth +'px; overflow:hidden'">
        <div class="rightTakePhotoBlock" :class="instrumentsetPhotoData?'hasPhoto':''" :style="'width:'+videoWidth +'px;height:'+videoHeight+'px;'">
            <div v-if="!isStartTakePhoto" class="tipTxt">
                请拍摄完成配包的器械包图片并上传
                <button class="btn btn-outline blue" @click="startSnap">开始拍照</button>
            </div>
            <video v-show="isStartTakePhoto" :width="videoWidth" :height="videoHeight" src="" id="instrumentsetVideo"></video>
            <canvas v-show="isStartTakePhoto" :width="videoWidth" :height="videoHeight" id="instrumentsetCanvas"></canvas>
            <img v-show="isStartTakePhoto" :src="instrumentsetPhotoData" alt="">
        </div>
        <div class="clearfix">

        </div>
        <div class="pull-right mt10" v-if="isStartTakePhoto">
            <div class="btn-group">
                <button class="btn btn-sm ml15 green" v-if="!instrumentsetPhotoData" id="takeInstrumentsetPhoto" @click="snap()">
                    <i class="fa fa-camera mr5"></i>
                    拍照
                </button>
                <button class="btn btn-sm ml15 red" v-if="instrumentsetPhotoData" id="retakeInstrumentsetPhoto" @click="resnap()">
                    <i class="fa fa-remove mr5"></i>
                    重拍
                </button>
                <button class="btn btn-sm ml15 blue" v-if="instrumentsetPhotoData" @click="uploadIntstrumentsetImg()">
                    <i class="fa fa-upload mr5"></i>
                    上传图片
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            videoWidth: null,
            videoHeight: null,
            instrumentsetPhotoData: null,
            isStartTakePhoto: null,
            mediaStreamTrack: null
        }
    },
    props: {
        maxWidth: {
            type: Number,
            default: 600
        }
    },
    mounted() {
        let vm = this
        vm.videoWidth = $('.rightTakePhotoBlock').parents('.col-md-6').width() < vm.maxWidth ? $('.rightTakePhotoBlock').parents('.col-md-6').width() : vm.maxWidth
        vm.videoHeight = vm.videoWidth * 0.75
        $(window).resize(function(event) {
            vm.videoWidth = $('.rightTakePhotoBlock').parents('.col-md-6').width() < vm.maxWidth ? $('.rightTakePhotoBlock').parents('.col-md-6').width() : vm.maxWidth
            vm.videoHeight = vm.videoWidth * 0.75
        });
    },
    beforeMount() {
    },
    computed: {

    },
    components: {

    },
    filters: {

    },
    methods: {
        stopMediaFn: function() {
            var vm = this
            if (vm.mediaStreamTrack) {
                vm.mediaStreamTrack.stop()
                vm.instrumentsetPhotoData = null
                vm.isStartTakePhoto = false
                vm.mediaStreamTrack = null
            }
        },
        snap: function() {
            var vm = this;
            const canvas = document.getElementById('instrumentsetCanvas'),
                video = document.getElementById('instrumentsetVideo'),
                cnavasWidth = document.getElementById('instrumentsetCanvas').width,
                cnavasHeigth = document.getElementById('instrumentsetCanvas').height;
            vm.tempVideoSrc = video
            canvas.getContext('2d').drawImage(video, 0, 0, cnavasWidth, cnavasHeigth);
            vm.instrumentsetPhotoData = canvas.toDataURL("image/png");
        },
        resnap: function() {
            var vm = this;
            vm.instrumentsetPhotoData = null;
        },
        uploadIntstrumentsetImg: function() {
            var vm = this
            vm.$emit('upload', vm.instrumentsetPhotoData);
        },
        startSnap: function() {
            var vm = this;
            var video = document.getElementById('instrumentsetVideo'),
                canvas = document.getElementById('instrumentsetCanvas'),
                vendorUrl = window.URL || window.webkitURL;
            //媒体对象
            navigator.getMedia = navigator.getUserMedia ||
                navagator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia;
            navigator.getMedia({
                video: true, //使用摄像头对象
                audio: false //不适用音频
            }, function(strem) {
                video.src = vendorUrl.createObjectURL(strem);
                vm.mediaStreamTrack = strem.getTracks()[0]
                video.play();
                vm.isStartTakePhoto = true
            }, function(error) {
                //error.code
                console.log(error);
            });
        },
    },

}
</script>
<style>
.rightTakePhotoBlock {
    position: relative;
}

.rightTakePhotoBlock img {
    position: absolute;
    left: 0;
    top: 0;
    display: none;
    width: 100%;
    height: auto;
}

.rightTakePhotoBlock #instrumentsetVideo {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
}

.rightTakePhotoBlock #instrumentsetCanvas {
    position: absolute;
    left: 0;
    top: 0;
    display: none;
}

.rightTakePhotoBlock.hasPhoto {
    animation: takeAphoto 0.3s;
}

.rightTakePhotoBlock.hasPhoto #instrumentsetVideo {
    display: none;
}

.rightTakePhotoBlock.hasPhoto #instrumentsetCanvas {
    display: none;
}

.rightTakePhotoBlock.hasPhoto img {
    display: block;
}

.rightTakePhotoBlock .tipTxt {
    position: absolute;
    text-align: center;
    width: 100%;
    font-size: 24px;
    font-weight: 300;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    background: rgba(101, 161, 227, 0.34);
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 99;
    height: 100%;
    justify-content: center;
}

.rightTakePhotoBlock .tipTxt button {
    width: 100px;
    margin-top: 20px;
}

@keyframes takeAphoto {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
        transform: none;
    }
}
</style>
