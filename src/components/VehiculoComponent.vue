<template>
 	<form id="vehiculo">
    	<div class="col-lg-12">
    		<div class="form-group" v-show="accion == 'actualizar'">
                <div class="row">
        			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Consecutivo</label>
        				<input type="text" name="consecutivo" class="form-control" value="" disabled>
        			</div>

        			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Folio</label>
        				<input type="text" name="folio" class="form-control" value="" disabled>
        			</div>
                </div>
    		</div>

    		<div class="form-group">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Dependencia</label>
                        <select name="dependencia" class="form-control">
                            <option value="-1">Seleccione una opción...</option>
                        </select>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Cantidad</label>
                        <input type="text" name="cantidad" class="form-control">
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
                        <button type="button" class="btn btn-success btn-block">Agregar vehículo</button>
                    </div>
                </div>
            </div>
    	</div>
    </form>
</template>
<script>
import FormMultiregistrosMixins from '../mixins/formMultiRegistros'
export default {
    name:'formVehiculo',
    mixins: [FormMultiregistrosMixins]
}
</script>
