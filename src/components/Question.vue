<template>
  <div class="question">
      <h1>質問</h1>
      <div>
        <label for="text" class="alert alert-info" id="quetionLanguageLabel">言語</label>
        <!--<input type="text" v-model="questionLanguage">-->
        <select name="questionLanguage" id="questionLanguage" v-model="questionLanguage">
          <option value=""></option>
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
          <option value="C++">C++</option>
          <option value="Java">Java</option>
          <option value="HTML/CSS">HTML/CSS</option>
          <option value="PHP">PHP</option>
          <option value="Ruby">Ruby</option>
        </select>
      </div>
      <input type="text" v-model="questionName" for="questionName" id="questionNameInput">
      <textarea name="question" id="question" cols="30" rows="10" v-model="questionDetail"></textarea>   
      <label for="text" class="alert alert-info" id="questionPasswordLabel">パスワード<p id="passwordP">※質問を削除する際に必要になります</p></label>
      <input type="text" for="questionPassword" v-model="questionPassword" id="questionPasswordInput">
      <br><button @click="goConfirmationQuestion" class="btn-square-shadow">確認</button>
  </div>    
</template>

<script>
export default{
    data() {
        return{
            questionLanguage: "",
            questionDetail: "",
            questionName: "",
            questionPassword: "",
        }
    },
    methods:{
        goConfirmationQuestion(){
            this.$router.push({
                name: "QuestionConfirmation",
                params:{
                    questionLanguage: this.questionLanguage,
                    questionDetail: this.questionDetail,
                    questionName: this.questionName,
                    questionPassword: this.questionPassword
                }
            })
        }
    }
}
</script>

<style scoped>
#passwordP{
  color: red;
  margin-bottom: 0px;
  font-size: 12px;
}
.question h1{
  font-weight: bold;
  position: relative;
  left: 19px;
}
.question{
  margin-top: 30px;
  padding: 35px 65px;
  text-align: center;
  position: relative;
}
#questionNameInput{
  width: 720px;
  margin-bottom: 3px;
  border: solid;
  height: 44px;
}
.question textarea{
  border: solid;
  height: 660px;
  width: 720px;
}
#questionPasswordInput{
  border-style: double;
  width: 280px;
  height: 48px;
  position: absolute;
  margin: 1% 53%;
  right: 0px;
  left: 0;
}
#questionPasswordLabel{
  margin-right: 35%;
  position: relative;
}
.question select{
  margin-left: 40px;
  width: 350px;
  border-style: solid;
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