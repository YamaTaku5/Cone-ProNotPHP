<template>
  <div class="useMethod">
    <h1>ConeProとは...</h1>
      <div class="method1" @click="clickMethod1">
        <div class="method1Detail">
          プログラミング初学者が
          挫折しないためのサービスです！！
        </div>
      </div>
      <div class="method2" @click="clickMethod2">
        <div class="method2Detail">
          社内のプログラマーと面談できる！
        </div>
      </div> 
      <div class="method3" @click="clickMethod3">
        <div class="method3Detail">
          分からない事を手軽に質問できる！
        </div>
      </div>
      <div class="method4" @click="clickMethod4">
        <div class="method4Detail">
          プログラミングに関するメモを共有できる！
        </div>
      </div>
      <div class="method5" v-if="method5Active">
        <div class="method5Detail">
          一緒に頑張りましょう！
          <p>↓詳細↓</p>
        </div>
      </div>
    <div class="method5Img" v-if="method5ActiveImg">
      <img src="../img/pose_gutspose_business - コピー.png" id="imgWomen">
      <img src="../img/pose_gutspose_business.png" id="imgMen">
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        method5Active: false,
        method5ActiveImg: false
      }
    },
    methods:{
      clickMethod1(){
        document.querySelectorAll(".method1")[0].classList.add("method1Active");
        document.querySelectorAll(".method1Detail")[0].classList.add("methodDetailOff");
        document.querySelectorAll(".method2")[0].classList.add("method2Bold");
      },
      clickMethod2(){
        document.querySelectorAll(".method2")[0].classList.add("method2Active");
        document.querySelectorAll(".method2Detail")[0].classList.add("methodDetailOff");
        document.querySelectorAll(".method3")[0].classList.add("method3Bold");
      },
      clickMethod3(){
        document.querySelectorAll(".method3")[0].classList.add("method3Active");
        document.querySelectorAll(".method3Detail")[0].classList.add("methodDetailOff");
        document.querySelectorAll(".method4")[0].classList.add("method4Bold");
      },
      clickMethod4(){
        document.querySelectorAll(".method4")[0].classList.add("method4Active");
        document.querySelectorAll(".method4Detail")[0].classList.add("methodDetailOff");
        this.method5Active = true
        this.method5ActiveImg = true
      }
    }
  }

</script>

<style scoped>
.useMethod{
  margin-top: -30px;
  padding: 35px 65px;
  text-align: center;
  height: 1500px;
}
.method1Detail, .method2Detail, .method3Detail, .method4Detail{
  color: #fff;
  text-shadow: 1px 1px 1px #ff9800, -1px 1px 1px #ff9800, 1px -1px 1px #ff9800, -1px -1px 1px #ff9800, 1px 1px 1px #ff9800, -1px 1px 1px #ff9800, 1px -1px 1px #ff9800, -1px -1px 1px #ff9800;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:100%;
  font-family: 'Kosugi Maru', sans-serif;
  font-size: 30px;
}
.methodDetailOff{
  animation-delay: 1s;
  animation: methodCharOff;
  animation-fill-mode: forwards;
}
@keyframes methodCharOff{
  100%{
    opacity: 0;
  }
}

.method1{
  margin: 0 auto;
  height: 270px;
  width: 360px;
  background-color: blue;
  border-radius: 10px;
  box-shadow: 150px 115px 6px 10px rgb(25, 231, 179);
  transition: all 1s;
  position: absolute;
  left: 20%;
  z-index: 2;
}
.method1Active{
  animation: useMethod1 1s forwards;
  opacity: 1;
  z-index: 0;
}
@keyframes useMethod1{
  100%{
    transform: translate(150px, 115px);
    box-shadow: 0px 0px rgb(84 92 90);}
}

.method2{
  margin: 0 auto;
  height: 270px;
  width: 360px;
  background-color: red;
  border-radius: 10px;
  box-shadow:  -150px 115px 6px 10px rgb(237, 37, 37);
  transition: all 1s;
  position: absolute;
  right: 20%;
  opacity: 0.5;
}
.method2Active{
  animation: useMethod2 1s forwards;
  opacity: 1;
  z-index: 0;
}
@keyframes useMethod2{
  100%{
    transform: translate(-150px, 115px);
    box-shadow: 0px 0px rgb(84 92 90);}
}

