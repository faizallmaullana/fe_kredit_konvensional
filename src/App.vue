<template>
  <div class="body">
    <router-view/>
    <div class="gap-bottom" v-if="isActivePage"></div>
  </div>
  <AdminNavigasi v-if="isAdminPage" />
  <MitraNavigasi v-if="isActivePage" />
</template>

<script>
import MitraNavigasi from "@/components/navigation/MitraNavigation.vue"
import AdminNavigasi from "@/components/navigation/AdminNavigation.vue"

export default {
  components: {
    MitraNavigasi,
    AdminNavigasi
  },
  
  computed: {
    isActivePage() {
      // Check if the current route is one of the specified pages
      const validPages = ['HomePage', 'DaftarCustommer', 'ProfilePage', 'NewCreditPage'];
      return validPages.includes(this.$route.name);
    },

    isAdminPage() {
      // Check if the current route is one of the specified pages
      const validPages = ['AdminHomePage'];
      return validPages.includes(this.$route.name);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f7f7f7;
  padding: 0;
  margin: 0;

  --color-green: #33ca77;
  --color-red: #ca3333;
  --color-blue: #1f62c7;
  --color-black: #2c3e50;
  --color-base: #f7f7f7

}

.body {
  margin: 0 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  background-color: #f7f7f7;
}

.gap-bottom {
  height: 80px;
}

h2 {
  font-size: 22px;
}

.header {
  width: 100%;
  background-color: var(--color-blue);
  color: white;
}

.red {
  font-size: 11px !important;
  color: var(--color-red) !important;
  font-style: italic !important;
  text-align: center !important;
}
</style>
