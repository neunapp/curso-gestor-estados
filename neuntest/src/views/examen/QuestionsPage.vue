<template>
  <div>
    <questions />
    <div class="card">
      <answers />
    </div>
  </div>
</template>

<script>

  import Questions from '@/components/examen/Questions.vue'
  import Answers from '@/components/examen/Answers.vue'

  export default {
    components: {
      Questions,
      Answers
    },
  }
</script>

<style lang="scss" scoped>

</style>