<template>
  <div id="app">
    <app-head/>

    <app-container/>
  </div>
</template>

<script>
  import AppHead from "./components/AppHead";
  import AppContainer from "./components/AppContainer";

  export default {
    name: 'app',
    components: {
        AppHead,
        AppContainer
    }
  }
</script>

<style>
  body {
    margin: 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>
