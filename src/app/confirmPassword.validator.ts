import { AbstractControl } from "@angular/forms";

export function confirmPassward(control:AbstractControl){
    const password = control.get('password');
    const confirmPassward = control.get('confirmPassward');
    if (password?.pristine || confirmPassward?.pristine){
        return null;
    }
    return password && confirmPassward && password.value !== confirmPassward.value?{'mismatch': true}:null
}