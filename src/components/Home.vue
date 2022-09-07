<template>
  <div class="home">
    <v-app>
      <div class="animation">
        <div class="ball"><span class="ballText">PSC</span></div>
        <span class="shadow"></span>
      </div>    
      <v-select
          :items= "items"
          label="探したい項目"
          v-model="searchItem" 
      ></v-select>
      <v-text-field
        v-model="searchKeyword"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        @keypress.enter="searchBy"
      ></v-text-field>
      <v-tabs color="#03A9F4">
        <v-tab @click="sort(0)">投稿日が早い順</v-tab>
        <v-tab @click="sort(1)">投稿日が遅い順</v-tab>
        <v-tab @click="sort(2)">いいね数</v-tab>
        <v-tab @click="sort(3)">コメント数</v-tab>
      </v-tabs>
      <div class="homePost">
        <div v-for="post in limitCount" :key="post.name" class="alert alert-info" >
          <div class="spanLanguage">
            <span id="questionLanguage_span">{{post[1].questionLanguage}}</span>
            <p></p>
            <span></span>
            <v-btn icon color="deep-orange"><v-icon @click="good(post[0])">mdi-thumb-up</v-icon><span>{{post[1].questionGood}}</span></v-btn>
          </div>
          <div class="alert alert-light">{{post[1].questionName}}</div><hr>
          <div id="questionDetail">{{post[1].questionDetail}}</div>
          <button type="button" class="btn btn-primary" @click="goComment(post[0])">コメント({{post[2]}})</button>
          <p>{{post[1].questionTime}}</p>
        </div>
      </div>
      <template>
        <div class="text-center">
          <v-pagination v-model="page" :length=pageLength circle></v-pagination>
        </div>
      </template>
    </v-app>
  </div>

</template>

<script>
import firebase from 'firebase/compat/app'

export default{
    data(){
        return{
            items: ['言語', '題名', '内容'],
            searchItem:"",
            posts: [],
            postsNameList: [],
            postsLanguageList: [],
            postsDetailList: [],
            postsDocument:[],
            goodCondition: true,
            page:1,
            pageLength:0,
            searchKeyword:"",
            numberPosts: 0,
        }
    },
    async created(){
        const ref = firebase.firestore().collection("question")
        ref.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const documentName = doc.id
            const documentData = doc.data()
            var ex = /C/g
            var count = 0
            var post = doc.data()
            var postKeys = String(Object.keys(post))
            var arr = postKeys.match(ex)
            if (arr == null){
              count = 0
            }else{
              count = arr.length
            }
            this.posts.push([documentName, documentData, count])
            this.numberPosts = this.numberPosts + 1
          }),
          this.pageLength = Math.floor(this.numberPosts / 10 + 1)
          for (var searchI in this.posts){
            this.postsDetailList.push(this.posts[searchI][1].questionDetail)
            this.postsNameList.push(this.posts[searchI][1].questionName)
            this.postsLanguageList.push(this.posts[searchI][1].questionLanguage)
          }
        });
      
    },
    methods: {
        goComment(questionName){
            this.$router.push({
                name: "comment",
                params: {
                  name: questionName
                }
            });
        },
        good(questionId){
          const ref = firebase.firestore().collection("question").doc(questionId)
          ref.update({
            questionGood: firebase.firestore.FieldValue.increment(1)
          })
        },
        searchBy(){
          var searchByList = []
          if (this.searchItem === "言語"){
            for (var i in this.posts) {
              if (this.posts[i][1].questionLanguage.indexOf(this.searchKeyword) != -1) {
                searchByList.push(this.posts[i])
              }
            }
          }else if (this.searchItem === "題名"){
            for (var ii in this.posts) {
              if (this.posts[ii][1].questionName.indexOf(this.searchKeyword) != -1) {
                searchByList.push(this.posts[ii])
              }
            }
          }else if (this.searchItem === "内容"){
            for (var iii in this.posts) {
              if (this.posts[iii][1].questionDetail.indexOf(this.searchKeyword) != -1) {
                searchByList.push(this.posts[iii])
              }
            }
          }
          this.$router.push({
            name: "searchResult",
            params: {
              searchKeyword: this.searchKeyword,
              searchResultposts: searchByList
            }
          })
        },
        sort(index){
          switch(index){
            case 0:
              this.posts.sort(function(a,b){
                if (Number(a[1].questionTimeNumber) < Number(b[1].questionTimeNumber)) {
                  return 1;
                }else {
                  return -1;
                }
              })
              break
            case 1:
              this.posts.sort(function(a,b){
                if (Number(a[1].questionTimeNumber) > Number(b[1].questionTimeNumber)) {
                  return 1;
                }else {
                  return -1;
                }
              })
              break
            case 2:
              this.posts.sort(function(a,b){
                if (Number(a[1].questionGood) < Number(b[1].questionGood)) {
                  return 1;             
                }else {
                  return -1;
                }
              })
              break
            case 3:
              this.posts.sort(function(a,b){
                if (Number(a[2]) < Number(b[2])) {
                  return 1;             
                }else {
                  return -1;
                }
              })
              break
          }
        },
    },
    computed:{
      limitCount(){
        return this.posts.slice((this.page-1)*10,this.page*10)
      },
    }
}
</script>

<style scoped>
.animation{
  position:absolute;
	width:100%;
	height:350px;
}
.ball{
	position: absolute;
	left: 164px;
	width:240px;
	height:100px;
	border-radius: 50%;
	background:rgba(0, 140, 255, 0.834);
	opacity:0.6;
	animation: bound-anim 3s infinite;
}
.ballText{
  text-align: center;
  font-weight: bold;
  color: #000;
  font-size: 60px;
  position: absolute;
  top: 10px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  -webkit-text-stroke: 2px white;
  
}
@keyframes bound-anim {
	0%,100% {top: 0;transform: scale(1);}
	30% {top: -30%; transform: scale(0.96,1.04);}
	60% {transform: scale(1);}
	90% {top: 0;transform: scale(1.15,0.9);}
}
/*影*/
.shadow{
	position: absolute;
	left: 255px;
	top: 95px;
	margin: auto;
	width: 60px;
	height: 10px;
	border-radius: 50%;
	background: #000;
	filter: blur(6px);
	opacity:0.9;
	animation: shadow-anim 3s infinite;
  z-index: 2;
}
@keyframes shadow-anim {
	0%,100%  {transform: scale(1);filter: blur(4px);}
	30% {transform: scale(1.6,1);filter: blur(8px);}
}

.home .theme--light.v-application{
  background: aliceblue;
}
.v-input{
  width: 30% ;
  margin-left: auto;
  max-height: 45px;
  right: 7%;
}
.v-application--wrap .theme--light.v-tabs>.v-tabs-bar{
  margin: 5px 0px;
  background-color: aliceblue;
}
.v-tabs{
  margin-top: 10px;
  border: solid;
  border-bottom: none;
  border-color: rgba(0, 255, 255, 0.802);
  width: 80%;
  position: relative;
  left: 10%;
}
.alert-info{
  width: 80%;
  text-align: center;
  margin: auto;
  margin-bottom: 10px;
}
.alert-light{
  width: 80%;
  margin: 0 auto;
  font-weight: bold;
  color: black;
}
.spanLanguage{
  position: relative;
}
#questionLanguage_span {
  position: absolute;
  left: 10%;
  top: 15%;
  text-align: start;
}
.theme--light.v-btn.v-btn--icon{
  position: relative;
  right: -38%;
}
#questionDetail{
  width: 80%;
  margin: 0 auto;
  padding-bottom: 5px;
}
</style>