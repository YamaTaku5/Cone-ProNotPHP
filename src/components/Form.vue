<template>
  <div class="form">
    <h1 class="formExplain" id="formH1">相談申請</h1>
    <p class="formExplain">以下の項目を記入して確認を押してください</p>
      <div>
        <label for="name" class="alert alert-info">名前</label>
        <input type="text" id="name" v-model="name" class="inputForm">
      </div>
      <div>
        <label for="email" class="alert alert-info">メールアドレス</label>
        <input type="email" id="email" v-model="email" class="inputForm">
      </div>
      <div>
        <label for="division" class="alert alert-info">事業部</label>
        <input type="text" id="division" v-model="division" class="inputForm">
      </div>
      <div>
        <label for="date1" class="alert alert-info">希望日時：１</label>
        <input type="datetime-local" id="date1" v-model="date1" class="inputForm">
        <label for="date2" class="alert alert-info">希望日時：２</label>
        <input type="datetime-local" id="date2" v-model="date2" class="inputForm">
        <label for="date3" class="alert alert-info">希望日時：３</label>
        <input type="datetime-local" id="date3" v-model="date3" class="inputForm">
      </div>
      <div>
        <label for="language" class="alert alert-info">学びたい言語</label>
        <select name="language" id="language" v-model="language">
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
      <div>
        <label for="detail" class="alert alert-info" id="textareaLabel">相談内容</label>
        <textarea name="detail" id="detail" v-model="detail" cols="30" rows="10" class="inputForm"></textarea>
      </div>
      <br>
      <button @click="GoConfirmationForm" class="btn-square-shadow">確認</button>
    </div>
</template>

<script>

export default{
  data(){
    return{
      name: "",
      email: "",
      division: "",
      date1: "",
      date2: "",
      date3: "",
      language: "",
      detail: ""
    }
  },
  methods: {
    GoConfirmationForm(){
      console.log(this.name),
      this.$router.push({
        name: "FormConfirmation",
        params:{
          name: this.name,
          email: this.email,
          division: this.division,
          date1: this.date1,
          date2: this.date2,
          date3: this.date3,
          language: this.language,
          detail: this.detail
        }
      })
    }
  }
};
</script>

<style scoped>
p.formExplain {
  text-align: center;
}
h1#formH1 {
  text-align: center;
  font-weight: bold;
}
label{
  width: 48%;
  text-align: center;
  font-weight: bold;
  margin-left: 15px;
  margin-right: 15px;
}
input, select{
  width: 48%;
  border: dashed black;
  text-align: center;
}
textarea{
  width: 48%;
  border: dashed black;
  text-align: center;
  height: 230px;
}
label#textareaLabel {
    bottom: 115px;
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