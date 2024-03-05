<template>
  <!-- <nav>
    <div class="navigation">
      <p>a</p>
      <p>b</p>
      <p>c</p>
    </div>
    <p>_____</p>
    <h2>Nama Halaman</h2>
  </nav> -->
  <div class="body">
    <router-view/>
  </div>
</template>

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

  --color-green: #42b983;
  --color-red: #db1010;
  --color-blue: #1f62c7;
}

.body {
  padding: 0;
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

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 15px 20px 15px;
  background-color: #42b983;
  color: white;
  font-weight: 500;
  min-height: 100px;
  margin: 0;
  width: calc(100vw - 30px);
}

nav .navigation {
  display: flex;
  gap: 10px;
}

nav p{
  margin-block: 0 ;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 22px;
}
</style>
