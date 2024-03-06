<template>
  <h1>test</h1>
  <h1>{{ token }}</h1>
</template>

<script>
import { axios } from "@/axios/config.js"
export default {
  name: "TokenRegistration",

  data() {
    return {
      token: ''
    }
  },

    async mounted() {
    try {
      const response = await axios.get("/token");
      this.token = response.data.token
    } catch (error) {
      console.error(error);
    }
  }
}
</script>