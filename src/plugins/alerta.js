const alerta = {}

alerta.install = function (Vue) {

    Vue.prototype.$alerta = {
        info: (title, text, html) => {
            swal({
                title,
                text,
                html,
                type: "info",
                confirmButtonText: "Aceptar"
            })
        },
        error: (text) => {
            swal({
                title: "Ocurrio un error",
                text,
                type: "error",
                confirmButtonColor: "#F78181",
                confirmButtonText: "Aceptar",
                closeOnConfirm: false,
                allowOutsideClick: false,
                allowEnterKey: false
            })
        },
        exito: (text) => {
            swal({
                title: "Exito!",
                text ,
                type: "success",
                confirmButtonColor: "#04B431",
                confirmButtonText: "Aceptar"
            })
        }
    }
}

//Así usar en  los componentes
//this.$alerta.error('Ocurrio algo mal ejemplo')
//this.$alerta.exito('se registro correctamten')
//this.$alerta.info('Titulo ejemplo','','<h4><b>Este es un mensaje dentro de html</b></h4>')

export default alerta