<template>
  <div class="container">
    <h1>
      <span>OHMIN's Movie Search</span><br />
      <div>the Open Movie DataBase</div>      
    </h1>
    <p>
      OMDb API는 영화 정보를 얻기 위한 RESTful 웹 서비스이며,<br />
      사이트의 모든 콘텐츠와 이미지는 사용자가 제공하고 유지 관리합니다.
    </p>
  </div>
</template>

<style lang="scss" scoped>

.container{
  padding-top: 40px;
}
h1{
  line-height: 1;
  font-family: "Oswald", sans-serif;
  font-size: 80px;
  span {
    color: $secondary;
  }
  div{
    color: $gray-700;
  }
}
p{
  margin: 30px 0;
  color: $gray-600;
}
</style>