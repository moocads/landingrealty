<template>
  <footer>
    <div class="wrapper">
      <section>
        <div class="logo-container">
          <img src="~/assets/img/nav-logo.png" alt="" />
        </div>
        <p class="detail">
          Landing Realty Inc. Brokerage is a Full-Service real estate company
          serving Greater Toronto Area and other cities across Ontario, Canada.
          We provide a wide variety of real estate services to homeowners &
          investors including residential/commercial resales, pre-construction
          sales, rentals, property management, and real estate investment.
        </p>
        <div class="social-icons">
          <a href="/" target="_blank">
            <IconFacebook />
          </a>
          <a href="/" target="_blank">
            <IconInstagram />
          </a>
          <a href="/" target="_blank">
            <IconWechat />
          </a>
        </div>
      </section>
      <section class="contact-block">
        <h5>contact us</h5>
        <ul class="contact-list">
          <li class="phone">(905) 604-7171</li>
          <li class="email">info@landingrealestate.com</li>
          <li class="address">
            145 Royal Crest Ct Unit48, Markham, ON L3R 9Z4
          </li>
        </ul>
        <img src="~/assets/img/map.jpg" alt="map" class="img-fluid" />
      </section>
      <section>
        <h5>Lastest News</h5>
        <div class="news">
          <div class="news-block">
            <img
              src="~/assets/img/blog-demo-img-01.jpg"
              alt="blog 1"
              class="img-fluid"
            />
            <div class="news-content">
              <h5>How to invest home</h5>
              <p>Lorem ipsum dolor sit ametLorem ipsum dolor ...</p>
            </div>
          </div>
          <div class="news-block">
            <img
              src="~/assets/img/blog-demo-img-01.jpg"
              alt="blog 1"
              class="img-fluid"
            />
            <div class="news-content">
              <h5>How to invest home</h5>
              <p>Lorem ipsum dolor sit ametLorem ipsum dolor ...</p>
            </div>
          </div>
          <div class="news-block">
            <img
              src="~/assets/img/blog-demo-img-01.jpg"
              alt="blog 1"
              class="img-fluid"
            />
            <div class="news-content">
              <h5>How to invest home</h5>
              <p>Lorem ipsum dolor sit ametLorem ipsum dolor ...</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h5>links</h5>
        <ul class="links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Properties</a></li>
          <li><a href="#">Terms & Policy</a></li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
footer {
  min-height: 100px;
  background-image: url(~assets/img/footer-bg.jpg);
  background-position: center;
  padding: 4rem 0 8rem;
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    color: white;
    gap: 50px;
    section:not(:first-child) {
      margin-top: 2.5rem;
    }
  }
  .detail {
    margin-top: 1rem;
  }
  .social-icons {
    display: flex;
    a {
      margin-right: 5px;
    }
  }
}
.logo-container {
  height: 50px;
}
.logo-container > img {
  width: auto;
  height: 100%;
}
.contact-block {
  img {
    border-radius: 10px;
  }
}
h5 {
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
}
ul.contact-list {
  padding-left: 15px;
  li {
    padding: 0.25rem 1rem;
  }
  li.phone::marker {
    content: url(~assets/img/phone.svg);
  }
  li.email::marker {
    content: url(~assets/img/email.svg);
  }
  li.address::marker {
    content: url(~assets/img/address.svg);
  }
}

.news {
  display: flex;
  flex-direction: column;
}
.news-block {
  display: grid;
  grid-template-columns: 1fr 3.25fr;
  gap: 0.25rem;
  margin-bottom: 1rem;
  img {
    max-width: 60px;
    max-height: 60px;
  }
}
.news-content {
  display: flex;
  flex-direction: column;
  h5 {
    font-weight: 600;
    margin-bottom: 0;
  }
}
ul.links {
  list-style: none;
  padding-left: 0;
  a {
    color: white;
  }
}

@media all and (max-width: $lg) {
  footer {
    .wrapper {
      grid-template-columns: 1fr 1fr;
      section:not(:first-child) {
        margin-top: 0;
      }
    }
    .news-block {
      grid-template-columns: 1fr 2fr;
    }
  }
}
@media all and (max-width: $md) {
  footer {
    padding-bottom: 4rem;
    .wrapper {
      grid-template-columns: 1fr;
    }
    .news {
      display: flex;
      .news-block {
        grid-template-columns: auto 1fr;
      }
    }

    ul.links {
      display: flex;
      * {
        margin-right: 2rem;
      }
    }
  }
}
@media all and (max-width: $sm) {
  footer {
    ul.links {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      * {
        margin-right: 0;
      }
    }
  }
}
</style>
