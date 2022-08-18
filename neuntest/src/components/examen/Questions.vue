<template>
  <div v-if="questionSelected">
    <div class="card">
      <div class="card-content">
        <p class="title">
          {{ questionSelected.question }}
        </p>
        <p class="subtitle">
          Pregunta:  {{ indexSelected + 1 }} de {{ listQuestions.length }}
        </p>
      </div>
    </div>

    <div class="card">
      <!-- aqui van las alternativas -->
      <div class="card-content">
        <aside class="menu">
          <p class="menu-label">
            Selecciona una respuesta:
          </p>
          <ul class="menu-list">
            <li v-for="answer in questionSelected.respuestas" :key="answer.id">
              <label class="radio">
                <input type="radio" name="answer">
                {{ answer.answer }}
              </label>
            </li>
          </ul>
        </aside>
      </div>
    </div>

    <div class="box">
      <button class="button is-success" @click="nextQuestion()">Siguiente Pregunta</button>
    </div>

  </div>
</template>

<script>
  // api
  import { apiListQuestions } from '@/api/Examen.js'

  export default {
    data() {
      return {
        listQuestions: [],
        indexSelected: -1,
        questionSelected: null,
        aswerdSelected: null
      }
    },
    methods: {
      loadQuestions: function() {
        apiListQuestions().then(
          (response) => {
            this.listQuestions = this.listQuestions.concat(response.data.results);
            if (this.listQuestions.length  > 0) {
              this.indexSelected = 0
              this.questionSelected = this.listQuestions[this.indexSelected]
            }
          }
        )
      },
      nextQuestion: function () {
        this.indexSelected = this.indexSelected + 1
        this.questionSelected = this.listQuestions[this.indexSelected]
      },
    },
    beforeMount () {
      this.loadQuestions();
    },
  }
</script>

<style lang="scss" scoped>

</style>