<template>
  <div class="buscador">
    <div class="container">
      <div class="row search justify-content-center">
        <div class="col-md-10 col-sm-11 col-xs-11 col-lg-7">
          <input
            type="text"
            class="form-control searchBar"
            name=""
            id=""
            placeholder="Lupa - Search"
            v-model="search"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["search"],
  name: "Buscador",
};
</script>

<style>
</style>