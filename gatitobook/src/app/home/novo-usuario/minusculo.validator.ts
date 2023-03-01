// validação customizada que só vai permitir caracteres minúsculos

import { AbstractControl } from "@angular/forms";

// control: elemento que eu quero validar
// AbstractControl: tipo do pacote forms
export function minusculoValidator(control: AbstractControl) {
    // pegando o valor
    const valor = control.value as string;

    if (!!valor && valor !== valor.toLowerCase()) {
        return { minusculo: true };
    } else {
        return null;
    }
}