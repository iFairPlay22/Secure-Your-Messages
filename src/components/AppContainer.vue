<template>

  <div class="app-container">
    
    <textarea-autosize 
      class="bull" 
      placeholder="Encode..." 
      v-model="normalText"
      @keyup.native="encrypt"
    >
      {{ normalText }}
    </textarea-autosize>
    
    <p class="app-container-arrow">
      ⟺
    </p>

    <textarea-autosize 
      class="bull" 
      placeholder="Decode..." 
      v-model="cryptText"
      @keyup.native="decrypt"
    >
      {{ cryptText }}
    </textarea-autosize>
  
  </div>

</template>

<script>  
  export default {
    name: 'appcryptcontainer',
    data() {
      // Should be in a API
      return {
        normalText: "",
        cryptText: "",
        encryptMap: this.initMap({
          keyArray: Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),
          valueArray: Array.from("AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn9876543210")
        }),
        decryptMap: this.initMap({
          keyArray: Array.from("AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn9876543210"),
          valueArray: Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
        })
      }
    },
    methods: {
      encrypt() {
        // Should be in a API
        this.cryptText = "";
        for (let i = 0; i < this.normalText.length; i++) {
          let letter = this.normalText.charAt(i);
          let encryptLetter = this.encryptMap.get(letter);
          this.cryptText += (encryptLetter !== undefined) ? encryptLetter : letter;
        }
      },
      decrypt() {
        // Should be in a API
        this.normalText = "";
        for (let i = 0; i < this.cryptText.length; i++) {
          let encryptLetter = this.cryptText.charAt(i);
          let letter = this.decryptMap.get(encryptLetter);
          this.normalText += (letter !== undefined) ? letter : encryptLetter;
        }
      },
      initMap(object) {
        // Should be in a API
        const map = new Map();
        for (let i = 0; i < object.keyArray.length; i++) {
          map.set(object.keyArray[i], object.valueArray[i]);
        }
        return map;
      }
    }
  }
</script>

<style>

  @media (max-width: 825px) {
    .app-container-arrow {
      display: none;
    }

    .bull {
      width: 75% !important;
    }
  }

  .app-container {
    margin: 50px 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    color: black;
  }

  .bull {
    width: 40%;
    min-width: 125px;
    min-height: 150px;
    padding: 15px;
    margin: 15px;
    border: 2px solid #ccc;
    color: #ccc;
    border-radius: 4px;
  }

  .app-container > textarea {
    box-sizing: border-box;
    outline: none;
    resize: none;
    transition: all .2s;
    text-align: center;
  }

</style>
