<template>
  <div class="login">
    <div class="login__body">
      <p class="title">Ingresa con Google</p>
      <p class="subtitle">Bienvenido a neuntest, evalua tus conocimientos en desarrollo de software</p>
      <button class="button is-warning" @click="irExamen()">Ingresar con google</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      irExamen: function () {
        this.$router.push({'name': 'examen'})
      }
    },
  }
</script>

<style lang="scss" scoped>
  .login {
    padding: 3em;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>