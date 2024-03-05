<template>
  <h2>Halaman Registrasi</h2>
  <p v-if="wrongUsername">Username/password salah...</p>

  <form>
    <input type="text" placeholder="Nomor Telpon...">
    <input :type="passwordVisibility ? 'text' : 'password'" placeholder="Password...">
    <input :type="passwordVisibility ? 'text' : 'password'" placeholder="Konfirmasi password...">
    <input type="text" placeholder="Token...">
    <p @click="togglePasswordVisibility">Lihat password</p>
    <button type="submit" @click="toggleSubmit">{{button}}</button>
  </form>
</template>

<script>
export default {
  name: 'RegistrationForm',

  data() {
    return {
      passwordVisibility: false,
      wrongUsername: false,
      button: 'Masuk'
    }
  },

  methods: {
    togglePasswordVisibility() {
      this.passwordVisibility = !this.passwordVisibility;
    },

    toggleSubmit() {
      this.button = "Mohon Tunggu...";
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