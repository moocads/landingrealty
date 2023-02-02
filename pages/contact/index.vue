<i18n>
{
  "en": {
    "contact":"Contact Us: ",
    "contact2":"Feel free to reach out anytime!",
    "hours":"Business Hours",
    "monFri":"Monday - Friday: ",
    "sat":"Saturday: ",
    "sun":"Sunday: ",
    "contactInfo":"Contact Information",
    "joinUs":"Join Us",
    "first":"First Name",
    "last":"Last Name",
    "phone":"Phone",
    "email":"Email",
    "looking":"I'm looking to",
    "lease":"Lease",
    "rent":"Rent Out",
    "sell":"Sell",
    "buy":"Buy",
    "style":"Property Style",
    "house":"House",
    "condo":"Condominium",
    "precon":"Pre-Construction",
    "commercial":"Commercial",
    "coverLetter":"Cover Letter",
    "writeCoverLetter":"Please write your CV and/or cover letter here",
    "message":"Message",
    "select":"Please Select",
    "leaveMsg":"Please leave your message here.",
    "closed":"Closed",
    "submit":"Submit"
  },
  "zh":{
    "contact":"联系我们",
    "contact2":"请随时联系我们",
    "hours":"营业时间",
    "monFri":"周一至周五：",
    "sat":"周六：",
    "sun":"周日：",
    "contactInfo":"联系信息",
    "joinUs":"加入我们",
    "first":"名",
    "last":"姓",
    "phone":"电话",
    "email":"邮箱",
    "looking":"我想",
    "lease":"租房",
    "rent":"出租",
    "sell":"卖房",
    "buy":"买房",
    "style":"房型",
    "house":"独立屋",
    "condo":"公寓",
    "precon":"楼花",
    "commercial":"商业房",
    "coverLetter":"简历",
    "writeCoverLetter":"请在此填写您的工作经验。",
    "message":"留言",
    "select":"请选",
    "leaveMsg":"请在此留言。",
    "closed":"歇业",
    "submit":"提交"
  },
  "tc":{
    "contact":"聯繫我們",
    "contact2":"請隨時聯繫我們",
    "hours":"營業時間",
    "monFri":"週一至週五：",
    "sat":"週六：",
    "sun":"週日：",
    "contactInfo":"聯繫信息",
    "joinUs":"加入我們",
    "first":"名",
    "last":"姓",
    "phone":"電話",
    "email":"郵箱",
    "looking":"我想",
    "lease":"租房",
    "rent":"出租",
    "sell":"賣房",
    "buy":"買房",
    "style":"房型",
    "house":"獨立屋",
    "condo":"公寓",
    "precon":"樓花",
    "commercial":"商業房",
    "coverLetter":"簡歷",
    "writeCoverLetter":"請在此填寫您的工作經驗。",
    "message":"留言",
    "select":"請選",
    "leaveMsg":"請在此留言。",
    "closed":"歇業",
    "submit":"提交"
  }
}
</i18n>
<template>
  <div class="container">
    <div class="header">
      <img class="img-fluid" src="~/assets/img/contact-header.png" alt="" />
      <div class="blender">
        <div class="wrapper">
          <h1 data-aos="fade-up">{{$t('contact')}}</h1>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="card" data-aos="fade-up">
        <h2 class="callToAction">{{$t('contact2')}}</h2>
        <a-row type="flex" :gutter="[50, 50]">
          <a-col :lg="{span:12}" :md="{span:24}" :sm="{span:24}" :xs="{span:24}">
            <div class="contactInfo">
              <h3>{{$t('hours')}}</h3>
              <p>{{$t('monFri')}} 10AM - 6PM
                <br/> {{$t('sat')}} 10AM - 3PM
                <br/> {{$t('sun')}} {{$t('closed')}}
              </p>
              <hr style="opacity:0.3; margin: 30px 0">
              <h3>{{$t('contactInfo')}}</h3>
              <ul>
                <li class="phone">
                  <a href="tel:9056047171">
                    <a-icon type="phone" theme="filled" />
                    <span>
                      (905) 604-7171
                    </span>
                  </a>
                </li>
                <li class="fax">
                  <a href="tel:9056047171">
                    <a-icon type="printer" theme="filled" />
                    <span>
                      (905) 604-7161
                    </span>
                  </a>
                </li>
                <li class="email">
                  <a href="mailto:info@landingrealestate.com">
                    <a-icon type="mail" theme="filled" />
                    <span>
                      info@landingrealestate.com
                    </span>
                  </a>
                </li>
                <li class="address">
                  <a href="https://goo.gl/maps/e9u4Z1dZJvFQWfqw8">
                    <a-icon type="environment" theme="filled" />
                    <span>
                      7181 Woodbine Ave, Unit 226 
                    </span>
                    <br>
                    <span>
                      Markham, ON L3R 1A3
                    </span>
                  </a>
                </li>
              </ul>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.7998645375924!2d-79.3507794842188!3d43.81851054974268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3651adb37af%3A0x3ad2916fdeb2d12a!2s7181%20Woodbine%20Ave%20%23226%2C%20Markham%2C%20ON%20L3R%201A3!5e0!3m2!1sen!2sca!4v1675094438946!5m2!1sen!2sca" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </a-col>
          <a-col :lg="{span:12}" :md="{span:24}" :sm="{span:24}" :xs="{span:24}">
            <div class="forms">
              <a-tabs default-active-key="contact" class="custom-tab">
                <a-tab-pane key="contact" :tab="$t('contact')" class="contact">
                  <a-form :form="contactForm" @submit="submitContact">
                    <a-row :gutter="[20, 0]">
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item :label="$t('first')">
                          <a-input placeholder="Jane" v-decorator="['firstName', {rules: [{ required: true, message: 'Required' }]}]"></a-input>
                        </a-form-item>
                      </a-col>
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item :label="$t('last')">
                          <a-input placeholder="Doe" v-decorator="['lastName', {rules: [{ required: true, message: 'Required' }]}]"></a-input>
                        </a-form-item>
                      </a-col>
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item :label="$t('phone')">
                          <a-input placeholder="123-456-7890" v-decorator="['phone', {rules: [{ required: true, message: 'Required' }]}]"></a-input>
                        </a-form-item>
                      </a-col>
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item :label="$t('email')">
                          <a-input placeholder="jane.doe@mail.com" v-decorator="['email', {rules: [{type: 'email', message: 'Not a valid email'},{required: true, message: 'Required' }]}]"></a-input>
                        </a-form-item>
                      </a-col>
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item :label="`${$t('looking')}:`">
                          <a-select :placeholder="$t('select')" v-decorator="['intent']">
                            <a-select-option value="lease">
                              {{$t('lease')}}
                            </a-select-option>
                            <a-select-option value="rent">
                              {{$t('rent')}}                     
                            </a-select-option>
                            <a-select-option value="sell">
                              {{$t('sell')}}
                            </a-select-option>
                            <a-select-option value="buy">
                              {{$t('buy')}}
                            </a-select-option>
                          </a-select>
                        </a-form-item>
                      </a-col>
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item :label="`${$t('style')}:`">
                          <a-select :placeholder="$t('select')" v-decorator="['type']">
                            <a-select-option value="house">
                              {{$t('house')}}
                            </a-select-option>
                            <a-select-option value="condo">
                              {{$t('condo')}} 
                            </a-select-option>
                            <a-select-option value="precon">
                              {{$t('precon')}}
                            </a-select-option>
                            <a-select-option value="commercial">
                              {{$t('commercial')}}
                            </a-select-option>
                          </a-select>
                        </a-form-item>
                      </a-col>
                      <a-col :span="24">
                        <a-form-item :label="$t('message')">
                          <a-textarea :rows="4" :placeholder="$t('leaveMsg')" v-decorator="['message', {rules: [{ required: true, message: 'Required' }]}]">
                          </a-textarea>
                        </a-form-item>
                      </a-col>
                    </a-row>
                    <button class="main-btn" style="margin:0 auto" type="submit">{{$t('submit')}}</button>
                  </a-form>
                </a-tab-pane>
                <a-tab-pane key="join" :tab="$t('joinUs')" class="join">
                  <a-form :form="joinForm" @submit="submitJoin">
                    <a-row :gutter="[30,0]">
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item :label="$t('first')">
                          <a-input placeholder="Jane" v-decorator="['firstName', {rules: [{ required: true, message: 'Required' }]}]"></a-input>
                        </a-form-item>
                      </a-col>
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item :label="$t('last')">
                          <a-input placeholder="Doe" v-decorator="['lastName', {rules: [{ required: true, message: 'Required' }]}]"></a-input>
                        </a-form-item>
                      </a-col>
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item :label="$t('phone')">
                          <a-input placeholder="123-456-7890" v-decorator="['phone', {rules: [{ required: true, message: 'Required' }]}]"></a-input>
                        </a-form-item>
                      </a-col>
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item :label="$t('email')">
                          <a-input placeholder="jane.doe@mail.com" v-decorator="['email', {rules: [{type: 'email', message: 'Not a valid email'},{ required: true, message: 'Required' }]}]"></a-input>
                        </a-form-item>
                      </a-col>
                      <!-- <a-col :span="24">
                        <a-upload :file-list="resumeFile" :before-upload="beforeUpload">
                          <a-button><a-icon type="upload"></a-icon> Upload Resume</a-button>
                          <br>
                          <br>
                        </a-upload>
                      </a-col> -->
                      <a-col :span="24">
                        <a-form-item :label="$t('coverLetter')">
                          <a-textarea :rows="4" :placeholder="$t('writeCoverLetter')" v-decorator="['coverLetter']">
                          </a-textarea>
                        </a-form-item>
                      </a-col>
                    </a-row>
                    <button class="main-btn" style="margin:0 auto" type="submit">{{$t('submit')}}</button>
                  </a-form>
                </a-tab-pane>
              </a-tabs>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <Subscription />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Contact | Landing Realty | A Toronto Real Estate Company"
    };
  },
  data() {
    return {
      contactForm: this.$form.createForm(this),
      joinForm: this.$form.createForm(this),
      resumeFile: []
    }
  },
  methods: {
    submitContact(e) {
      e.preventDefault()
      this.contactForm.validateFields(async (err, values) => {
        if (!err) {
          this.$axios.$post('/contacts', {data: {
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            email: values.email,
            intent: values.intent,
            type: values.type,
            message: values.message,
          }}).then(
            res => {
              if (res) {
                this.$message.success('Message received! We\'ll get back to you as soon as possible!')
                this.contactForm = this.$form.createForm(this)
              } else {
                this.$message.success('Uh oh! Your message wasn\'t sent. Please try again.')
              }
            }
          )
        }
      })
    },
    submitJoin(e) {
      e.preventDefault()
      this.joinForm.validateFields(async (err, values) => {
        if (!err) {
          // const fd = new FormData()
          this.$axios.$post('/joins', {data: {
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            email: values.email,
            coverLetter: values.coverLetter,
          }}).then(
            res => {
              if (res) {
                this.$message.success('Application received! We\'ll get back to you as soon as possible!')
                this.joinForm = this.$form.createForm(this)
              } else {
                this.$message.success('Uh oh! Your application wasn\'t sent. Please try again.')
              }
            }
          )
        }
      })
    },
    beforeUpload(file) {
      this.resumeFile = [file]      
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  max-height: 60vh;
  position: relative;

  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }

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
      font-size: 38px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
}

