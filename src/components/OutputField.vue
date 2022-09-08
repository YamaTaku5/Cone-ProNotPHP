<template>
  <div class="output">
    <h1>アウトプットの場</h1>
    <p>こんにちわ！ここはアウトプットの場です。閲覧かアウトプットをお選びください。</p>
    <div class="outputSelect">
        <button @click="goOutputWrite"><v-icon icon size="300" color="#2196F3">mdi-pencil-plus</v-icon><p>アウトプット</p></button>
        <button @click="goOutputSee"><v-icon icon size="300" color="#9C27B0">mdi-eye</v-icon><p id="iconSee">閲覧</p></button>
    </div>
    
  </div>
</template>

<script>

export default{
    data(){
        return{

        }
    },
    methods: {
        goOutputWrite(){
            var resultAccountYesNo = confirm("アカウントはお持ちですか？あるなら「はい」、ないなら「キャンセル」を選択してください")
            if(resultAccountYesNo){
                this.$router.push({
                    name: "outputWrite"
                })
            }
            else{
                this.$router.push({
                    name: "outputCreateAccount"
                })
            }
        },
        goOutputSee(){
            this.$router.push({
                name: "outputSee"
            })
        }
    }

}
</script>

<style>
.output{
  margin-top: 30px;
  padding: 35px 65px;
  text-align: center;
  color: black;
  font-weight: bold;
  height: 600px;
}
.mdi-eye::before {
    content: "\F0208";
}
.mdi-pencil-plus::before {
    content: "\F0DEB";
}

</style>