<template>
  <nav>
    <div class="navigation">
      <img src="@/assets/icons/home.png" alt="Home" @click="goToHome">
      <img src="@/assets/icons/clipboard.png" alt="List" @click="goToList">
      <img src="@/assets/icons/user.png" alt="Profile" @click="goToProfile">
    </div>
  </nav>
</template>

<script>
export default {
  name: "AdminNavigation",

  // session handler
  beforeMount() {
    const isAuth = localStorage.getItem('tokenAuth')
    const role = localStorage.getItem('role')

    if (isAuth) {
      if (role != "admin") {
        this.$router.push({ name: 'LandingPage' });
      }
    }
  },

  methods: {
    goToHome() {
      this.$router.push({ name: 'HomePage' })
    },

    goToList() {
      this.$router.push({ name: 'DaftarCustommer' })
    },

    goToProfile() {
      this.$router.push({ name: 'ProfilePage' })
    }
  }
}
</script>

<style scoped>
@import url(@/styles/nav.css)
</style>