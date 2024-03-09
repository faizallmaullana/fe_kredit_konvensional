<template>

  <!-- form to add new credit -->
  <!-- user have an option to choose new or current customer -->


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


  <form @submit.prevent="submitConfirmation">
    <div class="card">
      <div class="radio">
        <div>
          <input required type="radio" id="new_customer" v-model="customer_type" value="new_customer">
          <label for="new_customer">Customer Baru</label>
        </div>

        <div>
          <input required type="radio" id="current_customer" v-model="customer_type" value="current_customer">
          <label for="current_customer">Customer Lama</label>
        </div>
      </div>

      <form v-if="customer_type.length > 0 && customer_type === 'new_customer'">
        <input required type="text" placeholder="Nama Customer..." v-model="namaCustomer">
        <input type="text" placeholder="Nomor Telpon Customer..." v-model="nomorTelponCustomer">
        <input type="text" placeholder="Alamat Customer..." v-model="alamatCustomer">
      </form>

      <form v-if="customer_type.length > 0 && customer_type === 'current_customer'">
        <!-- search bar -->
        <div class="search">
          <input type="text" placeholder="Cari nama custommer..." v-model="searchCustomer">
          <img src="@/assets/icons/search.png" alt="Search" @click="findCustomer">
        </div>
        <p class="red" v-if="statusSearchCustomer">{{ messageSearchCustomer }}</p>
      </form>
    </div>

    <div class="card">
      <input required v-model="product" type="text" placeholder="Nama product...">
      <input required v-model="hargaModal" type="number" placeholder="Harga modal...">
      <input required v-model="hargaJual" type="number" placeholder="Harga jual...">
      <input required v-model="cicilan" type="number" placeholder="Cicilan...">

      <p style="text-align: left !important;"><strong>Periode cicilan...</strong></p>
      <div id="periode" class="radio">
        <div>
          <input required type="radio" id="harian" v-model="periode" value="Harian">
          <label for="harian">Harian</label>
        </div>

        <div>
          <input required type="radio" id="mingguan" v-model="periode" value="Mingguan">
          <label for="mingguan">Mingguan</label>
        </div>

        <div>
          <input required type="radio" id="bulanan" v-model="periode" value="Bulanan">
          <label for="bulanan">Bulanan</label>
        </div>
      </div>

      <!--  -->

      <p v-if="periode === 'Mingguan'" style="text-align: left !important;"><strong>Cicilan setiap hari...</strong></p>
      <div v-if="periode === 'Mingguan'" id="hariCicilan" class="radio">
        <div>
          <input required type="radio" id="Senin" v-model="hariCicilan" value="Senin">
          <label for="Senin">Senin</label>
        </div>

        <div>
          <input required type="radio" id="Selasa" v-model="hariCicilan" value="Selasa">
          <label for="Selasa">Selasa</label>
        </div>

        <div>
          <input required type="radio" id="Rabu" v-model="hariCicilan" value="Rabu">
          <label for="Rabu">Rabu</label>
        </div>

        <div>
          <input required type="radio" id="Kamis" v-model="hariCicilan" value="Kamis">
          <label for="Kamis">Kamis</label>
        </div>

        <div>
          <input required type="radio" id="Jumat" v-model="hariCicilan" value="Jumat">
          <label for="Jumat">Jumat</label>
        </div>

        <div>
          <input required type="radio" id="Sabtu" v-model="hariCicilan" value="Sabtu">
          <label for="Sabtu">Sabtu</label>
        </div>

        <div>
          <input required type="radio" id="Minggu" v-model="hariCicilan" value="Minggu">
          <label for="Minggu">Minggu</label>
        </div>
      </div>

      <input type="submit" class="submit-button" value="Tambahkan Data">
    </div>
  </form>


  <!-- konfirmasi -->
  <div v-if="confirmation" class="confirmation">
    <div class="card">
      <div class="head">
        <h3>{{ namaCustomer }}</h3>
        <p v-if="nomorTelponCustomer">{{ nomorTelponCustomer }}</p>
        <p v-if="alamatCustomer">{{ alamatCustomer }}</p>
      </div>

      <span>
        <p id="periode"><strong>{{ periode }}</strong></p>
        <p v-if="periode === 'mingguan'">setiap {{ hariCicilan }}</p>
      </span>

      <span>
        <p id="periode"><strong>Harga Modal</strong></p>
        <p>Rp{{ hargaModal }}</p>
      </span>

      <span>
        <div>
          <p>Cicilan</p>
          <h2>Rp{{ cicilan }}</h2>
        </div>

        <div>
          <p>Harga Jual</p>
          <h2>Rp{{ hargaJual }}</h2>
        </div>
      </span>

      <div class="data-confirmation">
        <button @click="back" class="not">Kembali</button>
        <button @submit.prevent="submitData" type="submit" class="yes">Lanjutkan</button>
      </div>
    </div>
  </div>

</template>

<script>
import { axios } from "@/axios/config.js"

export default {
  name: "NewCredit",

  data() {
    return {
      idCustomer: '',

      customer_type: '',
      namaCustomer: '',
      nomorTelponCustomer: '',
      alamatCustomer: '',

      product: '',
      hargaModal: '',
      hargaJual: '',
      cicilan: '',
      periode: '',
      hariCicilan: '',

      searchCustomer: '',
      messageSearchCustomer: '',
      statusSearchCustomer: false,

      confirmation: false,
    }
  },

  methods: {
    async findCustomer() {
      if (this.searchCustomer.length < 1) {
        this.messageSearchCustomer = "Anda belum mengisi nama customer"
        this.statusSearchCustomer = true;
        return
      }

      try {
        const findCustomer = await axios.get(`/name/search/${this.searchCustomer}`)
        if (findCustomer.data[0] === undefined) {
          this.messageSearchCustomer = "Customer tidak ditemukan, coba cari yang lain"
          this.statusSearchCustomer = true;
        }

      } catch (err) {
        console.log(err)
      }
    },

    submitConfirmation() {
      this.confirmation = true
    },

    back() {
      this.confirmation = false
    },

    submitNewCustomer() {
      console.log("submit new customer")

      const data = {
        nama_customer: this.namaCustomer,
        nomor_telpon_customer: this.nomorTelponCustomer,
        alamat_customer: this.alamatCustomer,
        product: this.product,
        harga_modal: this.hargaModal,
        harga_jual: this.harga_jual,
        cicilan: this.cicilan,
        periode_cicilan: this.periode,
        cicilan_setiap_hari: this.hariCicilan,
      }

      axios.post("/newcreditcustomer", data)
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },

    submitData() {
      console.log("Submit data")
      if (this.customer_type === "new_customer") {

        console.log("if submitdata")
        this.submitNewCustomer()
      }
    }
  },
}
</script>

<style scoped>
@import url(@/styles/card.css);
@import url(@/styles/form.css);
@import url(@/styles/search.css);
@import url(@/styles/button.css);

.radio {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}
</style>