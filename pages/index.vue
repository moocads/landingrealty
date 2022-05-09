<template>
  <div>
    <section class="sec-landing">
      <div class="sec-content">
        <img src="~/assets/img/home-logo.png" alt="logo" />
        <p>Client First, Client’s Need Is Our # 1 Priority</p>
        <a class="main-btn">Learn More</a>
      </div>
    </section>
    <section class="sec-intro">
      <div class="wrapper">
        <div>
          <p>Toronto Real Estate Company</p>
          <h3>EXTRAODINARY, LANDED</h3>
          <p>
            Landing Realty Inc. Brokerage is a Full-Service real estate company
            serving Greater Toronto Area and other cities across Ontario,
            Canada. We provide a wide variety of real estate services to
            homeowners & investors including residential/commercial resales,
            pre-construction sales, rentals, property management, and real
            estate investment.
          </p>
          <a class="main-btn">Learn More</a>
        </div>
      </div>
    </section>
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
    <section class="sec-pre-construction">
      <div class="wrapper">
        <h1>Pre-Construction</h1>
        <div>
          <a-tabs class="custom-tab" default-active-key="1" @change="callback">
            <a-tab-pane class="flex-col-center" key="1" tab="Condon">
              <div class="sample-grid">
                <div>owo</div>
                <div>owo</div>
                <div>owo</div>
              </div>
              <a class="main-btn">View All</a>
            </a-tab-pane>
            <a-tab-pane key="2" tab="House" force-render>
              Content of Tab Pane 2
            </a-tab-pane>
            <a-tab-pane key="3" tab="Townhouse">
              Content of Tab Pane 3
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    callback(key) {
      console.log(key)
    },
  },
}
</script>

<style lang="scss" scoped>
.sec-landing {
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
.sec-content {
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

.sec-intro {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem 15vw;
  .wrapper > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  p {
    font-size: 18px;
    line-height: 27px;
  }
  h3 {
    font-size: 24px;
    line-height: 28.13px;
    font-weight: 700;
  }
}

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

.sec-pre-construction {
  padding: 7rem 0;
}

.sample-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 27px;
  width: 100%;
}

.flex-col-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media all and (max-width: $lg) {
  .sec-subscribe {
    grid-template-columns: 1.2fr 0.8fr;
  }
}

@media all and (max-width: $md) {
  .sec-subscribe {
    display: flex;
    flex-direction: column-reverse;
    .left-block {
      position: static;
      display: flex;
      justify-content: center;
      img {
        position: static;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      label {
        margin-bottom: 0.5rem;
        text-align: center;
      }
    }
  }
}

@media all and (max-width: $sm) {
}
</style>
