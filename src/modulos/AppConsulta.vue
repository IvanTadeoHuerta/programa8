<template>
   <div>
    <busquedapanel @clicEnRegistro="cambiaVerFormulario"></busquedapanel>
    <formulario v-show="mostrarFormulario"></formulario>
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
      mostrarFormulario : false
    }
  },
  created:function(){
    this.mostrarFormulario = false
  },
  methods:{
    cambiaVerFormulario: function(){
       this.mostrarFormulario = !this.mostrarFormulario
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
