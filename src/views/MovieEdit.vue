<template>
  <div class="movie-edit">
    <form v-on:submit.prevent="movieEdit(movie)">
      <h1>Edit Movie</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="movie.title" />
      </div>
      <div class="form-group">
        <label>Year:</label>
        <input type="text" class="form-control" v-model="movie.year" />
      </div>
      <div class="form-group">
        <label>Plot:</label>
        <input type="text" class="form-control" v-model="movie.plot" />
      </div>
      <div class="form-group">
        <label>Director:</label>
        <input type="text" class="form-control" v-model="movie.director" />
      </div>
      <div class="form-group">
        <label>English:</label>
        <input type="text" class="form-control" v-model="movie.english" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input type="text" class="form-control" v-model="movie.image" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movie: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/api/movies/" + this.$route.params.id).then((response) => {
      console.log(response.data);
      this.movie = response.data;
    });
  },
  methods: {
    movieEdit: function (movie) {
      console.log("Updating");
      var params = {
        title: movie.title,
        year: movie.year,
        plot: movie.plot,
        director: movie.director,
        english: movie.english,
        image: movie.image,
      };
      axios
        .patch("/api/movies/" + this.$route.params.id, params)
        .then(() => {
          this.$router.push("/movies/" + this.movie.id);
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>
