<template>
	<form id="dependenciasParticipantes">
    	<div class="col-lg-12">
    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-6 col-xs-12">
    					<input type="hidden" name="consecutivo" class="form-control" value="">
    				</div>

    				<div class="col-md-6 col-sm-6 col-xs-12">
    					<input type="hidden" name="folio" class="form-control" value="">
    				</div>
    			</div>
    		</div>

            <div class="form-group">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <label>Dependencia</label>
                        <select name="dependencia" class="form-control">
                            <option value="-1">Seleccione una opción...</option>
                        </select>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <label>Cantidad</label>
                        <input type="text" name="cantidad" class="form-control">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="row">
                    <div class="col-md-offset-5 col-sm-offset-5 col-xs-offset-4">
                        <button type="submit" class="btn btn-success" id="aceptar">Aceptar</button>
                    </div>
                </div>
            </div>
    	</div>
    </form>
</template>

