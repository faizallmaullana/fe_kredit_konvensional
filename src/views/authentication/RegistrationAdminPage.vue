<template>
  <span>
    <div class="card">
      <RegistrationForm role="admin"/>
    </div>
  </span>
</template>

<script>
import RegistrationForm from "@/components/forms/RegistrationForm.vue"

export default {
  name: 'RegistrationPage',

  components: {
    RegistrationForm,
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