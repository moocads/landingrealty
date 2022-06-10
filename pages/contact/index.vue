<template>
  <div class="container">
    <div class="header">
      <img class="img-fluid" src="~/assets/img/contact-header.png" alt="" />
      <div class="blender">
        <div class="wrapper">
          <h1 data-aos="fade-up">Contact Us</h1>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="card" data-aos="fade-up">
        <h2 class="callToAction">Feel free to reach out anytime!</h2>
        <a-row type="flex" :gutter="[50, 50]">
          <a-col :lg="{span:12}" :md="{span:24}" :sm="{span:24}" :xs="{span:24}">
            <div class="contactInfo">
              <h3>Hours</h3>
              <p>Monday - Friday: 10AM - 6PM
                <br/> Saturday: 10AM - 3PM
                <br/> Sunday: Closed
              </p>
              <hr style="opacity:0.3; margin: 30px 0">
              <h3>Contact Information</h3>
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
                  <a href="https://goo.gl/maps/anNTEMmDad13bScA6">
                    <a-icon type="environment" theme="filled" />
                    <span>
                      145 Royal Crest Ct Unit48, 
                    </span>
                    <br>
                    <span>
                      Markham, ON L3R 9Z4
                    </span>
                  </a>
                </li>
              </ul>
              <!-- <a href="https://goo.gl/maps/anNTEMmDad13bScA6">
                <img src="~/assets/img/map.jpg" alt="map" class="img-fluid" />
              </a> -->
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2877.753929098095!2d-79.3273869!3d43.8401999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d553793c0919%3A0x2caa026b569ff136!2sLanding%20Realty%20Inc.!5e0!3m2!1sen!2sca!4v1654548615104!5m2!1sen!2sca" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </a-col>
          <a-col :lg="{span:12}" :md="{span:24}" :sm="{span:24}" :xs="{span:24}">
            <div class="forms">
              <a-tabs default-active-key="contact" class="custom-tab">
                <a-tab-pane key="contact" tab="Contact Us" class="contact">
                  <a-form :form="contactForm" @submit="submitContact">
                    <a-row :gutter="[20, 0]">
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item label="First Name">
                          <a-input placeholder="Jane" v-decorator="['firstName', {rules: [{ required: true, message: 'Required' }]}]"></a-input>
                        </a-form-item>
                      </a-col>
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item label="Last Name">
                          <a-input placeholder="Doe" v-decorator="['lastName', {rules: [{ required: true, message: 'Required' }]}]"></a-input>
                        </a-form-item>
                      </a-col>
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item label="Phone">
                          <a-input placeholder="123-456-7890" v-decorator="['phone', {rules: [{ required: true, message: 'Required' }]}]"></a-input>
                        </a-form-item>
                      </a-col>
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item label="Email">
                          <a-input placeholder="jane.doe@mail.com" v-decorator="['email', {rules: [{type: 'email', message: 'Not a valid email'},{required: true, message: 'Required' }]}]"></a-input>
                        </a-form-item>
                      </a-col>
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item label="I'm looking to:">
                          <a-select placeholder="Please select" v-decorator="['intent']">
                            <a-select-option value="lease">
                              Lease
                            </a-select-option>
                            <a-select-option value="rent">
                              Rent Out                        
                            </a-select-option>
                            <a-select-option value="sell">
                              Sell
                            </a-select-option>
                            <a-select-option value="buy">
                              Buy
                            </a-select-option>
                          </a-select>
                        </a-form-item>
                      </a-col>
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item label="Property Type:">
                          <a-select placeholder="Please select" v-decorator="['type']">
                            <a-select-option value="house">
                              House
                            </a-select-option>
                            <a-select-option value="condo">
                              Condominium    
                            </a-select-option>
                            <a-select-option value="precon">
                              Pre-Construction
                            </a-select-option>
                            <a-select-option value="commercial">
                              Commercial
                            </a-select-option>
                          </a-select>
                        </a-form-item>
                      </a-col>
                      <a-col :span="24">
                        <a-form-item label="Message">
                          <a-textarea :rows="4" placeholder="Please leave your message here." v-decorator="['message', {rules: [{ required: true, message: 'Required' }]}]">
                          </a-textarea>
                        </a-form-item>
                      </a-col>
                    </a-row>
                    <button class="main-btn" style="margin:0 auto" type="submit">Submit</button>
                  </a-form>
                </a-tab-pane>
                <a-tab-pane key="join" tab="Join Us" class="join">
                  <a-form :form="joinForm" @submit="submitJoin">
                    <a-row :gutter="[30,0]">
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item label="First Name">
                          <a-input placeholder="Jane" v-decorator="['firstName', {rules: [{ required: true, message: 'Required' }]}]"></a-input>
                        </a-form-item>
                      </a-col>
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item label="Last Name">
                          <a-input placeholder="Doe" v-decorator="['lastName', {rules: [{ required: true, message: 'Required' }]}]"></a-input>
                        </a-form-item>
                      </a-col>
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item label="Phone">
                          <a-input placeholder="123-456-7890" v-decorator="['phone', {rules: [{ required: true, message: 'Required' }]}]"></a-input>
                        </a-form-item>
                      </a-col>
                      <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                        <a-form-item label="Email">
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
                        <a-form-item label="Cover Letter">
                          <a-textarea :rows="4" placeholder="Please write your cover letter here." v-decorator="['coverLetter']">
                          </a-textarea>
                        </a-form-item>
                      </a-col>
                    </a-row>
                    <button class="main-btn" style="margin:0 auto" type="submit">Submit</button>
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

  .contactInfo {
    h3 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 15px;
    }

    p {
      font-size: 16px;
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
          }
        }

        &.phone {
          i {
            transform: rotateY(180deg);
          }
        }

        &.address {
          span:nth-of-type(2) {
            display: block;
            padding-left: 45px;
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
