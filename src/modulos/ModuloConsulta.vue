<template>
  <div>
    <busquedapanel @clicEnRegistro="cambiaVerFormulario"></busquedapanel>
    <formulario v-show="mostrarFormulario" @enviaDatos="recibeDatos"></formulario>
    <multiregistro :setTipo="tipo" :setFolio="folio" :setDescriptivo="descriptivo" :setReset="reset"></multiregistro>
    <viewfile></viewfile>
  </div>
</template>

<script>

import Busquedapanel from '../components/BusquedaComponent.vue'
import Formulario from '../components/InspeccionComponent.vue'
import Multiregistro from '../components/MultiRegistroComponent.vue'
import { Viewfile } from '../components/TablasMultiRegistrosComponent.vue'
import inspeccionService from '../services/inspeccion'
import InspeccionMixin from '../mixins/inspeccion'

export default {
  name: 'appConsulta',
  mixins: [InspeccionMixin],
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
        Formulario,
        Viewfile,
        Multiregistro
  }
}
</script>

