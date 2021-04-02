<template>
  <div class="movies-show">
    <div class="container">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.year }}</p>
      <p>{{ movie.plot }}</p>
      <p>{{ movie.director }}</p>
      <img v-bind:src="movie.image" v-bind:alt="movie.title" />
    </div>
    <button type="button" class="btn btn-outline-primary">
      <router-link v-bind:to="`/movies/${movie.id}/edit`">Edit</router-link>
    </button>
    <br />
    <button type="button" class="btn btn-danger" v-on:click="destroyMovie(movie)">Delete</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    this.showMovie();
  },
  methods: {
    showMovie: function () {
      axios.get("/api/movies/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.movie = response.data;
      });
    },
    destroyMovie: function (movie) {
      axios.delete("/api/movies/" + movie.id).then(() => {
        console.log("deleted");
        this.$router.push("/movies");
      });
    },
  },
};
</script>
