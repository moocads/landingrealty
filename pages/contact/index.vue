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
      <h2 class="callToAction" data-aos="fade-up">Feel free to send us a message anytime!</h2>
      <div class="forms" data-aos="fade-up">
        <a-tabs default-active-key="contact" class="custom-tab">
          <a-tab-pane key="contact" tab="Contact Us" class="contact">
            <a-form :form="contactForm" @submit="submitContact">
              <a-row :gutter="[30, 0]">
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
  .callToAction {
    margin-top: 50px;
    text-align: center;
    font-size: 30px;
    color: $navy;
  }

.forms {
  padding: 50px 0 100px 0;
  max-width: 600px;
  margin: 0 auto;


  .main-btn {
    width: 100%;
  }

  .contact, .join {
    padding-top: 30px;

    .ant-row {
      padding-bottom: 20px;
    }
  }
}
</style>
