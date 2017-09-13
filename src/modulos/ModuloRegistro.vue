<template>
  <div>
    <formulario @enviaDatos="recibeDatos"></formulario>
    <multiregistro :setTipo="tipo" :setFolio="folio" :setDescriptivo="descriptivo"></multiregistro>
  </div>
</template>

<script>


import Formulario from '../components/InspeccionComponent.vue'
import Multiregistro from '../components/MultiRegistroComponent.vue'
import InspeccionMixin from '../mixins/inspeccion'

export default {
  name: 'appRegistro',
  mixins: [InspeccionMixin],
  components: {
        Formulario,
        Multiregistro
  }
}
</script>
