<i18n>
{
  "en": {
    "slogan":"Client First, Client's Needs Are Our # 1 Priority"
  },
  "zh":{
    "slogan":"客户至上，客户的需求是我们的第一要务"
  }
}
</i18n>
<template>
  <div class="infobar-container">
    <div class="infobar-wrapper wrapper">
      <p>{{$t('slogan')}}</p>
      <div>
        <p>info@landingrealty.ca</p>
        <p>905-604-7171</p>
        <NuxtLink class="switchLocale" v-if="$i18n.locale=='en'" :to="switchLocalePath('zh')">
          <a-tag style="margin-right:0">
            中文
          </a-tag>
        </NuxtLink>
        <NuxtLink class="switchLocale" v-if="$i18n.locale=='zh'" :to="switchLocalePath('en')">
          <a-tag style="margin-right:0">
            EN
          </a-tag>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.infobar-container {
  width: 100%;
  background-color: black;
  padding: 5px 0;
  .infobar-wrapper {
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      p{
          margin-right: 35px;
      }
    }
    p {
      color: white;
      font-size: 16px;
      margin: 0;
    }
    .ant-tag:hover {
      cursor: pointer;
    }
    // @media (max-width: 992px) {
    //   padding: 0 5vw;
    // }
  }
}

@media all and (max-width: $md) {
  .infobar-container{
    display: none;
  }
}
</style>
