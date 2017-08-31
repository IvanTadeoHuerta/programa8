<template>
  <div id="app">
     <cabecera :usuario="usuario"></cabecera>
     <menuoptions></menuoptions>
     <busquedapanel></busquedapanel>
     <inspeccion :tituloPanel="tituloAccion"></inspeccion>
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
        usuario: 'Ivan Tadeo Huerta',
        tituloAccion: 'Aqui va la accion'
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
