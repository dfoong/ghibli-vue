<template>
  <div class="ghibli-vue">
    <div class="container">
      <div v-for="result in results" class="card" :key="result.id">
        <h1>{{result.title}}</h1>
        <p>{{result.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Ghibli",
  data() {
    return {
      results: [],
      errors: []
    };
  },
  created: function() {
    axios
      .get("https://ghibliapi.herokuapp.com/films", {})
      .then(response => {
        this.results = response.data;
      })
      .catch(error => {
        this.errors.push(error);
      });
  }
};
</script>

<style scoped>

</style>
