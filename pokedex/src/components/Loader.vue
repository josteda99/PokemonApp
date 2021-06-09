<template>
  <div class="Loader">
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
* {
  background-color: #f5f5f5;
}

body {
  overflow: hidden;
}

.img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
</style>