.card {
  background: #fff;
  padding: 50px;
  margin: 50px 0;
  .callToAction {
    margin-bottom: 50px;
    text-align: center;
    font-size: 26px;
    color: $navy;
  }

  @media (max-width: 576px) {
    padding: 20px;
  }

  .contactInfo {
    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      color: #727272;
    }

    ul {
      list-style: none;
      padding-left: 0;
      margin-bottom: 30px;

      li {
        margin-bottom: 15px;
        // display: flex;
        // align-items: center;
        a {
          font-size: 16px;
          color: #727272;

          i {
            color: $navy;
            font-size: 20px;
            margin-right: 20px;
            @media (max-width: 576px) {
              margin-right: 10px;
              font-size: 16px;
            }
          }
        }

        &.phone {
          i {
            transform: scaleX(-1);
          }
        }

        &.address {
          span:nth-of-type(2) {
            display: block;
            padding-left: 45px;

            @media (max-width: 576px) {
              padding-left: 35px;
            }
          }
        }
      }
    }

    iframe {
      max-width: 100%;
    }
  }

  .forms {
    // max-width: 600px;
    margin: 0 auto;


    .main-btn {
      width: 100%;
    }

    .contact, .join {
      padding-top: 30px;

      // .ant-row {
      //   padding-bottom: 20px;
      // }
    }
  }
}
</style>
