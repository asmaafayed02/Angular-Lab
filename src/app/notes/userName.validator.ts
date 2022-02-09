import { AbstractControl } from "@angular/forms";

export function forbiddenUserName(control: AbstractControl){
    const forbiddenUserName = /admin/.test(control.value)
    const forbiddenUserName2 = /administrator/.test(control.value)
    return forbiddenUserName || forbiddenUserName2? {"forbiddenUserName":{value: control.value}}:null;
}