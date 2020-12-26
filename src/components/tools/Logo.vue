<template>
  <div class="logo">
    <router-link :to="{name:'mall'}">
      <!--<LogoSvg alt="logo" />-->
      <img src="//resource.vxiaocheng.com/lark_web/assets/logo.png" alt="logo">
      <h1 v-if="showTitle">{{ title }}</h1>
    </router-link>
  </div>
</template>

<script>
// import LogoSvg from '@/assets/logo.svg?inline'

export default {
  name: 'Logo',
  components: {
    // LogoSvg
  },
  props: {
    title: {
      type: String,
      default: '小诚互娱',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>
