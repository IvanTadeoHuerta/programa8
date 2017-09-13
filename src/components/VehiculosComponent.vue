<template>
 	<form id="vehiculosAsegurados">
    	<div class="col-lg-12">
    		<div class="form-group">
    			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    				<input type="hidden" name="consecutivo" class="form-control" value="${this[posicion].consecutivo}">
    			</div>

    			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    				<input type="hidden" name="folio" class="form-control" value="${this[posicion].folio}">
    			</div>
    		</div>

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
    </form>
</template>
