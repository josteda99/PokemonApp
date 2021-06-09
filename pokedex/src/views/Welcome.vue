<template>
  <div class="Welcome" style="background_color=#f9f9f9">
    <Loader v-if="showLoader" />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-sm-12">
          <img
            src="../assets/logo.png"
            class="logo align-center"
            alt="pikachu"
          />
          <h2 class="title">Welcome to Pokédex</h2>
          <p class="info">
            The digital encyclopedia created by Professor Oak is an invaluable
            tool to Trainers in the Pokémon world.
          </p>
          <div class="row justify-content-center">
            <button
              type="button"
              v-on:click="goToList()"
              class="btnGet d-flex justify-content-center"
              id="btnToList"
            >
              <p class="getStart">Get Started</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
export default {
  name: "Welcome",
  components: {
    Loader,
  },
  data: function () {
    return {
      showLoader: true,
    };
  },
  mounted() {
    this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.showLoader = false;
      }, 3000);
    },
    goToList() {
      location.href = "List";
      document.getElementById("btnToList").style.background = "#C00E20";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
  background-color: #f5f5f5;
}

.title {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  align-items: center;
  text-align: center;
  color: #353535;
  padding-top: 54px;
}

.info {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 31px;
  align-items: center;
  text-align: center;
  color: #5e5e5e;
  padding-top: 30px;
  padding-bottom: 61px;
}

.btnGet {
  padding: 11px 20px;
  width: 131px;
  height: 44px;
  background: #f22539;
  border-radius: 60px;
  border-color: #00000000;
}

.getStart {
  width: 91px;
  height: 22px;
  left: 20px;
  top: 11px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  text-align: center;
  color: #ffffff;
}

.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 87px;
}
</style>