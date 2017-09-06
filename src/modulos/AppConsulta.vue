<template>
   <div>
    <busquedapanel></busquedapanel>
    <formulario></formulario>
  </div>
</template>

<script>

import Busquedapanel from '../components/BusquedaPanel.vue'
import Formulario from '../components/FormularioInspeccion.vue'
import inspeccionService from '../services/inspeccion'

export default {
  name: 'appConsulta',
  data() {
    return {
    
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
