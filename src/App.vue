<template>
  <div id="app">
    <cabecera :usuario="usuario"></cabecera>
    <menuoptions  
          @clicCerrarFormulario="ocultarPanelFormulario"  
          @clicVerFormulario="verPanelFormulario">
    </menuoptions>
    <busquedapanel 
          :accion="nameAction" 
          :inspecciones="inspecciones"
          :filaSeleccionada="indicefila"
          @clicEnRegistro="mostrarDetalleInspeccion">
    </busquedapanel>
    <formulario 
          @clicBtnCancelarRegistro="ocultarPanelFormulario" 
          :accion="nameAction" 
          v-show="mostrarFormulario">
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
      mostrarFormulario: false,
      inspecciones: ['1','2','3','4','5','6','7','8','9','0'],
      indicefila: -1,
      nameAction: ''
    }
  },
  mounted: function() {
    this.mostrarFormulario = false
    /*this.inspecciones = inspeccionService.search('getCatalogos','')
                  .then(resp => { 
                    console.log(resp)
                  })*/
  },
  components: {
    Cabecera,
    Menuoptions,
    Busquedapanel,
    Formulario
  },
  methods: {
    verPanelFormulario:function() {
      this.nameAction = 'agregar'
      this.mostrarFormulario = true
     
    },

    ocultarPanelFormulario: function(){      
      this.indicefila = -1
      this.nameAction = 'consultar'
      this.mostrarFormulario = false
    },

    mostrarDetalleInspeccion: function(idInspeccion){
         this.mostrarFormulario = idInspeccion != -1
         this.indicefila = idInspeccion
         this.nameAction = 'consultar'
    }
  }
}
</script>

<style>

</style>
