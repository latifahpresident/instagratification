    export const checkValidity = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid; //remove white space then if value is not an empty string then isValis is true
        } 
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        } 
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }