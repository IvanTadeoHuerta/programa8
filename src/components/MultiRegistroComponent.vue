<template>
    <div class="modal fade"  role="dialog" id="modalMultiRegistros" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="row col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <slot name="header">Multiregistro no identificado</slot>
                    </div>                    
                </div>
                <div class="modal-body" style="max-height: 400px; overflow-y:auto;">
                    <slot name="body">Opción no valida de multiregistro. Si el problema continúa contacte al administrador del sistema</slot>
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
    name: 'multiRegistro'
}
</script>

