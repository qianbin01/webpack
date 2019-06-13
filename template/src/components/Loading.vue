<template>
  <div class="loading_container" v-show="isShow">
    <div class="loading_mask"></div>
    <figure class="loading_img">
      <img class="rotation_img" :src="loadingImg">
      <div>{{text}}</div>
    </figure>
  </div>
</template>

<script>
import loadingImg from '@img/loading/loading.png'
export default {
  name: 'mmLoading',
  components: {},
  props: {},
  data () {
    return {
      loadingImg,
      text: '正在加载中,请稍等！',
      isShow: false
    }
  },
  computed: {
  },
  watch: {},
  methods: {
    show (text) {
      this.text = text
      this.isShow = true
    },
    hide () {
      this.isShow = false
    }
  },
  mounted () {
  },
  beforeDestroy () { },
  activated () { }
}
</script>
<style lang='scss' scoped>
.loading_container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .loading_mask {
    @include allCover(#fff, 3000, 0.7);
  }

  .loading_img {
    z-index: 3001;
    color: $themeColor;
    @include locInCenter;
    font-size: 18px;
    img {
      width: 60px;
      margin-bottom: 10px;
      transform: rotate();
    }
  }
  @keyframes rotation360 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .rotation_img {
    transform: rotate(360deg);
    animation: rotation360 3s linear infinite;
    -moz-animation: rotation360 3s linear infinite;
    -webkit-animation: rotation360 3s linear infinite;
    -o-animation: rotation360 3s linear infinite;
  }
}
</style>
