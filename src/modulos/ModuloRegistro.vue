<template>
  <div>
    <formulario @enviaDatos="recibeDatos"></formulario>
    <multiregistro :setTipo="tipo" :setFolio="folio" :setDescriptivo="descriptivo" :setReset="reset"></multiregistro>
    <viewfile></viewfile>
  </div>
</template>

<script>


import Formulario from '../components/InspeccionComponent.vue'
import Multiregistro from '../components/MultiRegistroComponent.vue'
import { Viewfile } from '../components/TablasMultiRegistrosComponent.vue'
import InspeccionMixin from '../mixins/inspeccion'

export default {
  name: 'appRegistro',
  mixins: [InspeccionMixin],
  components: {
        Formulario,
        Viewfile,
        Multiregistro
  }
}
</script>
