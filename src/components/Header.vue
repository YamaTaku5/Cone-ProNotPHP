<template>
  <div class="header">
    <nav>
      <ul>
        <header><h1>ConePro</h1></header>
        <li></li>
        <li><router-link class=”current” to="/">ホーム</router-link></li>
        <li><router-link to="method">ConeProとは</router-link></li>
        <li><router-link to="/form">相談申請</router-link></li>
        <li><router-link to="/opinionbox" >意見箱</router-link></li>
        <li><router-link to="/question">コードの質問</router-link></li>
        <li><router-link to="/output">インプットの場</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default{
}
</script>

<style>
.header{
  background-color: white;
}
nav{
border-bottom: 1px solid #ccc;
border-top: 1px solid #ccc;
margin-top: 22px;
}
nav ul{
display: table;
margin: 0 auto;
padding: 0;
width: 80%;
text-align: center;
}
nav ul li{
display: table-cell;
min-width: 50px;
border-right: 1px solid #ccc;
}
nav ul li:first-child{
border-left: 1px solid #ccc;
}
nav ul li a{
display: block;
width: 100%;
padding: 22px 0;
text-decoration: none;
color: #aaa;
}
nav ul li a:hover{
background-color:#F8E750;
}
nav ul li.current{
font-weight: bold;
}
nav ul li.current a{
border-bottom: 5px solid #00B0F0;
color: #00B0F0;
}
header h1{
  position: relative;
  top: 6px;
}
</style>

<!--
<style>
  nav ul{
    display: table;
    margin: 0 auto;
    padding: 0;
    width: 80%;
    text-align: center;
  }
  nav ul li{
    display: table-cell;
    position: relative;
  }
  nav ul li a{
    display: block;
    width: 100%;
  }
  nav ul li a::after,nav ul li a::before {
    display: block;
    content: ”;
    position: absolute;
  }
  nav ul li a::after {
    bottom: -50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background-color: #ccc;
    border-radius: 100%;
  }
  nav ul li a.current::after {
    background-color: #3498db;
  }
  nav ul li a:hover{
    color: #3498db;
  }
  nav ul li a:hover:after {
    background-color: yellow;
    width: 100%;
    left: 0;
    border-radius: 5px;
  }
  nav ul li a{
    text-decoration: none;
    color:#aaa;
  }
  nav ul li a.current{
    color:#555;
  }
</style>
-->