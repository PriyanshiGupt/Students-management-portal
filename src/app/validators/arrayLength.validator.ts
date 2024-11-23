import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms'
export function ArrayLengthValidator(minLength: number, maxLength?: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const arr = control.value;
        if(arr?.length < minLength) {
            return {customError: {
                message: `Minimum ${minLength} entries required`
            }}
        } 

        if(maxLength && arr?.length > maxLength) {
            return {customError: {
                message: `Maximum ${maxLength} entries accepted`
            }}
        }

        return null;
    }
}