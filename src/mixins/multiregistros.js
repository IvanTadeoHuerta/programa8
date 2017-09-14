const multiRegistroMixin = {
    methods: {
        eliminarMultiRegistro(consecutivo, folio, nombreTabla) {
            swal({
                title: `¿ Esta seguro de eliminar el consecutivo ${consecutivo} ?`,
                type: 'question',
                html: '',
                showCancelButton: true,
                confirmButtonColor: '#808B96',
                cancelButtonColor: '#BDBDBD',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Si!',
                allowOutsideClick: false,
                allowEnterKey: false
            }).then((isConfirm) => {
                if (isConfirm) {
                    if (nombreTabla == 'dependencia') {
                        this.eliminarDependencia(consecutivo)
                    }else if(nombreTabla == 'vehiculos'){
                        this.eliminarVehiculo(consecutivo)
                    }else if (nombreTabla == 'personas'){
                        this.eliminarPersona(consecutivo)
                    }else if(nombreTabla == 'productos'){
                        this.eliminarProducto(consecutivo)
                    }else if(nombreTabla == 'predios'){
                        this.eliminarPredio(consecutivo)
                    }else if(nombreTabla == 'inspectores'){
                        this.eliminarInspector(consecutivo)
                    }else if(nombreTabla == 'archivos'){
                        this.eliminarArchivo(consecutivo)
                    }else{
                        alert(`El nombre de la tabla no coincide con ninguna opción.
                               Por favor contacte al administrador del sistema`)
                    }
                }
            })
        },
        actualizarMultiRegistro(consecutivo,tipo){
            this.$emit('setConsecutivoTipo',consecutivo,tipo)
        },
        popArreglo(arreglo, valor, propiedad) {
            if (arreglo.length > 0) {
                let exist = this.arrayObjectIndexOf(arreglo, valor, propiedad);
                if (exist != -1) {
                    arreglo.splice(exist, 1);
                    find = true;
                }

            }
        },

        arrayObjectIndexOf(arr, searchTerm, property) {

            for (let i = 0, len = arr.length; i < len; i++) {

                if (arr[i][property] === searchTerm) {
                    return i;
                }
            }
            return -1;
        }
    }
}

export default multiRegistroMixin