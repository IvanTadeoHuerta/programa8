<template>
  <div id="app">
    <cabecera :usuario="usuario"></cabecera>
    <menuoptions></menuoptions>
    <busquedapanel @clicOnAddBtn="verPanelFormulario"></busquedapanel>
    <inspeccion :tituloPanel="tituloAccion" v-show="mostarFormulario"></inspeccion>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Menuoptions from './components/MenuOptions.vue'
import Busquedapanel from './components/BusquedaPanel.vue'
import Inspeccion from './components/Inspeccion.vue'
export default {
  name: 'app',
  data() {
    return {
      usuario: 'Ivan Tadeo Huerta',
      mostarFormulario: false,
      tituloAccion: ''
    }
  },
  mounted: function() {
    this.mostarFormulario = false
  },
  components: {
    Cabecera,
    Menuoptions,
    Busquedapanel,
    Inspeccion
  },
  methods: {
    verPanelFormulario() {
      this.mostarFormulario = !this.mostarFormulario
      this.tituloAccion = 'Formulario de registro'
    }
  }
}
</script>

<style>

</style>
