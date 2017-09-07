function regex() {
    jQuery.validator.addMethod("valueNotEquals",
        function (value, element, arg) {
            return arg != value;
        }
    )
}


export default regex
