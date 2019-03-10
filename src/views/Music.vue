<template>
  <div class="ghibli-vue">
    <div class="container">
      <div v-for="result in results" class="card" :key="result.id">
        <h1></h1>
        <p>{{result.name}}
        <br><a href="https://www.youtube.com/watch?v=3jWRrafhO7M" target="_blank"><b>Soundtrack</b></a></p>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Music",
  data() {
    return {
      results: [],
      errors: []
    };
  },
  created: function() {
    axios
      .get("https://ghibliapi.herokuapp.com/locations", {})
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