.method3{
  margin: 0 auto;
  height: 270px;
  width: 360px;
  background-color: yellow;
  border-radius: 10px;
  box-shadow: 150px -115px 6px 10px rgb(170, 214, 26);
  transition: all 1s;
  position: absolute;
  top: 70%;
  left: 20%;
  opacity: 0.5;
}
.method3Active{
  animation: useMethod3 1s forwards;
  opacity: 1;
}
@keyframes useMethod3{
  100%{
    transform: translate(150px, -115px);
    box-shadow: 0px 0px rgb(84 92 90);}
}

.method4{
  margin: 0 auto;
  height: 270px;
  width: 360px;
  background-color: green;
  border-radius: 10px;
  box-shadow: -150px -115px 6px 10px rgb(110, 239, 24);
  transition: all 1s;
  position: absolute;
  right: 20%;
  top: 70%;
  opacity: 0.5;
}
.method4Active{
  animation: useMethod4 1s forwards;
  opacity: 1;
}
@keyframes useMethod4{
  100%{
    transform: translate(-150px, -115px);
    box-shadow: 0px 0px rgb(84 92 90);}
}

.method2Bold, .method3Bold, .method4Bold{
  opacity: 1;
}

.method5{
  animation: useMethod5 1s;
  animation-delay: 1s;
  margin: 0 auto;
  height: 170px;
  width: 41%;
  background-color: white;
  border-radius: 10px;
  transition: all 1s;
  position: absolute;
  right: 29.5%;
  top: 58.8%;
  opacity: 0;
  box-shadow: 0px 0px 12px 18px;
  animation-fill-mode: forwards
}
.method5Detail{
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  position: absolute;
  width: 100%;
  padding-top: 8%;
  text-shadow: 1px 1px 1px #ff9800, -1px 1px 1px #ff9800, 1px -1px 1px #ff9800, -1px -1px 1px #ff9800, 1px 1px 1px #ff9800, -1px 1px 1px #ff9800, 1px -1px 1px #ff9800, -1px -1px 1px #ff9800;
  color: blanchedalmond;
}
.method5Detail p{
  text-align: right;
  color: black;
  font-size: 34px;
}
@keyframes useMethod5{
  100%{
    opacity: 1;
  }
}

.method5Img{
  border-style: none;
  position: absolute;
  opacity: 0;
  animation: useMethod5Img 1s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  opacity: 1;
  z-index: 2;
  top: 50%;
  left: 0;
  right: 0;
}
#imgWomen{
  width: 300px;
  height: 610px;
  position: absolute;
  left: 10%;
  animation: useMethod5Img 1s;
  animation-delay: 2s;
  opacity: 0;
  animation-fill-mode: forwards;
}
#imgMen{
  width: 300px;
  height: 610px;
  position: absolute;
  right: 10%;
  animation: useMethod5Img 1s;
  animation-delay: 2s;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes useMethod5Img{
  100%{
    transform: translate(0px, -70px);
    opacity: 1;
  }
}
</style>

            <!-- <div class="method2Detail">
          <h5>＜社内のプログラマーと面談ができる＞</h5>
          <p>現役のプログラマーと会話がしたい！となっても中々社内のプログラマーと面識が無く声がかけれないという悩みを持っている人は多少
            なりともいるのではないかと思います。そこでこのサービスを使用する事で面談申請で項目を入力する事で社内のプログラマーと会話する
            事ができます！そこで生のプログラマーの声を聞いて今後の勉強法やどんな仕事をやっているのかなどを聞けます！
            <br>上のメニューの<span>相談申請</span>から申請してみてください！
          </p>
        </div> -->
<!-- <h5>＜プログラミングに関する質問を匿名でできる＞</h5>
          <p>コードを書いているとどうしても解消できないエラーや作成物を決める際のアドバイスは中々調べても出てこない事があると思います。
          そこでConeProを使用する事で匿名で投稿できるためより気軽に質問ができます。
          <br>上のメニューのコードの<span>コードの質問</span>から質問してみてください！
          </p> -->