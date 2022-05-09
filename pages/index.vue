<template>
  <div>
    <section id="landing">
      <div id="content">
        <img src="~/assets/img/home-logo.png" alt="" />
        <p>Client First, Client’s Need Is Our # 1 Priority</p>
        <a class="main-btn">Learn More</a>
      </div>
    </section>
    <section>
      
    </section>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
#landing {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('~assets/img/banner-background.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  padding: 10%;
}
#content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    height: auto;
  }
  p {
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    margin-bottom: 4rem;
  }
}
</style>
