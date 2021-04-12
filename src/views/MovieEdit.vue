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
        <textarea class="form-control" name="plot" v-model="movie.plot"></textarea>
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

<style>
form {
  /* Center the form on the page */
  margin: 0 auto;
  width: 500px;
  /* Form outline */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

form li + li {
  margin-top: 1em;
}

label {
  /* Uniform size & alignment */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input,
textarea {
  /* To make sure that all text fields have the same font settings
     By default, textareas have a monospace font */
  font: 1em sans-serif;

  /* Uniform text field size */
  width: 300px;
  box-sizing: border-box;

  /* Match form field borders */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* Additional highlight for focused elements */
  border-color: #000;
}

textarea {
  /* Align multiline text fields with their labels */
  vertical-align: top;

  /* Provide space to type some text */
  height: 5em;
}
</style>

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
