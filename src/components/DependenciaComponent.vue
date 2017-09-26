<template>
	<form id="dependencia">
    	<div class="col-lg-12">
    		<div class="form-group" v-show="accion == 'actualizar'">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
                        <label>Consecutivo</label>
    					<input type="text" name="consecutivo" class="form-control" v-model="form.consecutivo" disabled>
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
                        <label>Folio</label>
    					<input type="text" name="folio" class="form-control" v-model="form.folio" disabled>
    				</div>
    			</div>
    		</div>

            <div class="form-group">
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <label>Dependencia</label>
                        <select name="dependencia" class="form-control" v-model="form.id_dependencia">
                            <option value="-1">Seleccione una opción...</option>
                            <option value="1">Dependencia 1 ejemplo</option>
                            <option value="2">Dependencia 2 ejemplo</option>
                        </select>
                    </div>

                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <label>Cantidad</label>
                        <input type="text" name="cantidad" v-model="form.cantidad" class="form-control">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="row">
                    <br>
                    <div v-if="accion == 'actualizar'" class="col-md-12 col-sm-12 col-xs-12 text-center" >
                        <button type="button" class="btn btn-success btn-block">Actualizar</button>
                    </div>
                    <div v-else-if="accion == 'agregar'" class="col-md-12 col-sm-12 col-xs-12 text-center">
                        <button type="button" class="btn btn-success btn-block">Agregar dependencia</button>
                    </div>
                </div>
            </div>
    	</div>
    </form>
</template>

<script>
import FormMultiregistrosMixins from '../mixins/formMultiRegistros'
import Formulario from '../datosFormularios/dependencia'
export default {
    name: 'formDependencia',
    mixins: [FormMultiregistrosMixins],
    data() {
        return {
            form: Object.assign({}, Formulario)
        }
    },
    created: function() {
        this.form = Object.assign({}, Formulario)
        /*this.$bus.$on('set-Dependencia', (dependencia) => {
            this.form = dependencia
        })*/
    }

}
</script>

