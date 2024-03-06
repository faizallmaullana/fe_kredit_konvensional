<template>
  <span>
    <div class="card">
      <LoginForm />
    </div>
  </span>
</template>

<script>
import LoginForm from "@/components/forms/LoginForm.vue"

export default {
  name: 'LoginPage',

  components: {
    LoginForm,
  }
}
</script>

<style scoped>
@import url(@/styles/card.css);

span {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>