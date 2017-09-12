<template>
  <div>
    <busquedapanel @clicEnRegistro="cambiaVerFormulario"></busquedapanel>
    <formulario v-show="mostrarFormulario"></formulario>
  </div>
</template>

<script>

import Busquedapanel from '../components/BusquedaComponent.vue'
import Formulario from '../components/InspeccionComponent.vue'
import inspeccionService from '../services/inspeccion'

export default {
  name: 'appConsulta',
  data() {
    return {
      mostrarFormulario: false
    }
  },
  created: function() {
    this.mostrarFormulario = false
  },
  methods: {
    cambiaVerFormulario: function(verFormulario) {

      this.mostrarFormulario = verFormulario
    }
  },
  components: {
    Busquedapanel,
    Formulario
  }
}
</script>

<style>

</style>
