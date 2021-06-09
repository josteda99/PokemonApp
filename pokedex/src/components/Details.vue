<template>
  <div class="Details">
    <div class="overlay">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-sm-11 col-xs-11 col-lg-7 col-11">
            <div class="boxDetails">
              <div class="row wallpaper">
                <button
                  type="button"
                  class="btnClose"
                  v-on:click="hideDetails()"
                >
                  <i class="fas fa-times-circle closeIcon"></i>
                </button>
                <img v-bind:src="url" alt="" srcset="" class="pokemon" />
              </div>
              <p class="name infoDetails">
                <strong>Name:</strong> {{ infoPokemon.name }}
              </p>
              <hr class="line" />
              <p class="infoDetails">
                <strong>Weight:</strong> {{ infoPokemon.weight }}
              </p>
              <hr class="line" />
              <p class="infoDetails">
                <strong>Height:</strong> {{ infoPokemon.height }}
              </p>
              <hr class="line" />
              <p class="infoDetails"><strong>Types:</strong> {{ types }}</p>
              <hr class="line" />
              <div class="row justify-content-between">
                <button
                  type="button"
                  class="
                    btnShareDetails
                    col-md-5 col-sm-5 col-5 col-lg-5 col-xl-5
                  "
                  @click="copyInfo"
                  id="btnCopy"
                >
                  <p class="mb-0 textBtnDetails">Share to my friends</p>
                </button>
                <button
                  type="button"
                  class="col-2 mb-0 btnFavDetails"
                  v-on:clic="addFav()"
                >
                  <i class="fas fa-star starIconAct" v-if="pokeFav == true"></i>
                  <i
                    class="fas fa-star starIconDes"
                    v-else-if="pokeFav == false"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from "../views/List.vue";
import axios from "axios";

export default {
  props: ["pokeName", "pokeFav"],
  components: {
    List,
  },
  data: function () {
    return {
      showDetails: false,
      infoPokemon: "",
      types: "",
      url: "",
      infoToCopy: "",
    };
  },
  mounted() {
    this.getInfoPokemon();
  },
  methods: {
    hideDetails() {
      this.showDetails = false;
      this.$emit("showDetails", this.showDetails);
    },
    getInfoPokemon: function () {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + this.pokeName)
        .then((response) => {
          this.infoPokemon = response.data;
          for (var i = 0; i < this.infoPokemon.types.length; i++) {
            if (i == 0) {
              this.types += this.infoPokemon.types[i].type.name;
            } else {
              this.types += ", " + this.infoPokemon.types[i].type.name;
            }
          }
          this.url = this.infoPokemon.sprites.front_default;
        })
        .catch((e) => console.log(e));
    },
    copyInfo() {
      document.getElementById("btnCopy").style.background = "#C00E20";
      this.infoToCopy =
        this.infoPokemon.name +
        ", Wight: " +
        this.infoPokemon.weight +
        ", Height: " +
        this.infoPokemon.height +
        ", Types: " +
        this.types;
      this.$copyText(this.infoToCopy).then(
        function (e) {
          alert("Copied to Clipboard");
          console.log(e);
        },
        function (e) {
          alert("Can not copy");
          console.log(e);
        }
      );
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.boxDetails {
  background-color: #fff;
  box-shadow: 0px 0px 1px 0px black;
  border-radius: 5px;
  /* padding: 30px; */
  text-align: left;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container .boxDetails .infoDetails {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  padding-left: 30px;
  color: #5e5e5e;
}

.line {
  margin-bottom: 15px;
  margin-top: 15px;
  margin-left: 30px;
  margin-right: 30px;
}

.btnShareDetails {
  width: 195px;
  height: 44px;
  background: #f22539;
  border-radius: 60px;
  border-color: #00000000;
  margin-bottom: 20px;
  margin-left: 40px;
}

.boxDetails .btnShareDetails .textBtnDetails {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  text-align: center;
  color: #ffffff;
}

.boxDetails .btnFavDetails {
  height: 45px;
  width: 45px;
  border-color: #00000000;
  border-radius: 100%;
  margin-right: 40px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 5px;
}

.container .wallpaper {
  background: url(../assets/wallpaper.png) repeat;
  background-color: #f22539;
  height: 220px;
  margin: 0px;
  border-radius: 5px 5px 0px 0px;
  background-size: auto 100%;
  /* width: 220px; */
}

.container .btnClose {
  background-color: transparent;
  border-color: transparent;
  position: relative;
  left: 46%;
  top: 1%;
}

.name {
  margin-top: 20px;
}

.container .pokemon {
  position: relative;
  left: 38%;
  top: 5%;
  width: 180px;
}

.closeIcon {
  font-size: 24px;
  color: #fff;
}

.starIconDes {
  color: #bfbfbf;
  font-size: 24px;
}

.starIconAct {
  color: #eca539;
  font-size: 18px;
}
@media only screen and (max-width: 375px) {
  .container .pokemon {
    position: relative;
    left: 27%;
    top: 5%;
    width: 180px;
  }
  .container .btnClose {
    left: 40%;
  }
}

@media only screen and (max-width: 547px) {
  .container .pokemon {
    position: relative;
    left: 40%;
    top: 5%;
    width: 180px;
  }
  .container .btnClose {
    left: 42%;
  }
}

@media only screen and (max-width: 1000px) {
  .container .pokemon {
    position: relative;
    left: 30%;
    top: 5%;
    width: 180px;
  }

  .container .btnClose {
    left: 45%;
  }
}
</style>