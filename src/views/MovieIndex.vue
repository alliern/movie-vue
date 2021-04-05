<template>
  <div class="movies-index">
    <h1>Let's go to the movies!</h1>
    <div>
      <button>Sort Alphabetically</button>
    </div>
  <div v-for="movie in orderBy(filterBy(movies, titleFilter, 'title'), 'title')" v-bind:key="movie.id">
    Search by name:
    <input v-model="titleFilter" list="titles" />
    <datalist id="titles">
      <option v-for="movie in movies" v-bind:key="movie.id">{{ movie.title }}</option>
    </datalist>
    <div class="card mb-3" style="max-width: 540px" v-for="movie in movies" v-bind:key="movie.id">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img v-bind:src="movie.image" class="card-img" alt="movie.title" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">
              {{ movie.plot }}
            </p>
            <button type="button" class="btn btn-warning">
              <router-link v-bind:to="`movies/${movie.id}`">More Info</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
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
