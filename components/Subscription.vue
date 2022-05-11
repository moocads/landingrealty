<template>
  <section class="sec-subscribe">
    <div class="left-block">
      <img
        class="img-fluid"
        src="~/assets/img/3d-illustration-residential-building-exterior.png"
        alt="building"
      />
    </div>
    <form>
      <label for="email">
        Subscribe for our lastest newsletter, don’t miss the best one.
      </label>
      <div>
        <input
          name="email"
          type="email"
          required
          placeholder="example@email.com"
        />
        <input name="submit" type="submit" value="SUBSCRIBE" />
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.sec-subscribe {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: $navy;
  color: white;
  margin-top: 2rem;
  .left-block {
    position: relative;
    img {
      position: absolute;
      bottom: 0;
      left: -45px;
    }
  }
  form {
    padding: 2rem 0;
    label {
      font-size: 20px;
      line-height: 27px;
      margin-bottom: 3rem;
    }
    div {
      display: grid;
      grid-template-columns: 2.5fr 1fr;
      margin-top: 0.75rem;
      max-width: 545px;
      input {
        border: 2px solid white;
      }
      input[type='email'] {
        color: #b4b4b4;
        padding-left: 1rem;
        font-size: 16px;
        line-height: 27px;
      }
      input[type='submit'] {
        background-color: $navy;
        font-size: 16px;
        font-weight: 700;
        padding: 0.5rem 1.5rem;
      }
    }
  }
}
</style>
