function regex() {
    jQuery.validator.addMethod("valueNotEquals",
        function (value, element, arg) {
            return arg != value;
        }
    )

    //Aqui agregas expresion regular
}


export default regex
