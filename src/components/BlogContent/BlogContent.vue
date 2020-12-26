<template>
  <div class="blog" v-if="blog">
    <a class="title" :href="titleHref" target="_blank">{{ blog.title }}</a>
    <div class="topic-title" v-if="blog.topic">
      {{ blog.corp ? blog.corp.name : '' }} <a-tag>{{ blog.topic.title }}</a-tag>
    </div>
    <div class="description">
      <clamp
        :value="blog.content"
        :height="60"
      />
    </div>
    <media
      type="image"
      :isShow="true"
      :fileList="blog.images"
    />
    <div class="extra">
      <a-avatar :src="blog.author.avatar" size="small" />
      <a :href="!blog.author.is_op ? ownerHref: 'javascript:void(0)'" target="_blank">{{ blog.author.name }} </a>
      <a-tag v-if="blog.author.is_op" color="red">运营用户</a-tag>
      <span> 发布于 </span>
      <em>{{ blog.created_at | moment }}</em>
    </div>
  </div>
</template>

<script>
import Media from '@/components/Media'
import { Ellipsis } from '@/components'
import Clamp from '@/components/Clamp'
export default {
  name: 'BlogContent',
  props: {
    blog: {
      type: Object,
      default: null
    },
    titleHref: {
      type: String,
      required: true
    },
    ownerHref: {
      type: String,
      required: true
    }
  },
  data () {
    return {
    }
  },
  components: {
    Media,
    Ellipsis,
    Clamp
  },
  mounted () {
    this.$nextTick(() => {
      // const height = this.$refs.contentMore.offsetHeight;
      // if (height >= 66) {
      //   var id = this.$refs.contentMore.getAttribute('id')
      //   var actionRef = `moreAction${id}`
      //   this.$refs[actionRef].style.display = 'block'
      //   console.log(height, 'mounted')
      // }
    })
  },

  created () {

  },

  methods: {
  }
}
</script>

<style lang="less" scoped>
@import '../index.less';

.blog {
  .topic-title{
    margin-top: 10px;
  }
  .description {
    margin: 10px 0 10px 0;
    /*overflow: hidden;*/
  }
  .extra {
    margin-top: 16px;
    color: @text-color-secondary;
    line-height: 22px;

    & /deep/ .ant-avatar {
      position: relative;
      top: 1px;
      width: 20px;
      height: 20px;
      margin-right: 8px;
      vertical-align: top;
    }

    & > em {
      margin-left: 16px;
      color: @disabled-color;
      font-style: normal;
    }
  }
}

@media screen and (max-width: @screen-xs) {
  .blog {
    .extra {
      & > em {
        display: block;
        margin-top: 8px;
        margin-left: 0;
      }
    }
  }
}
</style>
