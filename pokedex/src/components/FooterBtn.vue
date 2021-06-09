<template>
  <div class="footerBtn">
    <footer class="pie">
      <div class="container">
        <div class="row de-flex justify-content-center">
          <div
            class="
              col-md-10 col-sm-11 col-xs-11 col-lg-7 col-11
              d-flex
              justify-content-space-between
              foot-btn
            "
          >
            <button
              type="button"
              class="btnGet btnShowI flex-fill"
              v-on:click="all()"
              id="all"
            >
              <p class="mb-0 textFootBtn">
                <i class="fa fa-list icon"></i> All
              </p>
            </button>
            <button
              type="button"
              class="btnGetD btnShowD flex-fill"
              v-on:click="favs()"
              id="fav"
            >
              <p class="mb-0 textFootBtn">
                <i class="fas fa-star icon"></i> Favorites
              </p>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data: function () {
    return { option: "" };
  },
  methods: {
    all() {
      var btn1 = document.getElementById("all");
      btn1.style.background = "#f22539";
      var btn2 = document.getElementById("fav");
      btn2.style.background = "#bfbfbf";
      this.option = "all";
      this.$emit("option", this.option);
    },
    favs() {
      var btn1 = document.getElementById("all");
      btn1.style.background = "#bfbfbf";
      var btn2 = document.getElementById("fav");
      btn2.style.background = "#f22539";
      this.option = "favs";
      this.$emit("option", this.option);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.title {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 31px;
  align-items: center;
  text-align: center;
  color: #353535;
  padding-top: 30px;
  letter-spacing: 1.5px;
}

.info {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 31px;
  align-items: center;
  text-align: center;
  color: #353535;
  padding-top: 10px;
  padding-bottom: 25px;
  margin-bottom: 0px;
}

.icon {
  font-size: 20px;
}

.btnGet {
  width: 155px;
  height: 44px;
  background: #f22539;
  border-radius: 60px;
  border-color: #00000000;
}

.btnGetD {
  width: 155px;
  height: 44px;
  background: #bfbfbf;
  border-radius: 60px;
  border-color: #00000000;
}

.getStart {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-bottom: 0px;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: #fff;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.201);
}

.pokName {
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: 10px;
}

.foot-btn {
  padding-top: 18px;
}

.btnShowI {
  margin-right: 10px;
}

.btnShowD {
  margin-left: 10px;
}

.textFootBtn {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-bottom: 0px;
}

.box {
  height: 60px;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 5px;
}

.box .btnFav {
  height: 45px;
  width: 45px;
  border-color: #00000000;
  border-radius: 100%;
}

.container .search {
  padding-top: 35px;
  padding-bottom: 35px;
}

.container .search .searchBar {
  height: 60px;
}
</style>