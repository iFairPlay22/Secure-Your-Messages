<template>
  <header class="header-container">
    <h1 class="header-title"> Secure your messages 😎 </h1>
  </header>
</template>

<script>
  export default {
    name: 'apphead'
  }
</script>

<style>
  @media (max-width: 640px) {
    .header-container {
      height: 200px;
    }
  }

  .header-container {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(187,186,208);
    background: linear-gradient(180deg, rgba(187,186,208,1) 0%, rgba(210,210,226,1) 50%, rgba(255,255,255,1) 100%); 
  }

  .header-title {
    margin-top: 2px;
    text-align: center;
  }
</style>
