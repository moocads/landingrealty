<template>
  <div class="infobar-container">
    <div class="infobar-wrapper">
      <p>Client First, Client’s Need Is Our # 1 Priority</p>
      <div>
        <p>info@landingrealty.ca</p>
        <p>905-604-7171</p>
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
    max-width: 10000px;
    padding: 0 10vw;
    div {
      display: flex;
      p:first-child{
          margin-right: 35px;
      }
    }
    p {
      color: white;
      font-size: 16px;
      margin: 0;
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
