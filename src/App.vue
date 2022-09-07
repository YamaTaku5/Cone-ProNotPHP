<template>
  <body>
    <!-- Google Fontのリンク設定 font-family: 'Kosugi Maru', sans-serif; -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap" rel="stylesheet">

    <div class="bg_pattern Paper_v2">
      <router-view name="header"></router-view>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>  
  </body>
  
</template>

<script>

export default{

}
</script>

<style>
.bg_pattern .container{
  width: 65%;
  background: aliceblue;
  margin-top: 45px;
}
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #2196f3;
}
.bg_pattern {
  position: static;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #fff;
  z-index: -1;
}
.Paper_v2 {
  background-image:
    repeating-linear-gradient(to bottom,
      transparent 25px,
      rgba(112, 210, 249, 0.394) 26px,  rgba(112, 210, 249, 0.394) 26px,
      transparent 27px,  transparent 51px, 
      rgba(112, 210, 249, 0.394) 52px,  rgba(112, 210, 249, 0.394) 52px,
      transparent 53px,  transparent 77px, 
      rgba(112, 210, 249, 0.394) 78px,  rgba(112, 210, 249, 0.394) 78px,
      transparent 79px,  transparent 103px, 
      rgba(112, 210, 249, 0.394) 104px,  rgba(112, 210, 249, 0.394) 104px,
      transparent 105px,  transparent 129px, 
      rgba(112, 210, 249, 0.394) 130px,  rgba(112, 210, 249, 0.394) 130px),
 
    repeating-linear-gradient(to right,
      transparent 25px,
      rgba(112, 210, 249, 0.394) 26px,  rgba(112, 210, 249, 0.394) 26px,
      transparent 27px,  transparent 51px, 
      rgba(112, 210, 249, 0.394) 52px,  rgba(112, 210, 249, 0.394) 52px,
      transparent 53px,  transparent 77px, 
      rgba(112, 210, 249, 0.394) 78px,  rgba(112, 210, 249, 0.394) 78px,
      transparent 79px,  transparent 103px, 
      rgba(112, 210, 249, 0.394) 104px,  rgba(112, 210, 249, 0.394) 104px,
      transparent 105px,  transparent 129px, 
      rgba(112, 210, 249, 0.394) 130px,  rgba(112, 210, 249, 0.394) 130px);
}

</style>