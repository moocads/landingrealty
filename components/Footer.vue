<template>
  <footer>
    <div class="wrapper">
      <div class="logo-container">
        <img src="~/assets/img/nav-logo.png" alt="" />
      </div>
      <div class="footer-container">
        <section>
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
            <li class="email">
              <a href="mailto:info@landingrealestate.com">info@landingrealestate.com</a>
            </li>
            <li class="address">
              145 Royal Crest Ct Unit48, Markham, ON L3R 9Z4
            </li>
          </ul>
          <img src="~/assets/img/map.jpg" alt="map" class="img-fluid" />
        </section>
        <section>
          <h5>Lastest News</h5>
          <div class="news">
            <div v-for="b in blogs" :key="b.id">
              <NuxtLink class="news-block" :to="`/news/${b.attributes.slug}`">
                <img
                  v-if="b.attributes.thumbnail.data"
                  :src="b.attributes.thumbnail.data.attributes.url"
                  :alt="b.attributes.title"
                />
                <div class="news-content">
                  <h5>{{ b.attributes.title }}</h5>
                  <!-- <p>{{b.attributes.blurb}}</p> -->
                </div>
              </NuxtLink>
            </div>
          </div>
        </section>
        <section>
          <h5>links</h5>
          <ul class="links">
            <li><NuxtLink to="/about">About Us</NuxtLink></li>
            <li><NuxtLink to="/projects/pre-construction">Pre-Construction</NuxtLink></li>
            <li><NuxtLink to="/projects/resales">Resales</NuxtLink></li>
            <li><NuxtLink to="/news">News</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </section>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      blogs: undefined,
    }
  },
  created() {
    this.$axios
      .$get('/blogs', {
        params: {
          populate: ['thumbnail'],
          pagination: {
            start: 0,
            limit: 3,
          },
        },
      })
      .then((res) => {
        this.blogs = res.data
      })
  },
}
</script>

<style lang="scss" scoped>
footer {
  min-height: 100px;
  background-image: url(~assets/img/footer-bg.jpg);
  background-position: center;
  background-size: cover;
  padding: 4rem 0 8rem;
  .wrapper {

    .footer-container {
      display: grid;
      grid-template-columns: 4fr 4fr 4fr 3fr;
      color: white;
      gap: 50px;
    }
  }
  .social-icons {
    display: flex;
    a {
      margin-right: 5px;
    }
  }
}
.logo-container {
  height: 60px;
  margin-bottom: 30px;
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
  li.email{
    a{
      color: white;
    }
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
  display: flex;

  img {
    width: 25%;
  }
}
.news-content {
  display: flex;
  flex-direction: column;
  h5 {
    font-weight: 600;
    margin-bottom: 0;
    display: -webkit-box;
    line-height: 1.5;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
ul.links {
  list-style: none;
  padding-left: 0;
  li {
    margin-bottom: 10px;

    a {
      color: white;
    }
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
