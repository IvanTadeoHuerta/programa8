<template>
  <div id="app">
     <cabecera></cabecera>
     <menuoptions></menuoptions>
     <busquedapanel></busquedapanel>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Menuoptions from './components/MenuOptions.vue'
import Busquedapanel from './components/BusquedaPanel.vue'
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components: {
    Cabecera,
    Menuoptions,
    Busquedapanel
  }
}
</script>

<style>

</style>
