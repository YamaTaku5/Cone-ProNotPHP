<template>

  <div class="confirmation">
      <h1>確認画面</h1>
      <div>
        <label for="name" class="alert alert-info">名前</label>
        <label for="name" class="alert alert-light" role="alert">{{name}}</label>
      </div>
      <div>
        <label for="email" class="alert alert-info">メールアドレス</label>
        <label for="name" class="alert alert-light" role="alert">{{email}}</label>
      </div>
      <div>
        <label for="division" class="alert alert-info">事業部</label>
        <label for="name" class="alert alert-light" role="alert">{{division}}</label>
      </div>
      <div>
        <label for="date1" class="alert alert-info">日付1</label>
        <label for="name1" class="alert alert-light" role="alert">{{date1}}</label>
      </div>
      <div>
        <label for="date2" class="alert alert-info">日付2</label>
        <label for="name2" class="alert alert-light" role="alert">{{date2}}</label>
      </div>
      <div>
        <label for="date3" class="alert alert-info">日付3</label>
        <label for="name3" class="alert alert-light" role="alert">{{date3}}</label>
      </div>
      <div>
        <label for="language" class="alert alert-info">学びたい言語</label>
        <label for="name" class="alert alert-light" role="alert">{{language}}</label>
      </div>
      <div class="confirmationDetail">
        <label for="detail" class="alert alert-info" id="detailConfirmation">詳細</label>
        <label for="detail" class="alert alert-light" role="alert">{{detail}}</label>
      </div>
      <br><button @click="formAccept" class="btn-square-shadow">確認</button>
  </div>

</template>

<script>
import axios from "axios";

export default{
  data(){
    return{
      name: this.$route.params.name, email: this.$route.params.email, division: this.$route.params.division, 
      date1: this.$route.params.date1, date2: this.$route.params.date2, date3: this.$route.params.date3,
      language: this.$route.params.language, detail: this.$route.params.detail
    }
  },
  methods: {
    formAccept(){
      axios.post(
        "https://firestore.googleapis.com/v1/projects/conepro-dcc49/databases/(default)/documents/counseling",
        {
          fields: {
            name: {
              stringValue:this.name
            },
            email: {
              stringValue:this.email
            },
            division: {
              stringValue:this.division
            },
            date1:{
              stringValue:this.date1
            },
            date2:{
              stringValue:this.date2
            },
            date3:{
              stringValue:this.date3
            },
            language:{
              stringValue:this.language
            },
            detail:{
              stringValue:this.detail
            }
          }
        }
      ),this.$router.push({name: "home"})
    }
  }
} 
</script>

<style scoped>
h1{
  text-align: center;
  font-weight: bold;
}
.alert-info{
  width: 48%;
  text-align: center;
  font-weight: bold;
  margin-left: 15px;
  margin-right: 15px;
}
.alert-light{
  width: 48%;
  border: dashed black;
  text-align: center;
  top: 23px;
}
#detailConfirmation{
  bottom: 90px;
}
.confirmationDetail .alert-light{
  height: 205px;
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
  margin-left: 34%;
  margin-top: -3%;
}
.btn-square-shadow:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);/*影を小さく*/
  border-bottom: none;
}

</style>
