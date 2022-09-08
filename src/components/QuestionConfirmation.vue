<template>
  <div class="questionConfirmation">
      <h1>質問内容の確認</h1>
      <div>
        <label for="questionLanguage" class="alert alert-info" role="alert">言語</label>
        <label for="questionLanguage" class="alert alert-light" id="questionConfirmationLanguageLabel" role="alert">{{questionLanguage}}</label>
      </div>
      <div class="questionDetailName">
        <label for="questionName" id="questionNameLavelConf">{{questionName}}</label><hr>
        <label for="questionDetail">{{questionDetail}}</label>
      </div>
      <div>
        <label for="questionPassword" class="alert alert-info" role="alert">パスワード</label>
        <label for="questionPassword" class="alert alert-light">{{questionPassword}}</label>
      </div>
      <button @click="questionAccept" class="btn-square-shadow">送信</button>
  </div>
</template>

<script>
import axios from 'axios'
import { format } from 'date-fns'


export default{
    data(){
        return{
            questionLanguage: this.$route.params.questionLanguage,
            questionDetail: this.$route.params.questionDetail,
            questionName: this.$route.params.questionName,
            questionPassword: this.$route.params.questionPassword,
        }
    },
    methods:{
        questionAccept(){
            const myShaped = format(new Date(), "yyyy'/'MM'/'dd'/'HH':'mm'")
            const dateNumber = Number(format(new Date(), "yyyyMMddHHmm"))
            const number = "0"
            axios.post(
                "https://firestore.googleapis.com/v1/projects/conepro-dcc49/databases/(default)/documents/question",
                {
                    fields:{
                        questionLanguage:{
                            stringValue: this.questionLanguage
                        },
                        questionDetail:{
                            stringValue: this.questionDetail
                        },
                        questionName:{
                            stringValue: this.questionName
                        },
                        questionTime:{
                            stringValue: myShaped
                        },
                        questionTimeNumber:{
                            stringValue: String(dateNumber)
                        },
                        questionGood:{
                            stringValue: number
                        },
                        questionPassword:{
                            stringValue: this.questionPassword
                        }
                    }
                }
            ),this.$router.push({name: "home"})
        }
    }
}
</script>

<style scoped>
label {
  display: inline-block;
}
.questionConfirmation{
  margin-top: -30px;
  padding: 50px 50px;
  text-align: center;
  position: relative;
  height: 1100px;
}
.questionDetailName{
  border-style: solid;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
}
.alert-light{
  width: 255px;
  position: relative;
  top: 0%;
  right: 0;
  left: 0;
  margin: -2%;
  height: 43px;
  color: black;
  font-weight: 700;
}
#questionNameLavelConf{
  font-weight: 700;
  margin-bottom: 0;
}
.alert-info{
  width: 255px;
  margin-right: 70px;
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
  margin-top: 10px;
}
.btn-square-shadow:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);/*影を小さく*/
  border-bottom: none;
}
</style>
