<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{msg}} <span>{{mk}}</span></h1>
    <h2>This is a vue h5 project template</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '',
      mk: ''
    }
  },
  methods: {
    async get1() {
      let {
        data: res
      } = await this.$get(
        'http://rap2.taobao.org:38080/app/mock/262186//hello-world',
        { tag: true }
      )
      let { code, data, success, msg } = res

      if (success) {
        // success
        this.msg = data
      } else {
        // do something ...
      }
    },

    // When I need to make an HTTP request for data, I typically use the following approach
    // Copy the code snippet directly and modify the part east
    // 当我需要获取数据时，我通常都是封装好再调用，以下面这个代码块直接复制过去会写得更快
    async get2() {
      let { data: res } = await this.$api.hl.getHelloWorld({ tag: true })
      let { code, data, success, msg } = res

      if (success) {
        // success
        this.msg = data
      } else {
        // do something ...
      }
    },

    async mk4396() {
      let { data: res } = await this.$api.hl.mk4396({ tag: true })
      let { code, data, success, msg } = res

      if (success) {
        // success
        this.mk = data
      } else {
        // do something ...
      }
    }
  },
  async created() {
    await this.get1()

    await this.get2()

    await this.mk4396()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  font-size: 36px;
  font-weight: normal;
  padding-bottom: 20px;
  span {
    color: #42b983;
  }
}
h2 {
  font-size: 30px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
