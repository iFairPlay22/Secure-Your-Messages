<template>
  <div id="appContainer">
    <apphead/>

    <appcryptcontainer/>

    <appfooter/>
  </div>
</template>

<script>
  import apphead from "./components/apphead";
  import appcryptcontainer from "./components/appcryptcontainer";
  import appfooter from "./components/appfooter";

  export default {
    name: 'app',
    components: {
        apphead,
        appcryptcontainer,
        appfooter
    }
  }
</script>

<style>
  body {
    margin: 0;
    color: white;
  }
</style>
