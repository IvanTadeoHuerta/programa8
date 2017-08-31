<template>
  <div id="app">
     <cabecera></cabecera>
     <menuoptions></menuoptions>
     <busquedapanel></busquedapanel>
     <inspeccion></inspeccion>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Menuoptions from './components/MenuOptions.vue'
import Busquedapanel from './components/BusquedaPanel.vue'
import Inspeccion from './components/Inspeccion.vue'
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components: {
    Cabecera,
    Menuoptions,
    Busquedapanel,
    Inspeccion
  }
}
</script>

<style>

</style>
