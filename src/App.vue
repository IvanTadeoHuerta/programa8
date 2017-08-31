<template>
  <div id="app">
     <cabecera></cabecera>
     <menuoptions></menuoptions>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Menuoptions from './components/MenuOptions.vue'
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components: {
    Cabecera,
    Menuoptions
  }
}
</script>

<style>

</style>
