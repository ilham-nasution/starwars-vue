<template>
  <header>
    <router-link to="/">
      <h1 class="text-center">STAR WARS CHARACTERS</h1>
    </router-link>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style>
.text-center {
  text-align: center;
}
.flex {
  display: flex;
}
.container {
  padding: 20px 80px;
}
</style>
