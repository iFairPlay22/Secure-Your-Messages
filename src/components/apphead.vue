<template>
  <header>
    <h1> EasyCrypt </h1>
    <img src="../assets/logo.png" alt="logo" id="headerImage"/>
  </header>
</template>

<script>
  export default {
    name: 'apphead'
  }
</script>

<style>
  header {
    background-color: black;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  #headerImage {
    width: 40px;
    height: 40px;
  }
</style>
