<template>
<div>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">新建方向图</h1>
        <div class="block">
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">方向图名称</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input v-model="name" class="input" type="text" placeholder="方向图名称">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">方向图文件</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input @change="onFileChange" type="file">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">详细介绍</label>
            </div>
            <div class="control">
              <textarea v-model="description" class="textarea"></textarea>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label"></label>
            </div>
            <div class="control">
              <button @click="create" class="button is-primary">提交</button>
              <button class="button is-link">检查</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Message from 'vue-bulma-message'
import Vue from 'vue'
import * as config from '../../../config/api'

const BASE_API_URL = config['base_url'] + 'api/'
const MessageComponent = Vue.extend(Message)
const openMessage = (propsData = {
  title: '',
  message: '',
  type: '',
  direction: '',
  duration: 1500,
  container: '.messages'
}) => {
  return new MessageComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  components: {},

  computed: mapGetters({
    user: 'user'
  }),

  mounted () {
    if (!this.user.email) {
      this.$router.push('/login')
    }
  },

  methods: {
    create () {
      if (!this.name) {
        this.failMessage('请输入方向图名称')
        return
      }
      if (!this.file) {
        this.failMessage('请指定一个方向图文件')
        return
      }
      if (!this.description) {
        this.failMessage('请输入方向图简介')
        return
      }
      if (!this.file.name || !this.file.name.endsWith('mat')) {
        this.failMessage('方向图文件有误!')
        return
      }
      let formData = new window.FormData()
      formData.append('name', this.name)
      formData.append('direction', this.file)
      formData.append('description', this.description)
      Vue.http
        .post(`${BASE_API_URL}directions/create`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
          xhr: { withCredentials: true }
        })
        .then(function (response) {
          if (response.body.code !== 0) {
            // server error
            this.failMessage(response.body.message)
            return
          }
          this.successMessage('成功')
        })
        .catch(function (error) {
          // network error
          this.failMessage('error ' + error)
        })
    },

    onFileChange (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.file = files[0]
    },

    successMessage (message) {
      openMessage({
        title: '提示',
        message,
        type: 'success',
        showCloseButton: true
      })
    },

    failMessage (message) {
      openMessage({
        title: '提示',
        message,
        type: 'warning',
        showCloseButton: true
      })
    }
  },

  data () {
    return {
      name: '',
      description: '',
      file: null
    }
  }
}
</script>

<style scoped>
.button {
  margin: 5px 0 0;
}

.control .button {
  margin: inherit;
}
</style>
