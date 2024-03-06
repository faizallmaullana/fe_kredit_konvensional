<template>
  <div class="card blue">
    <div class="divider">
      <div class="left-content">
        <img src="@/assets/icons/wallet.png" alt="wallet">
        <p>DompetKu</p>
      </div>
      <div class="right-content">
        <h1>Rp30.000</h1>
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

    <p>Kredit Baru</p>
  </div>

  <!-- search bar -->
  <div class="search">
    <input type="text" placeholder="Cari nama custommer...">
    <img src="@/assets/icons/search.png" alt="Search">
  </div>

  <!-- data yang hari ini harus bayar -->
  <div class="card">
    <div class="head">
      <h3>Paisal Tanjung</h3>
      <p>08XXX | Margahayu</p>
    </div>

    <span>
      <p id="periode">Mingguan</p>
      <p>setiap Senin</p>
    </span>

    <span>
      <div>
        <p>Cicilan</p>
        <h2>Rp300.000</h2>
      </div>

      <div>
        <p>Sisa</p>
        <h2>Rp2.550.000</h2>
      </div>
    </span>
  </div>

  <div class="card">
    <div class="head">
      <h3>Paisal Tanjung</h3>
      <p>08XXX | Margahayu</p>
    </div>

    <span>
      <p id="periode">Mingguan</p>
      <p>setiap Senin</p>
    </span>

    <span>
      <div>
        <p>Cicilan</p>
        <h2>Rp300.000</h2>
      </div>

      <div>
        <p>Sisa</p>
        <h2>Rp2.550.000</h2>
      </div>
    </span>
  </div>

  <div class="card">
    <div class="head">
      <h3>Paisal Tanjung</h3>
      <p>08XXX | Margahayu</p>
    </div>

    <span>
      <p id="periode">Mingguan</p>
      <p>setiap Senin</p>
    </span>

    <span>
      <div>
        <p>Cicilan</p>
        <h2>Rp300.000</h2>
      </div>

      <div>
        <p>Sisa</p>
        <h2>Rp2.550.000</h2>
      </div>
    </span>
  </div>
</template>

<script>

export default {
  name: 'HomePage',

}
</script>

<style scoped>
@import url(@/styles/card.css);
@import url(@/styles/button.css);
@import url(@/styles/search.css);
</style>