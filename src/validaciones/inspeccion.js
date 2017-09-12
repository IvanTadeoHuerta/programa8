import regex from './regex'

const validarFormulario = {}



validarFormulario.agregarPlugin = function(element) {

    if (element.length > 0) element.validate().destroy()

    element.validate({
        errorElement: 'span',
        wrapper: 'label',
        rules: {
            region: {
                valueNotEquals: '-1'
            },

            anio: {
                valueNotEquals: '-1'
            }
        },
        messages: {
            region: {
                valueNotEquals: 'Seleccione una opción'
            },

            anio: {
                valueNotEquals: 'Seleccione una opción'
            }
        }
    })

    regex()
}

validarFormulario.esValido = function (form){
    form.validate()
    return form.valid()
}

export default validarFormulario

