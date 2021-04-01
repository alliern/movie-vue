<template>
  <div class="movies-index">
    <h1>Let's go to the movies!</h1>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h3>{{ movie.title }}</h3>
    </div>
  </div>
</template>
<style></style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movies: [],
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("/api/movies").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
  },
};
</script>
