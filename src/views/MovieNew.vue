<template>
  <div class="movies-new">
    <h1>Lets Add Some Movies!</h1>
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
  </div>
</template>
<style></style>
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
      axios
        .post("/api/movies/", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>
