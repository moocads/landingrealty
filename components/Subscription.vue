<template>
  <section class="sec-subscribe">
    <div class="navy">
      <div class="wrapper">
        <div class="right-block">
          <form @submit="addSubscription">
            <input
              name="email"
              type="email"
              required
              placeholder="example@email.com"
              v-model="customerEmail"
            />
            <input name="submit" type="submit" value="SUBSCRIBE" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      customerEmail: undefined
    }
  },
  methods: {
    addSubscription(e) {
      e.preventDefault()
      this.$axios.$post('/subscriptions', {
        data: {
          email: this.customerEmail
        }
      }).then(
        res => {
          if (res) {
            this.customerEmail = undefined
            this.$message.success('Subscription success!')
          } else {
            this.$message.error('Uh-Oh, something went wrong.')
          }
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.sec-subscribe {

  .navy {
    padding: 50px 0;
    background-color: $navy;
    color: white;
  }

  .right-block {
    display: flex;
    justify-content: center;
  }
  form {
    justify-content: flex-end;
    display: flex;
    width: 100%;
    max-width: 600px;

    input {
      border: 1px solid white;
    }
    input[type='email'] {
      width: 100%;
      padding-left: 1rem;
      font-size: 16px;
      padding: 0.5rem 1.5rem;
      color: rgba(#000, 0.65);

      &::placeholder {
        color: #b4b4b4;
      }
    }
    input[type='submit'] {
      background-color: $navy;
      font-size: 16px;
      font-weight: 700;
      padding: 0.5rem 1.5rem;
      transition: all 0.5s ease;

      @media (max-width: 576px) {
        padding: 0.5rem 0.5rem;
      }

      &:hover {
        cursor: pointer;
        filter: brightness(1.3);
      }
    }
  }
}
</style>
