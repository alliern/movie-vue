<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-4">Let's go to the movies!</h1>
      <p class="lead">
        Use the Navbar to Sign up, Log in/out,and view, create, edit, or destroy movies. Add a new movie below:
      </p>
      <hr class="my-4" />
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
      currentMovie: {},
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
        .post("/api/movies", params)
        .then((response) => {
          console.log(response.data);
          this.movies.push(response.data);
        })
        .catch((error) => console.log(error.response));
    },
    showMovie: function (movie) {
      this.currentMovie = movie;
      document.querySelector("#movie-info").showModal();
    },
    updateMovie: function (movie) {
      var params = {
        title: movie.title,
        year: movie.year,
        plot: movie.plot,
        director: movie.director,
        english: movie.english,
      };
      axios.patch("/api/movies/" + movie.id, params).then((response) => {
        console.log("success!", response.data);
      });
    },
    destoryMovie: function (movie) {
      axios.delete("/api/movies/" + movie.id).then((response) => {
        console.log("success!", response.data);
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      });
    },
  },
};
</script>
