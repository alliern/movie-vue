<template>
  <div class="home">
    <h1>Let's go to the movies!</h1>
    Title:
    <input type="text" v-model="newMovieTitle" />
    Year:
    <input type="text" v-model="newMovieYear" />
    Plot:
    <input type="text" v-model="newMoviePlot" />
    Director:
    <input type="text" v-model="newMovieDirector" />
    English:
    <input type="text" v-model="newMovieEnglish" />
    <button v-on:click="createMovie">Add a Movie</button>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h3>{{ movie.title }}</h3>
    </div>
  </div>
</template>
<style>
img {
  width: 250px;
}
</style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movies: [],
      newMovieTitle: "",
      newMovieYear: "",
      newMoviePlot: "",
      newMovieDirector: "",
      newMovieEnglish: "",
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
    createMovie: function () {
      var params = {
      title: this.newMovieTitle,
      year: this.newMovieYear,
      plot: this.newMoviePlot,
      director: this.newMovieDirector,
      english: this.newMovieEnglish,
      };
      axios.post("/api/movies", params).then((response) => {
        console.log(response.data);
        this.movies.push(response.data);
      });
    },
  },
};
</script>
