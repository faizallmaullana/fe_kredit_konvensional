<template>
  <div class="container">
    <h1>Kang Kredit</h1>
    <span>
      <button type="submit" @click="toggleToLogin">Login</button>
      <button type="submit" @click="toggleToRegistration">Registrasi</button>
    </span>
  </div>
</template>

<script>

export default {
  name: 'LandingPage',

  methods: {
    toggleToLogin() {
      this.$router.push({ name: 'LoginPage' });
    },

    toggleToRegistration() {
      this.$router.push({ name: 'RegistrationPage' });
    }
  }
}
</script>

<style scoped>
@import url(@/styles/card.css);
@import url(@/styles/button.css);

span {
  display: flex;
  gap: 10px;
}

.container {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button {
  min-width: 100px;
}
</style>