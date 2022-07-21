<template>
  <div class="nes-container is-dark with-title">
    <p class="title">{{ film.title }}</p>
    <p>"{{ film.opening_crawl }}"</p>
    <div class="nes-badge">
      <span class="is-error">Director: {{ film.director }}</span>
    </div>
    <div class="nes-badge">
      <span class="is-error">Producer: {{ film.producer }}</span>
    </div>
    <div class="nes-badge">
      <span class="is-error">Release Date: {{ film.release_date }}</span>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const film = ref({});

onMounted(() => {
  axios.get(`https://swapi.dev/api/films/${route.params.id}`).then((res) => {
    film.value = res.data;
  });
});
</script>

<style scoped>
.nes-badge {
  margin: 16px;
  width: 20em;
}
</style>
