<template>
  <div id="app">
     <cabecera :usuario="usuario"></cabecera>
     <menuoptions></menuoptions>
     <busquedapanel @clicOnAddBtn="alerta"></busquedapanel>
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
  data () {
    return {
        usuario: 'Ivan Tadeo Huerta',
        mostarFormulario: false,
        tituloAccion: 'Aqui va la accion'
    }
  },
   mounted: function () {
      this.mostarFormulario= false
  },
  components: {
    Cabecera,
    Menuoptions,
    Busquedapanel,
    Inspeccion
  },
  methods:{
    alerta(){
      this.mostarFormulario = !this.mostarFormulario 
    }
  }
}
</script>

<style>

</style>
