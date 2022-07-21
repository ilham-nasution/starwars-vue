<template>
  <div class="container">
    <div class="nes-container is-rounded is-dark">
      <h1>{{ char.name }}</h1>
      <div class="flex">
        <img
          class="image"
          :src="`https://starwars-visualguide.com/assets/img/characters/${route.params.id}.jpg`"
          :alt="char.name"
        />
        <section class="message -left">
          <div class="nes-balloon from-left is-dark">
            <div>
              Hello I live at {{ planet.name }} with
              {{ new Intl.NumberFormat("id-ID").format(planet.population) }}
              populations.
              <br />
              Checkout my films:
              <div class="flex">
                <div v-for="(film, index) in films" :key="film">
                  <button
                    @click="goToMovie(film)"
                    type="button"
                    class="nes-btn is-error"
                  >
                    Film {{ index + 1 }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const char = ref({});
const planet = ref({});
const films = ref("");

onMounted(() => {
  axios.get(`https://swapi.dev/api/people/${route.params.id}`).then((res) => {
    char.value = res.data;
    films.value = res.data.films;
    axios.get(res.data.homeworld).then((res) => {
      planet.value = res.data;
    });
  });
});

const goToMovie = (url) => {
  const id = url.split("/").at(-2);
  router.push({
    name: "movies",
    params: { id },
  });
};
</script>

<style scoped></style>
