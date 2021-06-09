<template>
  <div class="List" style="background_color=#f9f9f9">
    <Loader v-if="showLoader" />
    <div class="container">
      <div class="row search justify-content-center">
        <div class="col-md-10 col-sm-11 col-xs-11 col-lg-7 col-11">
          <input
            type="text"
            class="form-control searchBar"
            name=""
            id="searchBar"
            placeholder="Search"
            v-model="search"
            @change="showEL()"
          />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 col-sm-11 col-xs-11 col-lg-7 col-11">
          <!-- All Pokemons -->
          <div id="pokeNode" v-if="option == 'all'">
            <div
              v-for="pok in filterPokemons"
              :key="pok.name"
              class="box row flex-fill justify-content-between"
            >
              <div
                class="col-10 mb-0 d-flex justify-content-start"
                v-on:click="showWinDetails(pok)"
              >
                <h4 class="pokName">{{ pok.name }}</h4>
              </div>
              <div class="col-2 d-flex justify-content-end">
                <button
                  type="button"
                  class="col-4 mb-0 mt-2 btnFav"
                  v-on:click="addFav(pok)"
                >
                  <i
                    class="fas fa-star starIconDes"
                    v-bind:id="pok.name"
                    v-if="pok.fav == false"
                  ></i>
                  <i
                    class="fas fa-star starIconAct"
                    v-bind:id="pok.name"
                    v-else-if="pok.fav == true"
                  ></i>
                </button>
              </div>
            </div>
          </div>
          <!-- fav Pokemons -->
          <div v-else-if="option == 'favs'">
            <div
              v-for="pok in filterPokemonsFavs"
              :key="pok.name"
              class="box row flex-fill justify-content-between"
            >
              <div
                class="col-10 mb-0 d-flex justify-content-start"
                v-on:click="showWinDetails(pok)"
              >
                <h4 class="pokName">{{ pok.name }}</h4>
              </div>
              <div class="col-2 d-flex justify-content-end">
                <button
                  type="button"
                  class="col-4 mb-0 mt-2 btnFav"
                  v-on:click="addFav(pok)"
                >
                  <i
                    class="fas fa-star starIconDes"
                    v-bind:id="pok.name"
                    v-if="pok.fav == false"
                  ></i>
                  <i
                    class="fas fa-star starIconAct"
                    v-bind:id="pok.name"
                    v-else-if="pok.fav == true"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterBtn @option="option = $event" v-if="showFooter == true" />

    <Details
      v-if="showDetails == true"
      @showDetails="showDetails = $event"
      :pokeName="pokeName"
      :pokeFav="pokeFav"
    />

    <EmptyList v-if="showEmptyList == true" />
  </div>
</template>

<script>
import Buscador from "@/components/Buscador.vue";
import FooterBtn from "@/components/FooterBtn.vue";
import Details from "@/components/Details.vue";
import EmptyList from "@/components/EmptyList.vue";
import Loader from "@/components/Loader.vue";
import axios from "axios";

export default {
  name: "List",
  components: {
    Buscador,
    FooterBtn,
    Details,
    EmptyList,
    Loader,
  },
  data: function () {
    return {
      ListPokemon: [],
      ListPokemons: [],
      FilterPokemon: [],
      search: "",
      cont: 5,
      option: "all",
      cont: 0,
      showDetails: false,
      pokeFav: false,
      showEmptyList: false,
      showLoader: true,
      showFooter: false,
    };
  },
  created() {
    this.getPokemons();
    this.showLoader = true;
  },
  mounted() {
    this.showToggle();
  },
  methods: {
    getPokemons: function () {
      axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
          this.ListPokemon = response.data.results;
          for (var i = 0; i < this.ListPokemon.length; i++) {
            var obj = { name: this.ListPokemon[i].name, fav: false };
            this.ListPokemons.push(obj);
          }
        })
        .catch((e) => console.log(e));
    },
    addFav(pokemon) {
      var btn = document.getElementById(pokemon.name);
      if (pokemon.fav) {
        pokemon.fav = false;
      } else {
        pokemon.fav = true;
      }
    },
    showWinDetails(pokemon) {
      this.showDetails = true;
      this.pokeName = pokemon.name;
      this.pokeFav = pokemon.fav;
    },
    showEL() {
      var pokeNode = document.getElementById("pokeNode");
      if (!pokeNode.hasChildNodes()) {
        this.showEmptyList = true;
      } else {
        this.showEmptyList = false;
      }
    },
    showToggle() {
      setTimeout(() => {
        this.showLoader = false;
        this.showFooter = true;
      }, 3000);
    },
  },
  computed: {
    filterPokemons: function () {
      return this.ListPokemons.filter((pok) => {
        if (pok.name.toLowerCase().match(this.search.toLowerCase())) {
          return pok;
        }
      });
    },
    filterPokemonsFavs: function () {
      return this.ListPokemons.filter((pok) => {
        if (pok.fav) {
          return pok;
        }
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");

body {
  background-color: #e5e5e5;
}

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

.btnGet {
  width: 155px;
  height: 44px;
  background: #f22539;
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
  margin-left: 0px;
  margin-right: 0px;
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
  background-image: url(../assets/searchIcon.png);
  background-size: 18px 18px;
  background-repeat: no-repeat;
  background-position: 15px center;
  padding-left: 45px;
}

.starIconDes {
  color: #bfbfbf;
  font-size: 24px;
}

.starIconAct {
  color: #eca539;
  font-size: 24px;
}
</style>