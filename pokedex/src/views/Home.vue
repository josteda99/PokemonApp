<template>
  <div class="home"></div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  beforeCreate: function () {
    location.href = "Welcome";
  },
};
</script>
