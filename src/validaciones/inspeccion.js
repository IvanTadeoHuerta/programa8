import regex from './regex'

function validarFormulario (element) {
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

export default validarFormulario

