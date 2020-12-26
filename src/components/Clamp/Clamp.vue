<template>
  <div class="clamp-content" ref="content">
    <p class="p-content" ref="clamp" v-html="value">
    </p>
    <a class="toggle"></a>
  </div>
</template>

<script>
import Dotdotdot from 'dotdotdot-js'

export default {
  name: 'Clamp',
  props: {
    prefixCls: {
      type: String,
      default: ''
    },
    // eslint-disable-next-line
    value: {
      type: String
    },
    height: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
    }
  },
  watch: {
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      var clamp = this.$refs.clamp
      var content = this.$refs.content
      var dot = new Dotdotdot(clamp, {
        callback: function (isTruncated) {
          if (!isTruncated) {
            var tE = this.parentNode.getElementsByClassName('toggle')
            tE[0].classList.remove('toggle')
          }
        },
        height: this.height,
        keep: '.toggle',
        truncate: 'letter'
      })
      var api = dot.API
      content.addEventListener('click', (evnt) => {
        if (evnt.target.closest('.toggle')) {
          evnt.preventDefault()

          //	When truncated, restore
          if (clamp.matches('.ddd-truncated')) {
            api.restore()
            content.classList.add('full-story')
          } else {
            //	Not truncated, truncate
            content.classList.remove('full-story')
            api.truncate()
            api.watch()
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  p{
    margin-bottom: 0;
  }
  .p-content{
  }
  .clamp-content {
    position: relative;
    /*max-height: 60px;*/
    /* toggle full story */
    .full-story {
      max-height: initial;
    }
    .toggle{
      /*position: absolute;*/
      /*right: 0;*/
      /*bottom: 0;*/
    }
    .toggle:before {
      content: '更多';
    }
    .oldbrowser {
      display: none;
    }
    @media screen and (min-width:0\0) {
      .oldbrowser {
        background: red;
        color: white;
        font-weight: bold;
        font-size: 20px;
        line-height: 1.5;
        display: block;
        padding: 50px;
        margin: 50px -50px;
      }
    }
  }
  .full-story .toggle:before {
    content: '收起';
  }

</style>
