<template>
  <div class="movie-new">
    <form action="/movies" method="post" v-on:submit.prevent="createMovie()">
      <h1>New Movie</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="title" />
      </div>
      <div class="form-group">
        <label>Year:</label>
        <input type="text" class="form-control" v-model="year" />
      </div>
      <div class="form-group">
        <label>plot:</label>
        <textarea class="form-control" id="plot" cols="30" rows="10"></textarea>
        <!-- <input type="text" class="form-control" v-model="plot" /> -->
        <small v-if="plot.length > 0">{{ 200 - plot.length }} characters remaining</small>
      </div>
      <div class="form-group">
        <label>Director:</label>
        <input type="text" class="form-control" v-model="director" />
      </div>
      <div class="form-group">
        <label>English:</label>
        <input type="text" class="form-control" v-model="english" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input type="text" class="form-control" v-model="image" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>
<style>
fform {
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
      title: "",
      year: "",
      plot: "",
      director: "",
      english: "",
      image: "",
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createMovie: function () {
      var params = {
        title: this.title,
        year: this.year,
        plot: this.plot,
        director: this.director,
        english: this.english,
      };
      axios
        .post("/api/movies/", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/movies");
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>
