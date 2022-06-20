<i18n>
{
  "en":{
    "about":"About Us",
    "intro1":"Landing Realty Inc. Brokerage is a Full-Service real estate company serving Greater Toronto Area and other cities across Ontario, Canada. We provide a wide variety of real estate services to homeowners & investors including residential/commercial resales, pre-construction sales, rentals, property management, and real estate investment.",
    "intro2":"Leading the newcomers with experiences and helping all become elite, to create a young, dynamic, united, professional, and efficient corporate culture. Our clients are the soil of our company, we not only strive to satisfy our clients during real estate transactions but also help them make more long-term and forward-looking decisions. With years of wealth knowledge and experience in the industry, we do our best to plant & nurture our client's 'real estate seeds' for a fruitful reward.",
    "intro3":"",
    "why":"Why Us",
    "pro":"Professional",
    "exp":"Experienced",
    "reliable":"Reliable",
    "efficient":"Efficient"
  },
  "zh":{
    "about":"关于我们",
    "intro1":"大麦置业是一间集民用房产、商业地产、楼花销售、房屋租赁、房产管理及地产投资开发于一体的综合类房产经纪公司。公司本着以经验带新人，全体菁英化总值，营造出年轻、活力、团结、专业、高效的企业。",
    "intro2":"大麦的土壤就是广大客户，不仅让客户在地产交易中称心满意，更加运用多年在行业中积累的深厚底蕴，帮助客户在投资上，以点及面，从深度和广度上，做出更具有长远性、前瞻性的选择。",
    "intro3":"大麦会全力以赴孕育丰硕的果实里来回报我们的客户。",
    "why":"为什么选择我们",
    "pro":"专业性",
    "exp":"经验丰富",
    "reliable":"真实性",
    "efficient":"高效率"
  }
}
</i18n>
<template>
  <div class="container">
    <section class="header-img">
      <img class="img-fluid" src="/img/about/about-img.jpg" alt="Landing Realty" >
    </section>
    <section class="about">
      <div class="wrapper" data-aos="fade-up">
        <h1>{{$t('about')}}</h1>
        <p>
          {{$t('intro1')}}
        </p>
        <p>
          {{$t('intro2')}}
        </p>
        <p v-if="$i18n.locale === 'zh'">
          {{$t('intro3')}}
        </p>
      </div>
    </section>

    <section class="choose-us">
      <div class="wrapper" data-aos="fade-up">
        <h1>{{$t('why')}}</h1>
        <div class="grid">
          <div class="key-block">
            <div class="placeholder">
              <img src="/img/about/professional.jpg" alt="Landing Realty - Professional">
            </div>
            <p>{{$t('pro')}}</p>
          </div>
          <div class="key-block">
            <div class="placeholder">
              <img src="/img/about/experienced.jpg" alt="Landing Realty - Experienced">
            </div>
            <p>{{$t('exp')}}</p>
          </div>
          <div class="key-block">
            <div class="placeholder">
              <img src="/img/about/reliable.jpg" alt="Landing Realty - Reliable">
            </div>
            <p>{{$t('reliable')}}</p>
          </div>
          <div class="key-block">
            <div class="placeholder">
              <img src="/img/about/efficient.jpg" alt="Landing Realty - Efficient">
            </div>
            <p>{{$t('efficient')}}</p>
          </div>
        </div>
      </div>
    </section>
    <Subscription />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "About | Landing Realty | A Toronto Real Estate Company"
    };
  },
}
</script>

<style lang="scss" scoped>
.about {
  background-color: $navy;
  color: white;
  text-align: center;
  padding: 5rem 0;
  h1 {
    font-size: 38px;
    // line-height: 44.5px;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
  }
  p {
    font-size: 16px;
    line-height: 25px;
  }
}

.header-img img{
  max-height: 60vh;
  object-fit: cover;
}

.choose-us {
  padding: 5rem 0 6rem 0;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;

    @media (max-width: 768px) {
      gap: 20px
    }

    @media (max-width: 576px) {
      gap: 15px
    }
  }
  h1 {
    color: $navy;
    font-size: 38px;
    font-weight: 900;
  }
  .key-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 0 ;
    @media (min-width:1200px) {
      font-size: 30px;
    }
    @media (max-width:576px) {
      font-size: 16px;
    }
  }
  .placeholder {
    width: 100%;
    margin-bottom: 0;
    // padding-bottom: 100%;
    background-color: #c4c4c4;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    

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
  .about {
    padding: 4rem 0;
  }

  .choose-us {
    padding: 4rem 0 ;
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>