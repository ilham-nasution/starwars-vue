<template>
  <div class="container">
    <div class="card-list">
      <CharCard :peoples="peoples" />
    </div>
    <div class="pagination">
      <button
        @click="goToPrevPage"
        type="button"
        class="nes-btn is-normal"
        :class="{ 'is-disabled': !prevPage }"
      >
        Back
      </button>
      <button
        @click="goToNextPage"
        type="button"
        class="nes-btn is-primary"
        :class="{ 'is-disabled': !nextPage }"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

import CharCard from "../components/CharCard.vue";

const peoples = ref([]);
const nextPage = ref("");
const prevPage = ref("");

onMounted(() => {
  axios.get("https://swapi.dev/api/people").then((res) => {
    peoples.value = res.data.results;
    nextPage.value = res.data.next;
    prevPage.value = res.data.previous;
  });
});

const goToNextPage = () => {
  axios.get(nextPage.value).then((res) => {
    peoples.value = res.data.results;
    nextPage.value = res.data.next;
    prevPage.value = res.data.previous;
  });
};

const goToPrevPage = () => {
  axios.get(prevPage.value).then((res) => {
    peoples.value = res.data.results;
    nextPage.value = res.data.next;
    prevPage.value = res.data.previous;
  });
};
</script>

<style scoped>
.card-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 15px;
  justify-items: center;
  align-items: center;
}
.pagination {
  text-align: center;
  margin: 10px;
}
</style>
