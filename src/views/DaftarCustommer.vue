<template>
  <div class="card blue">
    <div class="divider">
      <div class="left-content">
        <img src="@/assets/icons/group.png" alt="customer">
        <p>Customer</p>
      </div>
      <div class="right-content">
        <h1>34 Aktif</h1>
        <p>Total 50 Customer</p>
      </div>
    </div>

    <div class="divider">
      <div class="left-content">
        <img src="@/assets/icons/statistics.png" alt="wallet">
        <p>KreditKu</p>
      </div>
      <div class="right-content">
        <h1>Rp100.000.000</h1>
      </div>
    </div>
  </div>

  <!-- search bar -->
  <div class="search">
    <input type="text" placeholder="Cari nama custommer...">
    <img src="@/assets/icons/search.png" alt="Search">
  </div>

  <!-- cards -->
  <div class="card row">
    <div class="head">
      <h3>Paisal Tanjung</h3>
      <p>085109832164 | Margahayu Bekasi Timur</p>
    </div>

    <div class="shape">
      <p>Rp2.300.000</p>
    </div>
  </div>

  <div class="card row">
    <div class="head">
      <h3>Paisal Tanjung</h3>
      <p>085109832164 | Margahayu Bekasi Timur</p>
    </div>

    <div class="shape">
      <p>Rp2.300.000</p>
    </div>
  </div>

  <div class="card row">
    <div class="head">
      <h3>Paisal Tanjung</h3>
      <p>085109832164 | Margahayu Bekasi Timur</p>
    </div>

    <div class="shape">
      <p>Rp2.300.000</p>
    </div>
  </div>

  <div class="card row">
    <div class="head">
      <h3>Paisal Tanjung</h3>
      <p>085109832164 | Margahayu Bekasi Timur</p>
    </div>

    <div class="shape">
      <p>Rp2.300.000</p>
    </div>
  </div>

  <div class="card row">
    <div class="head">
      <h3>Paisal Tanjung</h3>
      <p>085109832164 | Margahayu Bekasi Timur</p>
    </div>

    <div class="shape">
      <p>Lunas</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DaftarCustommer',

}
</script>

<style scoped>
@import url(@/styles/card.css);
@import url(@/styles/button.css);
@import url(@/styles/search.css);

.card h3 {
  margin-block-start: 0;
}

.row {
  display: flex;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: center;
}

.card .shape p {
  font-weight: 900;
}

.card .divider h1 {
  margin-block: 0;
  text-align: right;
}
</style>