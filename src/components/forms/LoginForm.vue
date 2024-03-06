<template>
  <p v-if="wrongInput">{{ wrongInputValue }}</p>

  <form @submit.prevent="toggleSubmit">
    <input type="text" placeholder="Nomor Telpon..." v-model="phone">
    <input :type="passwordVisibility ? 'text' : 'password'" placeholder="Password..." v-model="password">
    <p @click="togglePasswordVisibility">Lihat password</p>
    <input type="submit" :value="buttonValue" class="submit-button">
  </form>
</template>

<script>
import { axios } from "@/axios/config";

export default {
  name: 'LoginForm',

  data() {
    return {
      passwordVisibility: false,
      wrongInput: false,
      wrongInputValue: '',
      buttonValue: 'Masuk',

      phone: '',
      password: ''
    }
  },

  beforeMount() {
    const isAuth = localStorage.getItem('isAuth')
    const role = localStorage.getItem('role')

    if(isAuth === "true") {
      if(role === "mitra") {
        this.$router.push({ name: 'HomePage' });
      }
    }
  },

  methods: {
    togglePasswordVisibility() {
      this.passwordVisibility = !this.passwordVisibility;
    },

    toggleSubmit() {
      this.button = "Mohon Tunggu...";

      const dataLogin = {
        phone: this.phone,
        password: this.password,
      }

      axios.post("/login", dataLogin)
      .then((response) => {
        const data = response.data;
          console.log(data)
          localStorage.setItem('id', data.user.id);
          localStorage.setItem('role', data.user.role);
          localStorage.setItem('phone', data.user.phone);
          localStorage.setItem('tokenAuth', data.tokenAuth);
          localStorage.setItem('isAuth', true);

          window.location.reload();
      })
      .catch((err) => {
        const statusCode = err.response.status

        if(statusCode === 401) {
          this.buttonValue = "Registrasi";
          this.wrongInput = true;
          this.wrongInputValue = "Nomor telpon atau password salah"
        }
      })
    }
  }
}
</script>

<style scoped>
@import url(@/styles/form.css);
@import url(@/styles/button.css);

p {
  text-align: left;
  font-style: italic;
  color: var(--color-red);
}

h2 {
  color: var(--color-green);
  margin-block-start: 0;
}

</style>