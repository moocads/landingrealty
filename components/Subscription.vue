<template>
  <section class="sec-subscribe">
    <div class="navy">
      <div class="left-block">
        <img
          class="img-fluid"
          src="~/assets/img/3d-illustration-residential-building-exterior.png"
          alt="building"
        />
      </div>
      <div class="right-block">
        <form>
          <input
            name="email"
            type="email"
            required
            placeholder="example@email.com"
          />
          <input name="submit" type="submit" value="SUBSCRIBE" />
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sec-subscribe {
  // padding-top: 30px;

  .navy {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: $navy;
    color: white;
    // margin-top: 2rem;
    .left-block {
      position: relative;
      img {
        position: absolute;
        bottom: 0;
        left: calc(10vw - 20px);
        width: 100%;
        max-width: 500px;
      }
    }
  }

  .right-block {
    padding: 30px 10vw 30px 5vw;
    display: flex;
    justify-content: center;
  }
  form {
    justify-content: flex-end;
    display: flex;
    width: 100%;

    input {
      border: 1px solid white;
    }
    input[type='email'] {
      width: 100%;
      color: #b4b4b4;
      padding-left: 1rem;
      font-size: 16px;
      padding: 0.5rem 1.5rem;
    }
    input[type='submit'] {
      background-color: $navy;
      font-size: 16px;
      font-weight: 700;
      padding: 0.5rem 1.5rem;
    }
  }
}

@media all and (max-width: $md) {
  .sec-subscribe {
    .navy {
      display: flex;
      flex-direction: column-reverse;

      .left-block {
      display: flex;
      justify-content: center;

        img {
          position: static;
          max-width: 400px;
        }
      }
    }

    .right-block {
      margin: auto;
      padding: 30px 0 15px 0;
    }

    form {
      display: flex;
    }
  }
}
</style>
