<template>
  <div class="container">
    <section class="header-img">
      <img class="img-fluid" src="~/assets/img/about-img.jpg" alt="" />
    </section>
    <section class="about">
      <div class="wrapper">
        <h1>ABOUT US</h1>
        <p>
          Landing Realty Inc. Brokerage is a Full-Service real estate company
          serving Greater Toronto Area and other cities across Ontario, Canada.
          We provide a wide variety of real estate services to homeowners &
          investors including residential/commercial resales, pre-construction
          sales, rentals, property management, and real estate investment.
        </p>
        <p>
          Leading the newcomers with experiences and helping all become elite,
          to create a young, dynamic, united, professional, and efficient
          corporate culture. Our clients are the soil of our company, we not
          only strive to satisfy our clients during real estate transactions but
          also help them make more long-term and forward-looking decisions. With
          years of wealth knowledge and experience in the industry, we do our
          best to plant & nurture our client's 'real estate seeds' for a
          fruitful reward.
        </p>
      </div>
    </section>

    <section class="choose-us">
      <div class="wrapper">
        <h1>WHY CHOOSE US</h1>
        <div class="grid">
          <div class="key-block">
            <div class="placeholder">
              <img src="/img/about/professional.jpg" alt="Landing Realty - Professional">
            </div>
            <p>Professional</p>
          </div>
          <div class="key-block">
            <div class="placeholder">
              <img src="/img/about/experienced.jpg" alt="Landing Realty - Experienced">
            </div>
            <p>Experienced</p>
          </div>
          <div class="key-block">
            <div class="placeholder">
              <img src="/img/about/reliable.jpg" alt="Landing Realty - Reliable">
            </div>
            <p>reliable</p>
          </div>
          <div class="key-block">
            <div class="placeholder">
              <img src="/img/about/efficient.jpg" alt="Landing Realty - Efficient">
            </div>
            <p>efficient</p>
          </div>
        </div>
      </div>
    </section>
    <Subscription />
  </div>
</template>

<style lang="scss" scoped>
.about {
  background-color: $navy;
  color: white;
  text-align: center;
  padding: 5rem 0;
  h1 {
    font-size: 38px;
    line-height: 44.5px;
    color: white;
  }
  p {
    font-size: 16px;
    line-height: 25px;
  }
}

.choose-us {
  padding: 5rem 0;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3rem;
  }
  h1 {
    color: $navy;
    font-size: 38px;
    font-weight: 900;
  }
  p {
    color: $navy;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
  }
  .key-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .placeholder {
    width: 100%;
    // padding-bottom: 100%;
    background-color: #c4c4c4;
    margin-bottom: 2rem;
    position: relative;
    border-radius: 15px;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .placeholder::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
}

@media all and (max-width: $md) {
  .choose-us {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>