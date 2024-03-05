<template>
  <h2>Daftar Custommer</h2>
  <p>Di sini ada pilihan, Lunas, Belum Lunas, Semua Data, dan Tagihan Hari ini</p>

  <div class="card">
    <div class="head">
      <h3>Paisal Tanjung</h3>
      <p>08XXX | Margahayu</p>
    </div>

    <span>
      <p id="periode">Mingguan</p>
      <p>setiap Senin</p>
    </span>

    <div class="list">
      <span>
        <p>Vivo Y83</p>
        <p>20.000</p>
      </span>

      <span>
        <p>Vivo Y83</p>
        <p>30.000</p>
      </span>
    </div>


    <button>Bayar</button>
  </div>

  <div class="card">
    <div class="head">
      <h3>Paisal Tanjung</h3>
      <p>08XXX | Margahayu</p>
    </div>

    <h4>Lunas</h4>
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

.card {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card h3,
.card p {
  text-align: left;
}

.card p {
  margin-block: 0;
}

.card span {
  display: flex;
  justify-content: space-between;
}

.card h4 {
  color: white;
  background-color: var(--color-blue);
  padding: 10px;
  border-radius: 3px;
}

.card h3 {
  color: var(--color-green);
  margin-block: 0.5em;
}

button {
  width: 100%;
}

#periode {
  font-weight: 500;
}
</style>