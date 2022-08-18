<template>
  <div>
    <div>
      <header-users />
    </div>
    <div class="container">
      <!-- aqui va el contenido -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  import HeaderUsers from '@/components/users/HeaderUsers.vue'

  export default {
    components: {
      HeaderUsers,
    },
  }
</script>

<style lang="scss" scoped>

</style>