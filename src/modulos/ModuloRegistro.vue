<template>
  <div>
    <formulario @enviaDatos="recibeDatos"></formulario>
    <multiregistro 
                :folioSelecccionado="folio" 
                :descriptivoMultiRegistro="descriptivo" 
                :tipoMultiRegistro="tipo"
                :aux="auxMostrar">
    </multiregistro>
  </div>
</template>

<script>


import Formulario from '../components/InspeccionComponent.vue'
import Multiregistro from '../components/MultiRegistroComponent.vue'

export default {
  name: 'appRegistro',
  data() {
    return {
      folio: null,
      descriptivo: null,
      tipo: null,
      auxMostrar: false
    }
  },
  created: function() {
    this.folio = null
    this.descriptivo = null
    this.tipo = null
    this.auxMostrar = false
  },
  components: {
    Formulario,
    Multiregistro
  },
  methods: {
    recibeDatos(folio, descriptivo, tipo) {
      this.folio = folio
      this.descriptivo = descriptivo
      this.tipo = tipo
      this.auxMostrar = !this.auxMostrar
    }
  }
}
</script>

<style>

</style>
