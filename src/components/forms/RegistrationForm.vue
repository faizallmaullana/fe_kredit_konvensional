<template>
  <h2>Halaman Registrasi</h2>
  <p v-if="wrongInput">{{ wrongMessage }}</p>

  <form @submit.prevent="confirmSubmit">
    <input type="text" placeholder="Nama..." v-model="name">
    <input type="text" placeholder="Nomor Telpon..." v-model="phone">
    <input :type="passwordVisibility ? 'text' : 'password'" placeholder="Password..." v-model="password">
    <input :type="passwordVisibility ? 'text' : 'password'" placeholder="Konfirmasi password..."
      v-model="confirmPassword">
    <input type="number" placeholder="Token..." v-model="token">
    <p @click="togglePasswordVisibility">Lihat password</p>
    <input type="submit" :value="button" class="submit-button">
  </form>
</template>

<script>
import { axios } from "@/axios/config.js";

export default {
  name: 'RegistrationForm',
  props: {
    role: String
  },

  data() {
    return {
      passwordVisibility: false,
      button: 'Registrasi',
      wrongInput: false,
      wrongMessage: '',

      name: '',
      phone: '',
      password: '',
      confirmPassword: '',
      token: ''
    }
  },

  beforeMount() {
    const isAuth = localStorage.getItem('tokenAuth')
    const role = localStorage.getItem('role')

    if (isAuth) {
        if(role === "mitra") {
          this.$router.push({ name: 'HomePage' });
        }
        if(role === "admin") {
          this.$router.push({ name: 'AdminHomePage' });
      }
    }
  },

  methods: {
    togglePasswordVisibility() {
      this.passwordVisibility = !this.passwordVisibility;
    },

    isValidPassword(password) {
      // Ekspresi reguler untuk memeriksa apakah password memiliki minimal satu huruf kecil, satu huruf besar, dan satu angka.
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      return regex.test(password);
    },

    confirmSubmit() {
      this.button = "Mohon tunggu..."
      this.isChecked = true

      if (this.phone.length < 10) {
        this.wrongInput = true;
        this.wrongMessage = "Nomor telpon tidak valid";
        this.button = "Registrasi";
        return
      }

      if (this.password.length < 8) {
        this.wrongInput = true;
        this.wrongMessage = "Password setidaknya harus berisi 8 digit";
        this.button = "Registrasi";
        return
      }

      if (this.isValidPassword(this.password) === false) {
        this.wrongInput = true;
        this.wrongMessage = "Password harus megandung setidaknya huruf kapital, huruf kecil, dan angka";
        this.button = "Registrasi";
        return
      }

      if (this.password !== this.confirmPassword) {
        this.wrongInput = true;
        this.wrongMessage = "Konfirmasi password tidak cocok";
        this.button = "Registrasi";
        return
      }

      const dataRegister = {
        name: this.name,
        phone: this.phone,
        password: this.password,
        token: this.token,
        role: this.role
      }

      // send data to api
      axios.post("/registration", dataRegister)
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
          console.log(err.response.data.error)
          const error = err.response.data.error

          if (error === "Token not accepted") {
            this.wrongInput = true;
            this.wrongMessage = "Token tidak valid";
            this.button = "Registrasi";
            return
          }

          if (error === "Phone number already used") {
            this.wrongInput = true;
            this.wrongMessage = "Nomor telpon telah terdaftar";
            this.button = "Registrasi";
            return
          }

          if (error === "Invalid phone number") {
            this.wrongInput = true;
            this.wrongMessage = "Nomor telpon tidak valid";
            this.button = "Registrasi";
            return
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