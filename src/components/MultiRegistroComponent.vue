<template>
    <div class="modal fade"  role="dialog" id="modalMultiRegistros" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="row col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h5 class="modal-title col-xs-12 col-sm-12 col-md-11 col-lg-11">
                            <b>{{ descriptivo | mayusculas | titulo }}</b>
                            <p><b>Folio:</b>{{folio}}</p>
                        </h5>
                        <button type="button" class="btn btn-success col-xs-12 col-sm-12 col-md-1 col-lg-1">
                            <span style="color: white" class="glyphicon glyphicon-plus"></span>
                        </button>
                    </div>                    
                </div>
                <div class="modal-body" style="max-height: 400px; overflow-y:auto;">
                     <slot name="body">Si el problema continúa contacte al administrador del sistema</slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'multiRegistro',
    props: ['folioSelecccionado','descriptivoMultiRegistro','aux','tipoMultiRegistro'],
    data (){
        return {
            folio: null,
            descriptivo: '',
            tipo: null
        }
    },
    created: function(){
        this.folio = null
        this.descriptivo = ''
        this.tipo = null
    },
    watch: {
        folioSelecccionado: function(){
             this.folio = this.folioSelecccionado
        },
        tipoMultiRegistro: function(){
            this.descriptivo = this.descriptivoMultiRegistro
            this.tipo = this.tipoMultiRegistro
        },
        aux: function(){
            $('#modalMultiRegistros').modal('show')
        }
    },
    filters: {
        mayusculas (texto){
            return texto.toUpperCase()
        },
        titulo (texto){
            return `MULTIREGISTRO ${texto}`
        }
    }
}
</script>

