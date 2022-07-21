<template>
  <div
    v-for="people in peoples"
    :key="people.url"
    class="nes-container with-title is-centered"
    @click="goToCharPage(getId(people.url))"
  >
    <h1 class="title">{{ people.name }}</h1>
    <img
      class="image"
      :src="`https://starwars-visualguide.com/assets/img/characters/${getId(
        people.url
      )}.jpg`"
      :alt="people.name"
    />
    <span class="nes-badge">
      <span class="is-dark">Height: {{ people.height }}</span>
    </span>
    <span class="nes-badge">
      <span class="is-dark">Mass: {{ people.mass }}</span>
    </span>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

defineProps({
  peoples: Array,
});

const router = useRouter();

const getId = (url) => url.split("/").at(-2);

const goToCharPage = (id) => {
  router.push({ name: "characters", params: { id } });
};
</script>

<style scoped>
.image {
  border-radius: 10px;
  height: 240px;
}
.nes-badge {
  text-align: initial;
  margin: 10px 0;
}
</style>
