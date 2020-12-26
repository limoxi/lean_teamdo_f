<template>
  <div class="clearfix">
    <template>
      <a-upload
        listType="picture-card"
        :fileList="fileList"
        :showUploadList="{ showPreviewIcon:true, showRemoveIcon: !isShow }"
        @preview="handlePreview"
        @change="handleChange"
      >
        <div v-if="!isShow && fileList.length < 3">
          <a-icon type="plus" />
          <div class="ant-upload-text">Upload</div>
        </div>
      </a-upload>
    </template>
    <!--<template v-if="type==='video'">
      <span>
        <div class="ant-upload-list ant-upload-list-picture-card">
          <div v-for="(file, index) in fileList" :key="index">{{ file }}</div>
        </div>
        <div v-if="fileList.length < max">
          <div class="ant-upload ant-upload-select ant-upload-select-picture-card" @click="onClickSelect">
            <span role="button" class="ant-upload ant-upload-btn">
              <input ref="fileInput" type="file" accept="" style="display: none;" @change="onChangeFile" />
              <div>
                <a-icon type="plus" />
                <div class="ant-upload-text">上传</div>
              </div>
            </span>
          </div>
        </div>
      </span>
    </template>-->
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img
        v-if="type === 'image'"
        alt="example"
        style="width: 100%"
        :src="previewImage"
      />
      <video
        v-if="type === 'video'"
        autoPlay="autoplay"
        loop="loop"
        controls="controls"
        style="width: 100%"
        :src="previewImage"
      />
    </a-modal>
  </div>
</template>
<script>
export default {
  // todo 暂时只写图片的, 等之后有视频或文件
  name: 'Media',
  props: {
    fileList: {
      type: Array,
      required: true
    },
    isShow: {
      type: Boolean
    },
    max: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: 'image'
    }
  },

  data () {
    return {
      previewVisible: false,
      previewImage: ''
    }
  },
  methods: {
    handleCancel () {
      this.previewVisible = false
    },
    handlePreview (file) {
      this.previewImage = file.pUrl || file.url || file.thumbUrl
      this.previewVisible = true
    },
    handleChange ({ fileList }) {
      console.log(fileList, 'fileList')
      this.fileList = fileList
    },

    onClickSelect () {
      this.$refs.fileInput.click()
    }

    // onChangeFile (e) {
    //   const files = e.target.files
    // }
  }
}
</script>
<style>
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
