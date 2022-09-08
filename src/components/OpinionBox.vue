<template>
  <div class="opinionBox">
      <h1>意見箱</h1>
      <p>このサービスもっとこうしてほしい！やこんな機能あったら便利！という意見をお願いします！</p>
      <textarea name="opinion" id="opinion" cols="30" rows="10" v-model="opinion"></textarea>     
      <br><button @click="opinionSubmit" class="btn-square-shadow">送信</button>
  </div>    
</template>

<script>
import axios from 'axios'

export default{
  data(){
    return{
      opinion: ""
    }
  },
  methods: {
    opinionSubmit(){
      axios.post(
        "https://firestore.googleapis.com/v1/projects/conepro-dcc49/databases/(default)/documents/opinions",
        {
          fields:{
            opinion: {stringValue:this.opinion}
          }
        }
      ),alert("貴重な意見ありがとうございます。")
    }
  }
}
</script>

<style scoped>
.opinionBox h1{
  font-weight: bold;
}
.opinionBox{
  margin-top: 30px;
  padding: 35px 65px;
  text-align: center;
  height: 600px;
  position: relative;
}
#opinion{
  border-style: double;
  text-align: center;
  width: 620px;
  position: absolute;
  right: 0;
  left: 0;
  top: 25%;
  margin: 0 auto;
}
.btn-square-shadow {
  width: 300px;
  height: 70px;
  display: inline-block;
  padding: 1.5em 1em;
  text-decoration: none;
  background: #668ad8;/*ボタン色*/
  color: #FFF;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
  position: absolute;
  top: 70%;
  right: 0;
  left: 0;
  margin: 0 auto;
}
.btn-square-shadow:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);/*影を小さく*/
  border-bottom: none;
}
</style>