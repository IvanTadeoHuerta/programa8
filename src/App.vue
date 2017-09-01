<template>
  <div id="app">
    <cabecera :usuario="usuario"></cabecera>
    <menuoptions></menuoptions>
    <busquedapanel @clicVerFormulario="verPanelFormulario" :accion="tituloAccion" @clicCerrarFormulario="ocultarPanelFormulario"></busquedapanel>
    <formulario @clicBtnCancelarRegistro="ocultarPanelFormulario" :tituloPanel="tituloAccion" v-show="mostarFormulario">
    </formulario>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Menuoptions from './components/MenuOptions.vue'
import Busquedapanel from './components/BusquedaPanel.vue'
import Formulario from './components/FormularioInspeccion.vue'
import inspeccionService from './services/inspeccion'
export default {
  name: 'app',
  data() {
    return {
      usuario: 'Ivan Tadeo Huerta',
      mostarFormulario: false,
      prueba: [],
      tituloAccion: ''
    }
  },
  mounted: function() {
    this.mostarFormulario = false
    this.prueba = inspeccionService.search('getCatalogos','')
                  .then(resp => { 
                    console.log(resp)
                  })
  },
  components: {
    Cabecera,
    Menuoptions,
    Busquedapanel,
    Formulario
  },
  methods: {
    verPanelFormulario:function() {
      this.tituloAccion = 'Formulario de registro'
      this.mostarFormulario = true
     
    },

    ocultarPanelFormulario: function(){
      this.tituloAccion = ''
      this.mostarFormulario = false
    }
  }
}
</script>

<style>

</style>
