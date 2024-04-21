<script setup lang="ts">
import MyDataTable from "./components/MyDataTable.vue";
</script>

<template>
  <header>
    <section class="header__container">
      <h1>Controllers</h1>
    </section>
  </header>
  <main class="main__container">
    <MyDataTable></MyDataTable>
  </main>
  <footer></footer>
</template>

<style>
#app {
  margin: 0;
}

.header__container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

</style>
