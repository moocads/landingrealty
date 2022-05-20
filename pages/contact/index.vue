<template>
  <div class="container">
    <div class="header">
      <img class="img-fluid" src="~/assets/img/contact-header.png" alt="" />
      <div class="blender">
        <div class="wrapper">
          <h1>Contact Us</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  .blender {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(196, 196, 196, 0) 0%,
      #214055 100%
    );
    // mix-blend-mode: multiply;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .wrapper {
    h1 {
      color: white;
      font-size: 68px;
    }
  }
}
</style>
