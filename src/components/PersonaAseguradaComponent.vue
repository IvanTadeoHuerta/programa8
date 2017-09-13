<template>
	<form id="personaAsegurada">
    	<div class="col-lg-12">
    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Consecutivo</label>
    					<input type="text" name="consecutivo" class="form-control" value="${this[posicion].consecutivo}">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Folio</label>
    					<input type="text" name="folio" class="form-control" value="${this[posicion].folio}">
    				</div>
    			</div>    			
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Nombre del Infractor</label>
    					<input type="text" name="nombre" class="form-control">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Sexo del Infractor</label>
    					<select name="sexo" class="form-control">
    						<option value="-1">Seleccione una opción...</option>
    					</select>
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Edad del Infractor</label>
    					<input type="text" name="edad" class="form-control">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Domicilio del Infractor</label>
    					<input type="text" name="domicilio" class="form-control">
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Estatus de la persona</label>
    					<select name="estatus" class="form-control">
    						<option value="-1">Seleccione una opción...</option>
    					</select>
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
                <div class="row">
                    <br>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <button type="button" class="btn btn-default btn-block">Cancelar</button>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <button type="button" class="btn btn-success btn-block">Aceptar</button>
                    </div>
                </div>
            </div>
    	</div>
    </form>
</template>
<script>
export default {
  name: 'formPersonaAsegurada'
}
</script>
