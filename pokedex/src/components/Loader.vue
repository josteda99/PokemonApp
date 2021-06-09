<template>
  <div class="Loader" style="background_color=#f9f9f9">
    <div class="img">
      <img
        src="../assets/loader.png"
        alt="pokeball"
        class="pokeball"
        srcset=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loader {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* animation-name: fade;
  animation-duration: 3s; */
}

.pokeball {
  animation-name: rotar;
  animation-duration: 2s;
  animation-iteration-count: 20;
}

@keyframes rotar {
  0% {
    transform: rotate(0deg);
  }

  90% {
    transform: rotate(360deg);
  }

  91% {
    transform: translate(0px, 7px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>