<template>
  <!-- 使用js改变数据后,dom没有立即更新 -->
  <div class="hello">
    <h3 id="h" ref="h">{{testMsg}}</h3>
    <button @click="changeTxt">点击</button>
  </div>
</template>
 
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      testMsg: "原始值"
    };
  },
  methods: {
    changeTxt() {
      this.testMsg = "修改后的文本值";
      this.$nextTick(() => {
        const domTxt = this.$refs.h.innerHTML;
        console.log(domTxt);
        if (domTxt === "原始值") {
          console.log("文本data被修改后dom内容没立即更新");
        } else {
          console.log("文本data被修改后dom内容被马上更新了");
        }
      });
    }
  }
};
</script>