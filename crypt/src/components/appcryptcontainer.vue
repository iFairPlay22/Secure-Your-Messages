<template>

  <div id="mainContainer">
    
    <textarea-autosize 
      class="bull" 
      placeholder="Saisissez le texte à encoder" 
      v-model="normalText"
      @keyup.native="encrypt"
    >
      {{ normalText }}
    </textarea-autosize>
    
    <p>
      ⟺
    </p>

    <textarea-autosize 
      class="bull" 
      placeholder="Saisissez le texte à décrypter" 
      v-model="cryptText"
      @keyup.native="decrypt"
    >
      {{ cryptText }}
    </textarea-autosize>
  
  </div>

</template>

<script>
  import Vue from 'vue'
  import VueTextareaAutosize from 'vue-textarea-autosize'

  Vue.use(VueTextareaAutosize)
  
  export default {
    name: 'appcryptcontainer',
    data() {
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
        console.log("encrypt");
        this.cryptText = "";
        for (let i = 0; i < this.normalText.length; i++) {
          let letter = this.normalText.charAt(i);
          let encryptLetter = this.encryptMap.get(letter);
          this.cryptText += (encryptLetter !== undefined) ? encryptLetter : letter;
        }
      },
      decrypt() {
        console.log("decrypt");
        this.normalText = "";
        for (let i = 0; i < this.cryptText.length; i++) {
          let encryptLetter = this.cryptText.charAt(i);
          let letter = this.decryptMap.get(encryptLetter);
          this.normalText += (letter !== undefined) ? letter : encryptLetter;
        }
      },
      initMap(object) {
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
  #mainContainer {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: black;
  }

  .bull {
    width: 35%;
    padding: 15px;
    border: 2px solid #ccc;
    color: #ccc;
    border-radius: 4px;
  }

  #mainContainer > textarea {
    box-sizing: border-box;
    outline: none;
    resize: none;
    transition: all .2s;
    text-align: center;
  }

  #mainContainer > textarea:focus {
    color:grey;
  }

  #mainContainer > p {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }
</style>
