// validando se os campos usuário e senha são iguais

import { FormGroup } from "@angular/forms";

// recebendo o formulário inteiro para comparar esses dois campos de usuário e senha
export function usuarioSenhaIguaisValidator(FormGroup: FormGroup) {
    // pegando usuário e senha
    const userName = FormGroup.get('userName')?.value ?? '';
    const password = FormGroup.get('password')?.value ?? '';

    // se usuário e senha existir fazer a comparação senão retornar null
    if (userName.trim() + password.trim()) {
        return userName != password ? null : {senhaIgualUsuario: true};
    } else {
        return null;
    }
}